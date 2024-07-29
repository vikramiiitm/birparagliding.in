


"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";


interface BlogPost {
  title: string;
  content: string;
  author: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  slug: string;
  image?: string;
}

const UpdateBlogPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        const res = await fetch(
          `/api/blog/${slug}`
        );

        if (!res.ok) {
          if (res.status === 404) {
            notFound();
          }
          setError("Failed to load blog post");
          return;
        }

        try {
          const data: BlogPost = await res.json();
          setBlogPost(data);
          setTitle(data.title);
          setContent(data.content);
          setAuthor(data.author);
          setTags(data.tags?.join(", ") || "");
        } catch (err) {
          setError("Failed to parse blog post");
        }
      };

      fetchData();
    }
  }, [slug]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = blogPost?.image || "";
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
        );

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

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            author,
            tags: tags.split(",").map((tag) => tag.trim()),
            image: imageUrl,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update blog post");
      }

      setSuccess("Blog post updated successfully!");
    } catch (error: any) {
      console.error("Error:", error);
      setError(error.message || "An error occurred");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tags (comma-separated):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          {blogPost.image && (
            <Image
              src={blogPost.image}
              alt="Current Image"
              width={200}
              height={200}
            />
          )}
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Update</button>
        {success && <p>{success}</p>}
      </form>
    </div>
  );
};

export default UpdateBlogPage;








