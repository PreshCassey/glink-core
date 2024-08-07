import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'post-popup',
  templateUrl: './post-popup.component.html',
  styleUrls: ['./post-popup.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class PostPopupComponent {
  postContent: string = '';
  selectedImage: File | null = null; // Store the selected image file
  showLocation: boolean = false; // Track whether location is shared

  @Output() onClose = new EventEmitter<void>();
  @Output() onPostCreated = new EventEmitter<any>();
  @Output() onVideoAdded: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  closePostPopup() {
    this.onClose.emit();
  }

  createPost() {
    // Check if the post content is empty
    if (!this.postContent && !this.selectedImage && !this.showLocation) {
      console.log('Post content, image, or location must be provided.');
      return;
    }

    // Prepare the post data to be emitted
    const post = {
      content: this.postContent.trim(),
      image: this.selectedImage,
      location: this.showLocation ? 'User Location' : null,
      createdAt: new Date(),
    };

    // Emit the post data
    this.onPostCreated.emit(post);

    // Reset the input fields and close the popup
    this.postContent = '';
    this.selectedImage = null;
    this.showLocation = false;
    this.closePostPopup();
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
          // Emit the video data to the parent component
          this.onVideoAdded.emit(videoData);
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
