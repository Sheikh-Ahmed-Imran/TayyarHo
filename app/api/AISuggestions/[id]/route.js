import { NextResponse } from "next/server";
import connectDB from '../../lib/databaseConn'
import Suggestions from '../../models/SuggestionModel';

// ✅ Fetch AI Suggestion by ID
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const suggestion = await Suggestions.find({ interviewId: id });

    if (!suggestion) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(suggestion, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ✅ Delete AI Suggestion by ID
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { deletedCount } = await Suggestions.deleteMany({ interviewId: params.id });
    
    if (deletedCount === 0) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ✅ Update AI Suggestion by ID
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const data = await req.json();
    
    const updatedSuggestion = await Suggestions.findByIdAndUpdate(params.id, data, { new: true, runValidators: true });

    if (!updatedSuggestion) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(updatedSuggestion, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
