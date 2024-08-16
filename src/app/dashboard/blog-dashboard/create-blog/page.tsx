







"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// Dynamically import ReactQuill with client-side rendering only
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import Link from "next/link";

const BlogForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Rich text content
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (title) {
      setSlug(generateSlug(title));
    }
  }, [title]);

  const generateSlug = (title: string) => {
    return title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Allow only alphanumeric characters and spaces
      .replace(/\s+/g, "-") // Replace multiple spaces with a single hyphen
      .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that all required fields are set
    if (!title || !content || !slug) {
      setError("Missing required fields: title, content, or slug");
      return;
    }

    try {
      let imageUrl = "";
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
        );

        if (
          !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
          !process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        ) {
          throw new Error("Cloudinary configuration is missing");
        }

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();

        if (!res.ok || !data.secure_url) {
          throw new Error(data.error.message || "Image upload failed");
        }

        imageUrl = data.secure_url;
      }

      const res = await fetch(`/api/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content, // Rich text content as HTML
          author,
          tags: tags.split(",").map((tag) => tag.trim()),
          slug,
          image: imageUrl,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create blog post");
      }

      setSuccess("Blog post created successfully!");
      setTitle("");
      setContent("");
      setAuthor("");
      setTags("");
      setSlug("");
      setImage(null);
    } catch (error: any) {
      console.error("Error:", error);
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="p-6">
        <Link
          href="/dashboard/blog-dashboard"
          className=" px-6 hover:bg-gray-900 p-2 bg-black text-white rounded"
        >
          Back
        </Link>
      </div>
      <div className="flex flex-col mt-4 px-10">
        <h1>Create a New Blog Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label>Content:</label>
            <ReactQuill
              value={content}
              onChange={(value) => setContent(value)}
              modules={{ toolbar: true }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
                "align",
              ]}
              
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label>Tags (comma-separated):</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label>Image: </label>
            <input type="file" onChange={handleImageChange} />
          </div>
          <button type="submit" className="bg-[#3361AC] text-white p-3 md:w-72 font-bold rounded">Submit</button>
        </form>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default BlogForm;
