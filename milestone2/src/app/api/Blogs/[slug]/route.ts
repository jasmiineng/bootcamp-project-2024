import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> } // Correct type for context.params as a Promise
) {
  await connectDB(); // Ensure DB is connected

  try {
    // Resolve the promise to extract the `slug`
    const resolvedParams = await context.params;
    const { slug } = resolvedParams;

    // Fetch the blog post by slug
    const blog = await BlogModel.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    console.log("Fetched blog for slug:", slug);
    return NextResponse.json(blog); // Return the found blog
  } catch (err) {
    console.error("Error fetching blog:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB(); // Ensure DB is connected

    const { slug, user, content } = await req.json();

    // Fetch the blog post by slug
    const blog = await BlogModel.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Add the new comment
    const newComment = {
      user,
      content,
      time: new Date(),
    };
    blog.comments.push(newComment);

    // Save the updated blog
    await blog.save();

    return NextResponse.json({ message: "Comment added successfully" });
  } catch (err) {
    console.error("Error in POST route:", err);
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 500 }
    );
  }
}







/*
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db"; 
import BlogModel from "@/database/blogSchema"; 

interface PropsProm {
  params: { slug: string };
}

export async function GET(req: NextRequest, { params }: PropsProm) {
  await connectDB(); // Ensure DB is connected
  const { slug } = params;

  try {
    // Fetch the blog post by slug
    const blog = await BlogModel.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    console.log("this is the slug.       ",slug)
    return NextResponse.json(blog); // Return the found blog
  } catch (err) {
    console.error("Error fetching blog:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB(); // Ensure DB is connected

    const { slug, user, content } = await request.json();

    // Fetch the blog post by slug
    const blog = await BlogModel.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Add the new comment
    const newComment = {
      user,
      content,
      time: new Date(),
    };
    blog.comments.push(newComment);

    // Save the updated blog
    await blog.save();

    return NextResponse.json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Error in POST route:", error);
    return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
  }
}
*/