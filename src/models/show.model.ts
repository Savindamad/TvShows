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
  id: number;
  name: string;
  country: Country;
  officialSite: string | null;
};

type Externals = {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: string;
};

type WebChannel = {
  name: string;
  officialSite: string;
  id: number;
  country: string | null;
};

type Rating = {
  average: number | null;
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
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: WebChannel | null;
  dvdCountry?: string | null;
  externals: Externals;
  image?: Image;
  summary: string;
  updated: number;
};
