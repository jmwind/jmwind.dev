module.exports = {
  name: "Build Right Side",
  shortDesc:
    "An 11ty starter kit designed to help you add rich features to a site without a complicated build process.",
  url: "",
  authorEmail: "mike@madebymike.com.au",
  authorHandle: "@MikeRiethmuller",
  authorName: "Mike",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "#161B1C",
      text: "white",
      highlight: "#666",
    },
    secondary: {
      background: "#2b2f30",
      text: "white",
      highlight: "#666",
    },
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
