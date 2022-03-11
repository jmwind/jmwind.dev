# Personal Website

Survival of the simplest. 

This is a ode to a simpler web. My personal website is a single html using a static [Tailwind](https://tailwindcss.com) css file and is published and hosted via
[Vercel](https://vercel.com).

Website is hosted at [buildrightside.com](https://buildrightside.com).

## Installation

There are no dependencies to install outside of a modern web browser 🤯. Oh, well there is one local install for the Tailwind CLI:

```bash
npm install -g tailwindcss
```

Then generate the css as follows

```bash
npx tailwindcss -o styles.css --minify
```

Then open the index.html file in your browser. 

## Tools

While Twitter is convinient for now and where my main audience lives, it's important to not
have a long term dependency. All tweet threads are pulled and stored on this website so that
in case Twitter goes away the content is still available.

I'm using [Tweet to Markdown](https://github.com/kbravh/tweet-to-markdown) to convert the threads.

```bash
npx tweet-to-markdown -t https://twitter.com/jmwind/status/1493569419980673026 -b <bearer token> -a
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)