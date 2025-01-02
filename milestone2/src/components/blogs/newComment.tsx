
"use client";
import React, { useState } from "react";
import style from "./newComment.module.css";

type commentData = {
  user: string;
  content: string;
};

type Props = {
  slug: string;
};

export default function NewComment({ slug }: Props) {
  const [formData, setFormData] = useState<commentData>({
    user: "",
    content: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/Blogs/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, slug }), // Include slug with the form data
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit comment");
      }

      setStatus("Comment submitted successfully!");
      setFormData({ user: "", content: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting comment:", error);
      setStatus("Failed to submit comment.");
    }
  };

  return (
    <div className={style.commentSec}>
      <h2>Leave a Comment!</h2>
      <form className={style.formInfo} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Name:</label>
          <input
            className={style.user}
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleInputChange}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="content">Comment:</label>
          <textarea
            className={style.comment}
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write your comment"
            required
          />
        </div>
        <button type="submit" className={style.button}>
          Submit Comment
        </button>
      </form>
      {status && <p className={style.status}>{status}</p>}
    </div>
  );
}

