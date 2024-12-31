import React from "react";
import style from "./comment.module.css";

type CommentProps = {
  comment: {
    user: string;
    content: string;
    time: string | Date; // Allow both string and Date types
  };
};

export default function Comment({ comment }: CommentProps) {
  const formattedTime =
    typeof comment.time === "string"
      ? new Date(comment.time).toLocaleString()
      : comment.time.toLocaleString();

  return (
    <div className={style.commentItem}>
      <p className={style.commentUser}>{comment.user}</p>
      <p className={style.commentContent}>{comment.content}</p>
      <p className={style.commentTime}>{formattedTime}</p>
    </div>
  );
}

  