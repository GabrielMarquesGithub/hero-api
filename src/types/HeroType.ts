export type UrlsType = {
  type: string;
  url: string;
};
export type HeroType = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: UrlsType[];
  comics: {
    available: number;
    collectionURI: string;
  };
};
export type ComicType = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
  };
  urls: UrlsType[];
};
