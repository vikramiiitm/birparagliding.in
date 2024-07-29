"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DOMPurify from "dompurify";
import HashLoader from "react-spinners/HashLoader";

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

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blogPost) {
    return <p>No blog post found</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-4">
        {blogPost.image && (
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={1000}
            height={1000}
            className="w-full h-[70vh] object-cover rounded"
          />
        )}
        <div className="flex justify-between mt-4">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            {blogPost.title}
          </h1>
          <p>
            <small>
              <strong> Date:</strong>{" "}
              {blogPost.createdAt
                ? new Date(blogPost.createdAt).toLocaleDateString()
                : "Unknown"}
            </small>
          </p>
        </div>
        <div
          className="blog-content py-4"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blogPost.content),
          }}
        />

        <div className="flex justify-end gap-5 pb-5">
          <p>
            <strong>Author:</strong> {blogPost.author}
          </p>
          <p>
            <strong>Tags:</strong> {blogPost.tags?.join(", ") || "No tags"}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
