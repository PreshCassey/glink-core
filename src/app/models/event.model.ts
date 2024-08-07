export interface Event {
  id: number;
  eventName: string;
  eventTime: string; // You can use a string to represent event time like "Tomorrow at 12PM"
  location: string;
  interestedCount: number;
  goingCount: number;
  eventImage: string; // URL or path to the event image
  description: string; // A brief description of the event
  isOnlineEvent: boolean; // Indicates whether the event is online/virtual
  category: string; // Event category like "Religious", "Community", etc.
  tags: string[]; // Tags related to the event
  organizer: string; // Name of the event organizer
  contactEmail: string; // Organizer's contact email
  contactPhone: string; // Organizer's contact phone number
  registrationRequired: boolean; // Indicates whether registration is required
  registrationLink?: string; // Link to the registration page, if registration is required
  isFeatured: boolean; // Indicates whether the event is featured on the homepage
}
