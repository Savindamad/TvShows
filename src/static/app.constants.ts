export const GENRES_TYPES = {
  COMEDY: "Comedy",
  DRAMA: "Drama",
  ACTION: "Action",
};

export const GENRES_LOAD_ORDER = [
  GENRES_TYPES.ACTION,
  GENRES_TYPES.COMEDY,
  GENRES_TYPES.DRAMA,
];

export const GENRES_TRANSLATION = {
  [GENRES_TYPES.COMEDY]: "show-comedy",
  [GENRES_TYPES.DRAMA]: "show-drama",
  [GENRES_TYPES.ACTION]: "show-action",
};
