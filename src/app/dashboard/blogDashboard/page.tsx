// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// interface BlogPost {
//   title: string;
//   content: string;
//   author: string;
//   tags?: string[];
//   createdAt?: string; // Dates as ISO strings
//   updatedAt?: string; // Dates as ISO strings
//   slug: string; // Add slug field for redirection
// }

// const BlogDashboard: React.FC = () => {
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`); // Adjust the URL if needed
//         if (!res.ok) {
//           throw new Error("Failed to fetch blog posts");
//         }
//         const data: BlogPost[] = await res.json();
//         console.log("Fetched blog posts:", data);
//         setBlogPosts(data);
//       } catch (error: any) {
//         setError("Failed to fetch blog posts. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogPosts();
//   }, []);

//   const handleCardClick = (post: BlogPost) => {
//     console.log("Navigating to:", post.slug);
//     router.push(`/blog/${post.slug}`);
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <div className="max-w-7xl mx-auto py-8">
//         <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex gap-2 py-2 px-4 rounded">
//           <span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               className="lucide lucide-circle-plus"
//             >
//               <circle cx="12" cy="12" r="10" />
//               <path d="M8 12h8" />
//               <path d="M12 8v8" />
//             </svg>
//           </span>
//           <Link className="" href="/dashboard/blogDashboard/create-blog">
//             New Post
//           </Link>
//         </Button>
//       </div>
//       <div className="max-w-7xl mx-auto">
//         {error && <p>Error: {error}</p>}
//         {blogPosts.length === 0 ? (
//           <p>No blog posts available</p>
//         ) : (
//           blogPosts.map((post) => (
//             <div
//               key={post.slug} // Use slug as key for better performance
//               onClick={() => handleCardClick(post)}
//               style={{
//                 border: "1px solid #ddd",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 cursor: "pointer",
//               }}
//               className="rounded-md flex gap-8 justify-around"
//             >
//               <h2>{post.title}</h2>
//               <p>
//                 <strong>Author:</strong> {post.author}
//               </p>

//               <p>
//                 <small>
//                   Created at:{" "}
//                   {post.createdAt
//                     ? new Date(post.createdAt).toLocaleDateString()
//                     : "Unknown"}
//                 </small>
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogDashboard;



"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  content: string;
  author: string;
  tags?: string[];
  createdAt?: string; // Dates as ISO strings
  updatedAt?: string; // Dates as ISO strings
  slug: string; // Add slug field for redirection
}

const BlogDashboard: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`); // Adjust the URL if needed
        if (!res.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data: BlogPost[] = await res.json();
        console.log("Fetched blog posts:", data);
        setBlogPosts(data);
      } catch (error: any) {
        setError("Failed to fetch blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleCardClick = (post: BlogPost) => {
    console.log("Navigating to:", post.slug);
    router.push(`/blog/${post.slug}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto py-8 flex gap-10">
        <Link href="/dashboard/blogDashboard/create-blog" passHref>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex gap-2 py-2 px-4 rounded">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-plus"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </span>
            New Post
          </Button>
        </Link>
        <Link href="/dashboard/blogDashboard/crudBlog" passHref>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex gap-2 py-2 px-4 rounded">
           
            Edit Post
          </Button>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto">
        {error && <p>Error: {error}</p>}
        {blogPosts.length === 0 ? (
          <p>No blog posts available</p>
        ) : (
          blogPosts.map((post) => (
            <div
              key={post.slug} // Use slug as key for better performance
              onClick={() => handleCardClick(post)}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              className="rounded-md flex gap-8 justify-around"
            >
              <h2>{post.title}</h2>
              <p>
                <strong>Author:</strong> {post.author}
              </p>

              <p>
                <small>
                  Created at:{" "}
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString()
                    : "Unknown"}
                </small>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogDashboard;
