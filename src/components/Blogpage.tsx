"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ParaBlog from "../../public/home/paraPerson.jpg";
import HashLoader from "react-spinners/HashLoader";

interface BlogPost {
  title: string;
  content: string;
  author: string;
  tags?: string[];
  image?: string;
  createdAt?: string; // Dates as ISO strings
  updatedAt?: string; // Dates as ISO strings
  slug: string; // Ensure slug is part of BlogPost
  _id?: string; // Include _id if used for fetching individual posts
}

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const fetchBlogPosts = useCallback(async () => {
    try {
      const res = await fetch("/api/blog");
      if (!res.ok) {
        throw new Error(`HTTP status ${res.status}`);
      }
      const data: BlogPost[] = await res.json();
      console.log("Fetched blog posts:", data); // Log fetched data to check slug

       const sortedPosts = data.sort(
         (a, b) =>
           new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
       );
      setBlogPosts(sortedPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      // setError("Failed to fetch blog posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  const handleCardClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  if (loading) {
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[.9] text-white">
        {" "}
        <p className="flex mx-auto h-full justify-center items-center text-6xl">
          <HashLoader
            color="#000"
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </p>{" "}
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="p-5 h-[50vh] py-12 relative overflow-hidden">
        <Image
          src={ParaBlog}
          alt="Blog"
          width={1920}
          height={1080}
          className="object-cover absolute top-0 left-0 -z-10 opacity-[.4] h-[50vh]"
        />
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-8 md:mt-22 lg:mt-32">
          Welcome to the Skycandy Blog!
        </h1>
        <p className="text-center font-semibold text-lg lg:text-3xl mt-4">
          Here you can find all the latest blog posts.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div>
          {error && <p>Error: {error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.length === 0 ? (
              <p>No blog posts available</p>
            ) : (
              blogPosts.map((post) => (
                <div
                  key={post._id} // Use _id or slug as key
                  onClick={() => handleCardClick(post.slug)}
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={400}
                        className="rounded"
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-start">
                      {post.title}
                    </h2>
                    {/* <p>
                      <strong>Tags:</strong>{" "}
                      {post.tags?.join(", ") || "No tags"}
                    </p> */}

                    <div className="flex flex-col mt-2 justify-between">
                      <p>
                        <strong>Author:</strong> {post.author}
                      </p>
                      <p>
                        <small>
                          <strong>Date:</strong>{" "}
                          {post.createdAt
                            ? new Date(post.createdAt).toLocaleDateString()
                            : "Unknown"}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
