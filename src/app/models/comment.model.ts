// Import User model
import { User } from './user.model';

export interface Comment {
  id: number;
  user: User;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
