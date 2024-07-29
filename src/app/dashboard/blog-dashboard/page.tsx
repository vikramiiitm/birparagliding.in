"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HashLoader from "react-spinners/HashLoader";

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
          throw new Error("Failed to fetch blog posts");
        }
        const data: BlogPost[] = await res.json();
        console.log("Fetched blog posts:", data); // Log fetched data to check slug

        const sortedPosts = data.sort(
          (a, b) =>
            new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
        );
        setBlogPosts(sortedPosts);
      } catch (error: any) {
        setError("Failed to fetch blog posts. Please try again later.");
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
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
          { method: "DELETE" }
        ); // Replace with your API endpoint
        if (!res.ok) {
          throw new Error("Failed to delete blog post");
          
        }
        setBlogPosts(blogPosts.filter((post) => post.slug !== slug));
        alert("Blog post deleted successfully!");
      } catch (error: any) {
        console.error("Error deleting blog post:", error);
        alert("An error occurred while deleting the blog post.");
      }
    }
  };

  if (loading) {
    return (
      <p className="flex mx-auto h-screen justify-center items-center text-6xl">
        <HashLoader
          color="#000"
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <div className="flex justify-between">
        <Link
          href="/dashboard"
          className=" px-6 hover:bg-gray-900 p-2 bg-black text-white rounded"
        >
          Back
        </Link>
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
      </div>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-4">
        All Blog Posts
      </h1>
      {error && <p>Error: {error}</p>}
      {blogPosts.length === 0 ? (
        <p>No blog posts available</p>
      ) : (
        <ul className="my-5 w-full flex flex-col gap-4 ">
          {blogPosts.map((post) => (
            <li
              key={post.slug}
              className="flex p-4 gap-2 items-center justify-between border rounded hover:bg-blue-100 hover:text-blue-500 duration-500"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              {/* ... other post details */}
              <div className="flex gap-5">
                <button
                  className="hover:text-green-600 text-green-500 duration-500"
                  onClick={() => handleUpdate(post.slug)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-pencil"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </button>
                <button
                  className="hover:text-red-500 text-red-600 duration-500"
                  onClick={() => handleDelete(post.slug)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminBlogsPage;
