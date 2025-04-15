import dbConnect from "../lib/databaseConn";
import Question from "../models/QuestionsModel";
import Interview from "../models/InterviewModel";

export async function GET() {
  await dbConnect();
  try {
    const questions = await Question.find();
    return new Response(JSON.stringify(questions), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching questions" }), { status: 500 });
  }
}
export async function POST(req) {
  await dbConnect();
  try {
    const requestData = await req.json();
    // Check if questions already exist for this interviewId
    let existingQuestions = await Question.findOne({ interviewId: requestData.interviewId });

    if (existingQuestions) {
      return new Response(JSON.stringify(existingQuestions), { status: 200 });
    }

    // Ensure `questions` field is structured correctly
    const formattedQuestions = requestData.questions.map(q => ({
      question: q.question,
      answer: q.answer || "",
    }));

    // Save to MongoDB
    const newQuestion = new Question({
      title: requestData.title,
      interviewId: requestData.interviewId,
      questions: formattedQuestions
    });

    await newQuestion.save();

    // Update the interview's `taken` field to `true` AND store the question ID
    await Interview.findOneAndUpdate(
      { _id: requestData.interviewId }, 
      { 
        taken: true,
        $push: { questions: newQuestion._id } // Store question ID in interview
      },
      { new: true } // Returns the updated document
    );

    return new Response(JSON.stringify(newQuestion), { status: 201 });
  } catch (error) {
    console.error("Error saving question:", error);
    return new Response(JSON.stringify({ message: "Error saving question" }), { status: 500 });
  }
}


