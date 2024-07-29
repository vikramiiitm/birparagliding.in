// // pages/admin/blogs.tsx
// 'use client';

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface BlogPost {
//   title: string;
//   content: string;
//   author: string;
//   tags?: string[];
//   createdAt?: string;
//   updatedAt?: string;
//   slug: string;
// }

// const AdminBlogsPage: React.FC = () => {
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
//         if (!res.ok) {
//           throw new Error("Failed to fetch blog posts");
//         }
//         const data: BlogPost[] = await res.json();
//         setBlogPosts(data);
//       } catch (error: any) {
//         setError("Failed to fetch blog posts. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogPosts();
//   }, []);

//   const handleView = (slug: string) => {
//     router.push(`/blog/${slug}`);
//   };

//   const handleUpdate = (slug: string) => {
//     router.push(`/update/${slug}`);
//   };

//   const handleDelete = async (slug: string) => {
//     if (confirm("Are you sure you want to delete this blog post?")) {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
//           {
//             method: "DELETE",
//           }
//         );
//         if (!res.ok) {
//           throw new Error("Failed to delete blog post");
//         }
//         setBlogPosts(blogPosts.filter((post) => post.slug !== slug));
//         alert("Blog post deleted successfully!");
//       } catch (error: any) {
//         alert(error.message || "An error occurred");
//       }
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>All Blog Posts</h1>
//       {error && <p>Error: {error}</p>}
//       {blogPosts.length === 0 ? (
//         <p>No blog posts available</p>
//       ) : (
//         blogPosts.map((post) => (
//           <div
//             key={post.slug}
//             style={{
//               border: "1px solid #ddd",
//               padding: "10px",
//               marginBottom: "10px",
//               cursor: "pointer",
//             }}
//           >
//             <h2>{post.title}</h2>
//             <p>
//               <strong>Author:</strong> {post.author}
//             </p>
//             <p>
//               <strong>Tags:</strong> {post.tags?.join(", ") || "No tags"}
//             </p>
//             <p>{post.content}</p>
//             <p>
//               <small>
//                 Created at:{" "}
//                 {post.createdAt
//                   ? new Date(post.createdAt).toLocaleDateString()
//                   : "Unknown"}
//               </small>
//             </p>
//             <p>
//               <small>
//                 Updated at:{" "}
//                 {post.updatedAt
//                   ? new Date(post.updatedAt).toLocaleDateString()
//                   : "Unknown"}
//               </small>
//             </p>
//             <div>
//               <button onClick={() => handleView(post.slug)}>View</button>
//               <button onClick={() => handleUpdate(post.slug)}>Update</button>
//               <button onClick={() => handleDelete(post.slug)}>Delete</button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AdminBlogsPage;


'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface BlogPost {
  title: string;
  content: string;
  author: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  slug: string;
}

const AdminBlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`); // Replace with your API endpoint
        if (!res.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data: BlogPost[] = await res.json();
        setBlogPosts(data);
      } catch (error: any) {
        setError('Failed to fetch blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleView = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  const handleUpdate = (slug: string) => {
    router.push(`/dashboard/blogDashboard/updateBlog/${slug}`); // Replace with your update page path
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
          { method: "DELETE" }
        ); // Replace with your API endpoint
        if (!res.ok) {
          throw new Error('Failed to delete blog post');
        }
        setBlogPosts(blogPosts.filter((post) => post.slug !== slug));
        alert('Blog post deleted successfully!');
      } catch (error: any) {
        console.error('Error deleting blog post:', error);
        alert('An error occurred while deleting the blog post.');
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>All Blog Posts</h1>
      {error && <p>Error: {error}</p>}
      {blogPosts.length === 0 ? (
        <p>No blog posts available</p>
      ) : (
        <ul className='my-5 w-full gap-4'>
          {blogPosts.map((post) => (
            <li key={post.slug} className='flex p-2 items-center justify-around border'>
              <h2>{post.title}</h2>
              {/* ... other post details */}
              <button onClick={() => handleUpdate(post.slug)}>Update</button>
              <button onClick={() => handleDelete(post.slug)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminBlogsPage;