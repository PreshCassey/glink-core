import { Component, OnInit, HostListener } from '@angular/core';
import { CATEGORIES } from '../../shared/constants';
import { UserPostsService } from '../../services/user-posts.service';
import { UserPost } from '../../models/user-posts.model';
import { UserMomentsComponent } from 'src/app/components/user-moments/user-moments.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { GroupsFeaturedComponent } from '../../components/groups-featured/groups-featured.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [UserMomentsComponent, CommonModule, FormsModule, SidebarComponent, GroupsFeaturedComponent]
})
export class HomeComponent implements OnInit {
  filterCategories: string[] = CATEGORIES;
  selectedFilterCategory: string = 'All'; // Currently selected filter
  searchQuery: string = ''; // Search query entered by the user
  posts: UserPost[] = []; // Array to store fetched posts
  displayedPosts: UserPost[] = []; // Initialize the displayedPosts property
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 5; // Number of items per page
  loading: boolean = false; // Indicates if new posts are being fetched

  postContent: string = '';
  selectedImage: File | null = null; // Store the selected image file
  showLocation: boolean = false; // Track whether location is shared

  constructor(private userPostsService: UserPostsService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.fetchPosts();
  }

  fetchPosts() {
    this.loading = true;
    this.userPostsService.getAllUserPosts().subscribe(
      (posts) => {
        this.posts = posts;
        this.displayedPosts = this.posts.slice(0, this.itemsPerPage);
        this.currentPage = 1;
        this.loading = false;

        console.log(this.posts);
      },
      (error) => {
        console.error('Error fetching posts:', error);
        this.loading = false;
      }
    );
  }

  // Move the applyFilter and applySearch methods here
  applyFilter(filterCategory: string) {
    this.selectedFilterCategory = filterCategory;
    if (filterCategory === 'All') {
      this.displayedPosts = this.posts;
    } else {
      this.displayedPosts = this.posts.filter(
        (post) => post.category === filterCategory
      );
    }
  }

  applySearch(query: string) {
    this.searchQuery = query;
    if (!this.searchQuery) {
      // If the search query is empty, show all posts
      this.applyFilter(this.selectedFilterCategory);
      return;
    }
    this.displayedPosts = this.posts.filter(
      (post) =>
        post.user.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.content.text
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Add the onScroll method
  onScroll() {
    // Get the position of the scroll bar and calculate the scroll percentage
    const scrollPosition = window.innerHeight + window.scrollY;
    const totalHeight = document.body.offsetHeight;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    // Check if the user has scrolled to the bottom (or close to the bottom)
    if (scrollPercentage > 90 && !this.loading) {
      this.loadMorePosts();
    }
  }

  // Load more posts when the user reaches the bottom of the page
  loadMorePosts() {
    if (this.loading) return;
    // Set loading to true before fetching more posts
    this.loading = true;
    const start = this.currentPage * this.itemsPerPage;
    const end = (this.currentPage + 1) * this.itemsPerPage;
    setTimeout(() => {
      if (end >= this.posts.length) {
        this.loading = false;
        // Remove the scroll event listener when all posts are loaded
        window.removeEventListener('scroll', this.onScroll.bind(this));
        return;
      }
      const newPosts = this.posts.slice(start, end);
      this.displayedPosts.push(...newPosts);
      this.currentPage++;
      this.loading = false;
    }, 1500);
  }

  createPost() {
    if (!this.postContent && !this.selectedImage && !this.showLocation) {
      console.log('Post content, image, or location must be provided.');
      return;
    }

    const newPost: UserPost = {
      postId: this.posts.length + 1, // Generate a unique ID for the new post
      user: 'Current User', // Assuming the current user is posting
      content: {
        text: this.postContent.trim(),
        img: this.selectedImage ? 'assets/images/post-new.jpg' : null, // Placeholder for the new post image
      },
      likes: 0,
      commentCount: 0,
      shares: 0,
      category: 'Other', // Default category for a new post
      time: 'Just now', // Assuming the post is created just now
      img: 'assets/images/user-profile-current-user.png', // Placeholder for the current user's profile image
      comments: [],
    };

    this.userPostsService.createPost(newPost).subscribe(
      (createdPost) => {
        // Add the new post to the beginning of the posts array
        this.posts.unshift(createdPost);
        // Update displayedPosts and reset input fields
        this.displayedPosts = this.posts.slice(0, this.itemsPerPage);
        this.postContent = '';
        this.selectedImage = null;
        this.showLocation = false;
      },
      (error) => {
        console.error('Error creating post:', error);
      }
    );
  }

  // This method is called when the user clicks the "Add Image" button
  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement?.files?.[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  // This method is called when the user clicks the "Share Location" button
  shareLocation() {
    this.showLocation = true;
  }

  // This method is called when the user clicks the "Add Video" button
  onVideoSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      if (selectedFile.type.includes('video/')) {
        // File is a valid video
        this.readFileContent(selectedFile, (videoData: string) => {
          // Log the video data to the console
          console.log(videoData);
        });
      } else {
        // Invalid file type, display an error message or handle the error accordingly
        console.error('Invalid file type. Please select a valid video file.');
      }
    }
  }

  private readFileContent(file: File, callback: (content: string) => void) {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        const content = event.target.result as string;
        callback(content);
      }
    };
    reader.readAsDataURL(file);
  }
}
