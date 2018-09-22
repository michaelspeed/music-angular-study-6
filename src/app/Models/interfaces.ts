export interface User {
    id: string;
    email: string;
    name: string;
  }

export interface Artist {
    id: string;
    name: string;
    pic: string;
    albums: Album[];
    song: Song[];
  }

export interface Album {
    id: string;
    name: string;
    date: string;
    genre: string;
    albumPiC: string;
    artist: Artist[];
  }

export interface Song {
    id: string;
    name: string;
    length: string;
    songPic: string;
    artist: Artist[];
  }
