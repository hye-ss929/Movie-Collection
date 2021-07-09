const size = {
  mobileS: "320px",
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

const theme = {
  mainYellow: "#fddf46",
  pointPink: "#ff4676",
  toneDownBlue: "#04286e",
  basicBlack: "#000",
  basicWhite: "#fff",
  mobileS: `(max-width:${size.mobileS})`,
  mobile: `(max-width:${size.mobile})`,
  tablet: `(max-width:${size.tablet})`,
  laptop: `(max-width:${size.laptop})`,
  desktop: `(min-width:${size.desktop})`,
};

export default theme;
