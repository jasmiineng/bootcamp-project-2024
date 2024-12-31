export interface Blog {
    name: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  }
  
  export const blogs: Blog[] = [
    {
      name: "Blog #1",
      date: "10/27/2024",
      description: "First blog ever!",
      image: "/minionselfie.png",
      imageAlt: "Minion taking selfie.",
      slug: "./blog/blog1",
    },
    {
      name: "Blog #2",
      date: "10/28/2024",
      description: "Second blog ever!",
      image: "/minionselfie.png",
      imageAlt: "Minion taking selfie.",
      slug: "./blog/blog2",
    },
  ];

  export default blogs; // This will allow us to access this data anywhere!

  