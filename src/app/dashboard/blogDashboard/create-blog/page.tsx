

// "use client"
// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import Head from "next/head";

// // Dynamically import ReactQuill with client-side rendering only
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css"; // Import Quill styles

// const BlogForm: React.FC = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [author, setAuthor] = useState("");
//   const [tags, setTags] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [slug, setSlug] = useState("");

//   useEffect(() => {
//     if (title) {
//       setSlug(generateSlug(title));
//     }
//   }, [title]);
// const generateSlug = (title: string) => {
//   return title
//     .trim()
//     .normalize("NFD") // Normalize characters for consistent handling
//     .replace(/[\u0300-\u036f]/g, "") // Remove accents
//     .replace(/[^a-z0-9\s-]/g, "") // Allow hyphens and alphanumeric characters
//     .replace(/\s+/g, "-") // Replace multiple spaces with a single hyphen
//     .replace(/^-+|-+$/g, "") 
// };


//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validate that all required fields are set
//     if (!title || !content || !slug) {
//       setError("Missing required fields: title, content, or slug");
//       return;
//     }

//     try {
//       let imageUrl = "";
//       if (image) {
//         const formData = new FormData();
//         formData.append("file", image);
//         formData.append(
//           "upload_preset",
//           process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
//         );

//         if (
//           !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
//           !process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
//         ) {
//           throw new Error("Cloudinary configuration is missing");
//         }

//         console.log("Uploading image to Cloudinary...");

//         const res = await fetch(
//           `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
//           {
//             method: "POST",
//             body: formData,
//           }
//         );

//         const data = await res.json();
//         console.log("Cloudinary response:", data);

//         if (!res.ok || !data.secure_url) {
//           throw new Error(data.error.message || "Image upload failed");
//         }

//         imageUrl = data.secure_url;
//         console.log("Image URL:", imageUrl);
//       }

//       const res = await fetch(`/api/blog`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           content,
//           author,
//           tags: tags.split(",").map((tag) => tag.trim()),
//           slug,
//           image: imageUrl,
//         }),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Failed to create blog post");
//       }

//       setSuccess("Blog post created successfully!");
//       setTitle("");
//       setContent("");
//       setAuthor("");
//       setTags("");
//       setSlug("");
//       setImage(null);
//     } catch (error: any) {
//       console.error("Error:", error);
//       setError(error.message || "An error occurred");
//     }
//   };

//   return (
//     <div>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={content.substring(0, 150)} />
//         <meta name="slug" content={slug} />
//       </Head>
//       <h1>Create a New Blog Post</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Content:</label>
//           <ReactQuill
//             value={content}
//             onChange={(value) => setContent(value)}
//             modules={{ toolbar: true }}
//             formats={[
//               "header",
//               "font",
//               "size",
//               "bold",
//               "italic",
//               "underline",
//               "list",
//               "bullet",
//               "indent",
//               "link",
//               "image",
//               "align",
//             ]}
//           />
//         </div>
//         <div>
//           <label>Author:</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Tags (comma-separated):</label>
//           <input
//             type="text"
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input type="file" onChange={handleImageChange} />
//         </div>
//         {/* Removed slug input field */}
//         <button type="submit">Submit</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {success && <p style={{ color: "green" }}>{success}</p>}
//     </div>
//   );
// };

// export default BlogForm;








"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// Dynamically import ReactQuill with client-side rendering only
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill styles

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
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content.substring(0, 150)} />
        <meta name="slug" content={slug} />
      </Head>
      <h1>Create a New Blog Post</h1>
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
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default BlogForm;
