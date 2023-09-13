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

type ShowInfo = {
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
//   rating: object; 
  weight: number;
  network: Network;
  webChannel: string;
  dvdCountry: string;
//   externals: object;
  image: Image;
  summary: string;
  updated: number;
//   _links: object;
};

export type Show = {
    score: number;
    show: ShowInfo;
}
