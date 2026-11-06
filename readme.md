# Personal and Book Website

Survival of the simplest. Again.

Plain HTML files, one `style.css`, and one web component (`header.js`) for the header. No framework, no build step, no dependencies. Hosted on [Vercel](https://vercel.com) at [buildrightside.com](https://buildrightside.com).

To add a chapter: copy an existing chapter in `book/`, change the words, then add one entry to `book.html` and an `<item>` to `rss.xml`. The header lives only in `header.js`; every page just has `<site-header></site-header>`.

To preview locally, serve the folder with anything static, e.g. `python3 -m http.server`. Links are extensionless (`/book/layerinitis`), which Vercel resolves via `cleanUrls`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
