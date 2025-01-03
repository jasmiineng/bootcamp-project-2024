import React from "react";
import style from "./comment.module.css";
import { IComment } from "@/database/blogSchema";

type CommentProps = {
  comment: IComment;
};

// Function to format the comment time
function parseCommentTime(time: Date) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Include day of the week
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(time).toLocaleString(undefined, options); // Use locale options for formatting
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className={style.commentItem}>
      <p className={style.commentUser}>{comment.user}</p>
      <p className={style.commentContent}>{comment.content}</p>
      <p className={style.commentTime}>{parseCommentTime(comment.time)}</p>
    </div>
  );
}


  