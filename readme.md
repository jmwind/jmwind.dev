# Personal and Book Website

Survival of the simplest. Again.

Plain HTML files and one `style.css`. No framework, no build step, no dependencies. Hosted on [Vercel](https://vercel.com) at [buildrightside.com](https://buildrightside.com).

To add a chapter: copy an existing chapter in `book/`, change the words, and add a link to the `<nav>` in every page plus an `<item>` in `rss.xml`.

To preview locally, serve the folder with anything static, e.g. `python3 -m http.server`. Links are extensionless (`/book/layerinitis`), which Vercel resolves via `cleanUrls`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
