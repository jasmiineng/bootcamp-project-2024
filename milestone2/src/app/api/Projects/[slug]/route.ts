import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db"; // Default import
import ProjectModel from "@/database/projectSchema"; // Ensure correct export in projectSchema.ts

interface PropsProm {
  params: { slug: string };
}

// Handle GET request to fetch a project by slug
export async function GET(req: NextRequest, { params }: PropsProm) {
  await connectDB(); // Ensure DB is connected
  const { slug } = params;

  try {
    // Fetch the project by slug
    const project = await ProjectModel.findOne({ slug });
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    console.log("This is the slug:", slug);
    return NextResponse.json(project); // Return the found project
  } catch (err) {
    console.error("Error fetching project:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// Handle POST request to add a comment to a project
export async function POST(request: Request) {
  try {
    await connectDB(); // Ensure DB is connected

    const { slug, user, content } = await request.json();

    // Fetch the project by slug
    const project = await ProjectModel.findOne({ slug });
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Add the new comment
    const newComment = {
      user,
      content,
      time: new Date(),
    };
    project.comments.push(newComment);

    // Save the updated project
    await project.save();

    return NextResponse.json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Error in POST route:", error);
    return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
  }
}
