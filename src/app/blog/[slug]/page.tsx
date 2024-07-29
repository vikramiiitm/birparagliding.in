// import SingleBLog from "@/components/SingleBlogPost";

// import type { Metadata } from "next";

// type Props = {
//   params: {
//     slug: string;
//   };
// };


// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {



//   return {
//     title: `${params.slug} | Skycandy`,
//     description: `${params.slug} | Skycandy`,
//   };
// }


// const SingleBLogPost: React.FC = ({ params }: any) => {
//   return (
//     <div>
//       <SingleBLog
//         params={{
//           slug: params.slug,
//         }}
//       />
//     </div>
//   );
// };

// export default SingleBLogPost;



import SingleBLog from "@/components/SingleBlogPost";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

// Fetch blog post data by slug
const getBlogPostBySlug = async ({ params }: Props) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/api/blog/${params.slug}`);
  const data = await response.json();
  return data;
};

// Generate metadata based on blog post data
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const data = await getBlogPostBySlug({ params });

  return {
    title: `${data.title} | Skycandy`,
    description: `${data.description} | Skycandy`,
  };
};

// Main component
const SingleBLogPost: React.FC<Props> = ({ params }) => {
  return (
    <div>
      <SingleBLog
        params={{
          slug: params.slug,
        }}
      />
    </div>
  );
};

export default SingleBLogPost;