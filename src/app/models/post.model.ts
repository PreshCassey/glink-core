// Import User and Comment models
import { User } from './user.model';
import { Comment } from './comment.model';

export interface Post {
  id: number;
  user: User;
  content: string;
  imageUrl: string;
  category: string;
  likes: number;
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}
