import { NextResponse } from "next/server";
import dbConnect from '../../lib/databaseConn'
import Interview from '../../models/InterviewModel'

// GET interview by ID
export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const interview = await Interview.findById(id);
    
    if (!interview) {
      return NextResponse.json({ message: "Interview not found" }, { status: 404 });
    }
    
    return NextResponse.json(interview, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

// DELETE interview by ID
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const deletedInterview = await Interview.findByIdAndDelete(params.id);
    
    if (!deletedInterview) {
      return NextResponse.json({ message: "Interview not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Interview deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete interview" }, { status: 500 });
  }
}
