type Schedule = {
  time: string;
  days: string[];
};

type Image = {
  medium: string;
  original: string;
};

type Country = {
  name: string;
  code: string;
  timezone: string;
};

type Network = {
  id: 114;
  name: string;
  country: Country;
  officialSite: string;
};

type Externals = {
  tvrage: number;
  thetvdb: number;
  imdb: string;
};

type WebChannel = {
  name: string;
  officialSite: string;
  id: number;
  country: string;
};

type Rating = {
  average?: number;
};

export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string; // date
  ended: string; // date
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: WebChannel;
  dvdCountry: string;
  externals: Externals;
  image?: Image;
  summary: string;
  updated: number;
};
