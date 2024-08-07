export interface UserPost {
  postId: number;
  user: string;
  content: {
    text: string;
    img: string | null;
  };
  likes: number;
  commentCount: number;
  shares: number;
  category: string;
  time: string;
  img: string;
  comments: UserComment[];
}

export interface UserComment {
  commentId: number;
  user: string;
  userCommentImage: string;
  commentContent: string;
}
