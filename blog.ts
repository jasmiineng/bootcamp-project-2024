type Blog = {
  title: string;
  date: string;
  description: string;
  image: string; //(ex. “./images/me.png”)
  imageAlt: string;
  slug: string; //a slug is a URL name used to redirect to a specific page
};

const blogs: Blog[] = [
  {
    title: "Blog #1",
    date: "10/27/2024",
    description: "First blog ever!",
    image: "minionselfie.png",
    imageAlt: "Minion taking selfie.",
    slug: "./blog/blog1.html",
  },
  {
    title: "Blog #2",
    date: "10/28/2024",
    description: "Second blog ever!",
    image: "minionselfie.png",
    imageAlt: "Minion taking selfie.",
    slug: "./blog/blog2.html",
  },
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const blogDiv = document.createElement("div");
  blogDiv.className = "blog-post";


  const blogTitle = document.createElement("h1");
  blogTitle.textContent = blog.title;
  blogDiv.appendChild(blogTitle);


  const blogDate = document.createElement("p");
  blogDate.textContent = blog.date;
  blogDiv.appendChild(blogDate);


  const blogDescription = document.createElement("p");
  blogDescription.textContent = blog.description;
  blogDiv.appendChild(blogDescription);


  const blogImage = document.createElement("img");
  blogImage.src = blog.image;
  blogImage.alt = "Image for ${blog.title}";
  blogImage.width = 350;
  blogImage.height = 300;
  blogDiv.appendChild(blogImage);

  
  const blogSlug = document.createElement("a");
  blogSlug.href = blog.slug;
  blogSlug.textContent = "Read more";
  blogDiv.appendChild(blogSlug);

  blogContainer && blogContainer.appendChild(blogDiv); //if it is not null, run
});
