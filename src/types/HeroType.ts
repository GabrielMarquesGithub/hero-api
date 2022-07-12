export type UrlsHeroType = {
  type: string;
  url: string;
};
export type HeroType = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
  };
  urls: UrlsHeroType[];
};
