import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router'
import { IonicModule } from '@ionic/angular';
import { PostPopupComponent } from '../post-popup/post-popup.component';

@Component({
  standalone: true,
  selector: 'bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
  imports: [CommonModule, IonicModule, PostPopupComponent, RouterModule]
})
export class BottomNavComponent implements OnInit {
  selectedNavItem: string = 'home';
  showPostPopup: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set 'home' as the default selected navigation item
    // this.selectNavItem('home');
  }

  selectNavItem(item: string) {
    this.selectedNavItem = item;
    // Add the appropriate routing logic for each navigation item
    switch (item) {
      case 'home':
        this.router.navigate(['/']);
        break;
      case 'groups':
        this.router.navigate(['/groups']);
        break;
      case 'notifications':
        this.router.navigate(['/notifications']);
        break;
      case 'profile':
        this.router.navigate(['/profile']);
        break;
      default:
        // Do nothing or handle additional cases as needed
        break;
    }
  }

  openPostPopup() {
    this.showPostPopup = true;
  }

  closePostPopup() {
    this.showPostPopup = false;
  }

  // Handle upload of video
  handleVideoAdded(videoData: string) {
    // This method is called when a video is added from the post popup.
    // Perform actions with the video data here.

    // Example action 1: Upload the video to a server
    this.uploadVideoToServer(videoData);

    // Example action 2: Store the video in local storage
    this.storeVideoLocally(videoData);

    // Example action 3: Display video preview
    this.displayVideoPreview(videoData);

    // Example action 4: Validate video size and format
    const isValidVideo = this.validateVideo(videoData);
    if (isValidVideo) {
      // Proceed with the video
    } else {
      // Show an error message or prevent posting the video
    }

    // Example action 5: Manipulate video data
    const manipulatedVideoData = this.manipulateVideo(videoData);
    // Now, you can upload or save the manipulated video

    // Example action 6: Update application state
    this.updateApplicationStateWithVideo(videoData);
  }

  private uploadVideoToServer(videoData: string) {
    // Implement the logic to upload the video data to a server using an HTTP client
    // For example, using Angular's HttpClient to make a POST request to the server
  }

  private storeVideoLocally(videoData: string) {
    // Implement the logic to store the video data in local storage
    // Convert the data URL to a Blob or File object if necessary
    // Use the localStorage or sessionStorage API to save the video data
  }

  private displayVideoPreview(videoData: string) {
    // Implement the logic to display a video preview in the UI
    // Create an HTML <video> element and set its src attribute to the video data URL

  }

  private validateVideo(videoData: string): boolean {
    // Implement the logic to validate the video size and format
    // Return true if the video is valid, false otherwise
    return true;
  }

  private manipulateVideo(videoData: string): string {
    // Implement the logic to manipulate the video data
    // For example, resizing, trimming, or adding filters
    // Return the manipulated video data as a data URL or Blob
    return videoData;
  }

  private updateApplicationStateWithVideo(videoData: string) {
    // Implement the logic to update the application state with the new video
    // For example, update the list of posts or the user's profile with the video link
  }
}
