
import style from './page.module.css';
import Comment from "@/components/comment";
import NewComment from '@/components/newComment';
import Footer from "@/components/footer";
import { blogs } from "@/app/static/blogData";

type commentType = {
  user: string;
  content: string;
  time: string; // Use string to match with data in `blogData`
};

type Props = {
  params: {
    slug: string;
  };
};

// Function to get the blog based on slug
function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug) || null;
}

export default function Blog({ params }: Props) {
  const blog = getBlog(params.slug);

  // Handle missing blog
  if (!blog) {
    return (
      <div className={style.errorPage}>
        <h1 className={style.pageTitle}>404 - Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className={style.blogPage}>
      <div className={style.info}>
        <div className={style.blogContent}>
          <h1 className={style.title}>{blog.name}</h1>
          <p className={style.date}>{new Date(blog.date).toLocaleDateString()}</p>
          <img
            className={style.photo}
            src={blog.image}
            alt={blog.imageAlt || "Blog Image"}
          />
          <p className={style.description}>{blog.description}</p>
        </div>

        <div className={style.commentSection}>
          <h2 className={style.commentTitle}>COMMENT SECTION</h2>
          <div className={style.commentList}>
            {blog.comments.map((comment, index) => (
              <Comment
                key={index}
                comment={{
                  ...comment,
                  time: new Date(comment.time).toLocaleString(), // Convert time to a readable string
                }}
              />
            ))}
          </div>
        </div>

        <NewComment slug={params.slug} />
      </div>

      <Footer />
    </div>
  );
}
