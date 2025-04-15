import mongoose from "mongoose";

const QuestionsSchema = new mongoose.Schema(
  {
    title: String,
    interviewId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Interview", // Refers to the Interview model
        required: true
      },
    
    questions: [
      {
       
        question: String,
        answer: String,
       
      },
    ],
  },
  { timestamps: true }
);

const Question = mongoose.models.Question || mongoose.model("Question", QuestionsSchema);
export default Question;
