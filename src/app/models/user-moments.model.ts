export interface Moment {
  id: number; // Unique ID of the moment
  image: string; // URL or path to the moment's image
  userName: string; // Name of the user who posted the moment
  caption: string; // Caption or description of the moment
  date: string; // Date of the moment
  showBorder: boolean; // For randomly adding border to images
}
