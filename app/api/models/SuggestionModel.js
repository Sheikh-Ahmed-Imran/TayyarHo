
import mongoose from 'mongoose';

const SuggestionsSchema = new mongoose.Schema(
  {
    rating: { type: Number, min: 1, max: 5 },
    aianswer: String,
    suggestions: String,

    // Ensure this matches frontend data structure
    emotions: {
      nervousness: { type: Number, min: 1, max: 5 },
      confidence: { type: Number, min: 1, max: 5 },
      clarity: { type: Number, min: 1, max: 5 },
      enthusiasm: { type: Number, min: 1, max: 5 },
    },

    emotionAdvice: String, // This should match frontend field name
    interviewId: { type: mongoose.Schema.Types.ObjectId, ref: "Interview", required: true },
    questionsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
);


const Suggestions =
  mongoose.models.Suggestions || mongoose.model("Suggestions", SuggestionsSchema);

export default Suggestions;
