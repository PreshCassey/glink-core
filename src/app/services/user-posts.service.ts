import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserPost, UserComment } from '../models/user-posts.model';
import { userPosts } from '../data/sample-user-posts.data';

@Injectable({
  providedIn: 'root',
})
export class UserPostsService {
  // Method to get all user posts
  getAllUserPosts(): Observable<UserPost[]> {
    return of(userPosts);
  }

  // Method to get a user post by ID
  getUserPostById(id: number): Observable<UserPost | undefined> {
    const userPost = userPosts.find((post: any) => post.postId === id);
    return of(userPost);
  }

  // Method to get a user comment by ID
  getUserCommentById(
    postId: number,
    commentId: number
  ): Observable<UserComment | undefined> {
    const userPost = userPosts.find((post: any) => post.postId === postId);

    if (userPost) {
      const comment = userPost.comments.find((c) => c.commentId === commentId);
      return of(comment);
    }

    return of(undefined);
  }

  // Method to create a new post
  createPost(newPost: UserPost): Observable<UserPost> {
    // For simplicity, assuming postId is unique and auto-incremented
    const postId = userPosts.length + 1;
    const postWithId = { ...newPost, postId };

    // Add the new post to the existing posts array
    userPosts.push(postWithId);

    // Return the newly created post
    return of(postWithId);
  }
}
