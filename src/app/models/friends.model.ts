export interface Friend {
  friendId: number;
  friendName: string;
  friendImage: string; // URL or path to the friend's profile image
  numberOfMutualFriends: number;
  mutualFriends: string[]; // List of names of mutual friends
  friendBio: string;
  friendLocation: string;
  isOnline: boolean; // Indicates whether the friend is currently online
  friendSince: string; // Date when the friend connection was established
  commonGroups: string[]; // List of common groups or communities
  contactEmail: string; // Contact email of the friend
  contactPhone: string; // Contact phone number of the friend
  friendStatus: string; // Status message of the friend
}
