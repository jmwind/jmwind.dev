module.exports = {
  name: "Build Right Side",
  shortDesc: "Personal website for my book",
  url: "buildrightside.com",
  authorEmail: "jmwind@gmail.com",
  authorHandle: "@jmwind",
  authorName: "Jean-Michel",
  postsPerPage: 6,
  socialImage: "/me.webp",
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

  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
