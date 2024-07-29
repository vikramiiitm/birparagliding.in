"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DOMPurify from "dompurify";

interface BlogPost {
  title: string;
  content: string;
  author: string;
  tags?: string[];
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

const BlogPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const res = await fetch(`/api/blog/${params.slug}`);
        if (!res.ok) {
          if (res.status === 404) {
            notFound(); // Trigger a 404 page if blog post is not found
            return;
          }
          throw new Error(`HTTP status ${res.status}`);
        }
        const data: BlogPost = await res.json();
        setBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Failed to fetch blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [ params.slug ]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blogPost) {
    return <p>No blog post found</p>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <h1>{blogPost.title}</h1>
        {blogPost.image && (
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={1000}
            height={1000}
            className="w-[40vw] rounded"
          />
        )}

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blogPost.content),
          }}
        />
        <p>
          <small>
            Date:{" "}
            {blogPost.createdAt
              ? new Date(blogPost.createdAt).toLocaleDateString()
              : "Unknown"}
          </small>
        </p>
        <p>
          <strong>Author:</strong> {blogPost.author}
        </p>
        <p>
          <strong>Tags:</strong> {blogPost.tags?.join(", ") || "No tags"}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
