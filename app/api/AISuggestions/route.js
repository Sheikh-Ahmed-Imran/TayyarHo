// api/suggestions/route.js
import { Error } from 'mongoose';
import Interview from '../models/InterviewModel'
import connectDB from '../lib/databaseConn'
import Suggestions from '../models/SuggestionModel'
export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();


    // Save multiple suggestions
    const savedSuggestions = await Suggestions.insertMany(data, { strict: false });


    // Extract the interviewId from the first question (assuming all have the same interviewId)
    const interviewId = data[0]?.interviewId;

    if (interviewId) {
      // Update the 'evaluated' field of the corresponding interview
      await Interview.findByIdAndUpdate(interviewId, { evaluated: true });

    } else {
      }

    // Fetch latest saved document for debugging

    return new Response(JSON.stringify(savedSuggestions), { status: 201 });
  } catch (error) {
    console.error("Error saving suggestions:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


export async function GET() {
  try {
    await connectDB();
    const suggestions = await Suggestions.aggregate([
      {
        $group: {
          _id: "$interviewId",
          suggestion: { $first: "$$ROOT" },
        },
      },
      {
        $lookup: {
          from: "interviews",
          localField: "_id",
          foreignField: "_id",
          as: "interview",
        },
      },
      { $unwind: "$interview" },
      {
        $project: {
          _id: "$suggestion._id",
          text: "$suggestion.createdAt",
          interviewSuggestion: "$suggestion.aianswer",
          rating:"$suggestion.rating",
          questionId: { $arrayElemAt: ["$suggestion.questionsId", 0] }, // Get first questionId
          interviewTitle: "$interview.title",
          interviewExperience: "$interview.experience",
          interviewDate: "$suggestion.createdAt",
        },
      },
      {
        $lookup: {
          from: "questions",
          let: { questionId: "$questionId" },
          pipeline: [
            {
              $match: {
                "questions._id": { $exists: true },
                $expr: { $in: ["$$questionId", "$questions._id"] }, // Find the parent document where questions array contains this _id
              },
            },
            {
              $project: {
                _id: 1, // Parent Question Document ID
                matchedQuestion: {
                  $arrayElemAt: [
                    {
                      $filter: {
                        input: "$questions",
                        as: "q",
                        cond: { $eq: ["$$q._id", "$$questionId"] }, // Match the specific question inside the array
                      },
                    },
                    0,
                  ],
                },
              },
            },
          ],
          as: "questionDoc",
        },
      },
      { $unwind: "$questionDoc" },
      {
        $project: {
          _id: 1,
          text: 1,
          interviewSuggestion: 1,
          rating:1,
          interviewTitle: 1,
          interviewExperience: 1,
          interviewDate: 1,
          questionId: 1,
          parentQuestionId: "$questionDoc._id", // The _id of the parent question document
          questionText: "$questionDoc.matchedQuestion.question",
          questionAnswer: "$questionDoc.matchedQuestion.answer",
        },
      },
    ]);
    
    
    

    return new Response(JSON.stringify(suggestions), { status: 200 });
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}



export async function DELETE() {
  try {
    await connectDB();
    await Suggestions.deleteMany();
    return new Response(JSON.stringify({ message: "All suggestions deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
