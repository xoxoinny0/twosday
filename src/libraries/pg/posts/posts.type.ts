export type TPublicPost = {
  postId: number;
  title: string;
  content: string;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  email: string;
  nickname: string;
  avatar: string | null;
  imageKeys: string[];
  tagIds: { id: number; name: string }[];
  category: { id: number; name: string } | null;
};
