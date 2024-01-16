export type IconsId =
  | "drive"
  | "email"
  | "insta"
  | "insta1"
  | "insta2"
  | "music"
  | "pinterest";

export type IconsKey =
  | "Drive"
  | "Email"
  | "Insta"
  | "Insta1"
  | "Insta2"
  | "Music"
  | "Pinterest";

export enum Icons {
  Drive = "drive",
  Email = "email",
  Insta = "insta",
  Insta1 = "insta1",
  Insta2 = "insta2",
  Music = "music",
  Pinterest = "pinterest",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Drive]: "61697",
  [Icons.Email]: "61698",
  [Icons.Insta]: "61699",
  [Icons.Insta1]: "61700",
  [Icons.Insta2]: "61701",
  [Icons.Music]: "61702",
  [Icons.Pinterest]: "61703",
};
