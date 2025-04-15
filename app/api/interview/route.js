import { NextResponse } from "next/server";
import dbConnect from '../lib/databaseConn'
import Interview from '../models/InterviewModel'
// GET all interviews
export async function GET() {
  await dbConnect();
  const interviews = await Interview.find({});
  return NextResponse.json(interviews, { status: 200 });
}

// POST a new interview
export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  
  try {
    const interview = new Interview(data);
    await interview.save();
    return NextResponse.json(interview, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE all interviews
export async function DELETE() {
  await dbConnect();
  
  try {
    await Interview.deleteMany({});
    return NextResponse.json({ message: "All interviews deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
