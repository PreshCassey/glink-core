export interface Hymn {
  hymnId: number;
  hymnNumber: string;
  hymnName: string;
  hymnLyrics: string;
  hymnImage: string;
  ifFavorited: boolean;
  ifLiked: boolean;
  ifShared: boolean;
  numberOfLikes: number;
  numberOfShares: number;
}
