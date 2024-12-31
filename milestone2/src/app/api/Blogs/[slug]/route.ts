import { NextResponse } from "next/server";
import { blogs } from "@/app/static/blogData";

export async function POST(request: Request) {
  try {
    const { slug, user, content } = await request.json();

    // Find the blog to update
    const blog = blogs.find((b) => b.slug === slug);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Add the new comment
    const newComment = {
      user,
      content,
      time: new Date().toISOString(),
    };
    blog.comments.push(newComment);

    return NextResponse.json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Error in POST route:", error);
    return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
  }
}
