// import PostView from "@/components/PostView";
// import { fetchPostById } from "@/lib/data";
// import { notFound } from "next/navigation";

// type Props = {
//   params: {
//     id: string;
//   };
// };

// async function PostModal({ params: { id } }: Props) {
//   const post = await fetchPostById(id);

//   if (!post) {
//     notFound();
//   }

//   return <PostView id={id} post={post} />;
// }

// export default PostModal;


import { notFound } from "next/navigation";
import PostView from "@/components/PostView";
import { fetchPostById } from "@/lib/data";

type Props = {
  params: Record<string, string>; // ✅ Ensures TypeScript sees 'id' as a string
};

async function PostModal({ params }: Props) {
  console.log("Params received:", params);

  const post = await fetchPostById(params.id);

  if (!post) {
    notFound();
  }

  return <PostView id={params.id} post={post} />;
}

export default PostModal;
