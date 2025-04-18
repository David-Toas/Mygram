import { PostWithExtras } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import ActionIcon from "./ActionIcon";
import LikeButton from "./Like";
import BookmarkButton from "./BookmarkButton";
import ShareButton from "./ShareButton";

type Props = {
  post: PostWithExtras;
  userId?: string;
  className?: string;
};

function PostActions({ post, userId, className }: Props) {
  return (
    <div className={cn("relative flex items-start w-full gap-x-2", className)}>
      <LikeButton post={post} userId={userId} />
      <Link href={`/dashboard/p/${post.id}`}>
        <ActionIcon>
          <MessageCircle className={"h-6 w-6"} />
        </ActionIcon>
      </Link>
      <ShareButton postId={post.id} />
      <BookmarkButton post={post} userId={userId} />
    </div>
  );
}

export default PostActions;
