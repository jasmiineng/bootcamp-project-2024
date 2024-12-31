export interface Blog {
    name: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    comments: { user: string; content: string; time: string }[];
  }
  
  export const blogs: Blog[] = [
    {
      name: "Blog #1",
      date: "10/27/2024",
      description: "First blog ever!",
      image: "/minionselfie.png",
      imageAlt: "Minion taking selfie.",
      slug: "blog1", 
      comments: [
        { user: "John", content: "Great blog!", time: "2024-10-28T10:00:00Z" },
      ],
    },
    {
      name: "Blog #2",
      date: "10/28/2024",
      description: "Second blog ever!",
      image: "/minionselfie.png",
      imageAlt: "Minion taking selfie.",
      slug: "blog2",
      comments: [
        { user: "Jane", content: "I enjoyed this!", time: "2024-10-29T11:00:00Z" },
      ],
    },
  ];

  export default blogs; 
  