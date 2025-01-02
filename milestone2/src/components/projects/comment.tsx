import React from "react";
import style from "./comment.module.css";
import { IComment } from "@/database/projectSchema"; // Update the path to match your project schema

type CommentProps = {
  comment: IComment;
};

// Function to format the comment time
function parseCommentTime(time: Date) {
  return new Date(time).toLocaleString(); // Formats the date as a readable string
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
