export interface Group {
  groupId: number;
  groupName: string;
  groupDescription: string;
  numberOfMembers: number;
  groupImage: string; // URL or path to the group image
  ifUserJoined: boolean;
  groupCategory: string; // Category of the group (e.g. Bible Study, Prayer Group, Fellowship)
  groupTags: string[]; // Tags related to the group
  groupLeader: string; // Name of the group leader
  contactEmail: string; // Leader's contact email
  contactPhone: string; // Leader's contact phone number
  meetingSchedule: string; // Meeting schedule of the group
  isFeatured: boolean; // Indicates whether the group is featured on the homepage
}
