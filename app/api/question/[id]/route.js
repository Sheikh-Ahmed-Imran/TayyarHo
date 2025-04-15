import dbConnect from "../../lib/databaseConn";
import Question from "../../models/QuestionsModel";
import mongoose from "mongoose"; 
export async function GET(req, { params }) {
  await dbConnect();
  let { id } = await params;
  id = id.trim(); // Ensure there's no extra whitespace or characters

  // Validate ObjectId before querying the database
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ message: "Invalid Question ID" }), { status: 400 });
  }
  try {
    const question = await Question.findById(id);
    if (!question) return new Response(JSON.stringify({ message: "Question not found" }), { status: 404 });
    return new Response(JSON.stringify(question), { status: 200 });
  } catch (error) {

    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}


export async function PUT(req, { params }) {
  const { id } =await  params; // Interview ID
  const { answers } = await req.json(); // Expecting an array of answers

  try {
    await dbConnect();

    // Find the document by interviewId
    const questionDoc = await Question.findOne({ interviewId: id });

    if (!questionDoc) {
      return new Response(JSON.stringify({ error: "Question not found" }), { status: 404 });
    }

    // Ensure the number of answers matches the number of questions
    if (questionDoc.questions.length !== answers.length) {
      return new Response(JSON.stringify({ error: "Answers length mismatch" }), { status: 400 });
    }

    // Update answers individually
    questionDoc.questions.forEach((q, index) => {
      q.answer = answers[index]; // Assign the corresponding answer
    });

    // Save the updated document
    await questionDoc.save();

    return new Response(JSON.stringify(questionDoc), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } =await params;

  try {
    const deletedQuestion = await Question.findByIdAndDelete(id);
    if (!deletedQuestion) return new Response(JSON.stringify({ message: "Question not found" }), { status: 404 });
    return new Response(JSON.stringify({ message: "Question deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error deleting question" }), { status: 500 });
  }
}
