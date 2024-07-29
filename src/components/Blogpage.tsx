"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";

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
      setBlogPosts(data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setError("Failed to fetch blog posts. Please try again later.");
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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div>
        {error && <p>Error: {error}</p>}
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
              className="flex gap-6"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="rounded"
                />
              )}
              <div>
                <h2>{post.title}</h2>
                <p>
                  <strong>Author:</strong> {post.author}
                </p>
                <p>
                  <strong>Tags:</strong> {post.tags?.join(", ") || "No tags"}
                </p>
                
                <p>
                  <small>
                    Date:{" "}
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString()
                      : "Unknown"}
                  </small>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
