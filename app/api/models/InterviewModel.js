import mongoose from "mongoose";

const InterviewSchema = new mongoose.Schema(
  {
    title: String,
    description: { type: String },
    experience: String,
    skills: [{ type: String }],
    level: {
      type: String,
      enum: ["Easy", "Medium", "Hard"], // Allowed values
      required: true, // Make it mandatory
    },
    taken:{
      type:Boolean,
      default:false,
    },
    evaluated:{
      type:Boolean,
      default:false,
    },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }] 
  },
  { timestamps: true }
);

const Interview = mongoose.models.Interview || mongoose.model("Interview", InterviewSchema);
export default Interview;
