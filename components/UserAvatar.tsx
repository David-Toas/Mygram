import { Avatar } from "@/components/ui/avatar";
import type { AvatarProps } from "@radix-ui/react-avatar";
import type { User } from "next-auth";
import Image from "next/image";

type Props = Partial<AvatarProps> & {
  user: User | undefined;
};

function UserAvatar({ user, ...avatarProps }: Props) {
  return (
    <Avatar className="relative h-8 w-8" {...avatarProps}>
      <Image
        src={
          user?.image ||
          "https://instagram.flos5-1.fna.fbcdn.net/v/t51.2885-19/471454018_1299178408068281_7049304893344444865_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.flos5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=CLMmPdwCTM0Q7kNvgHxPO9P&_nc_gid=fc2a491764a8409e84f9b89f004aa0c7&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBblg6q29ojj7IMiYIn_jxAjS3XK8_1hjmqOYXYwQI_MA&oe=679EB14A&_nc_sid=7d3ac5"
        }
        fill
        alt={`${user?.name}'s profile picture`}
        className="rounded-full object-cover"
      />
    </Avatar>
  );
}

export default UserAvatar;