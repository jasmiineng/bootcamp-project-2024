import React from "react";
import style from "./comment.module.css";
import { IComment } from "@/database/blogSchema";


type CommentProps = {
  comment: IComment;
}
//basically just formats the comment time
{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
  function parseCommentTime(time: Date){
    /*
      Implementation up to you...
    */
      return new Date(time).toDateString();
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

  