const fetch = require('node-fetch');
const puppeteer = require('puppeteer');
const fs = require('fs');

var config = require('./config.json');

const fn_prefix = "chapter";
const url = "http://127.0.0.1:8887/book/chapter.html?num=";
let chapter_num = 1;

const tweets = [
    { id: "1460284795150225409", title: "Chapter 1: The problem upgrade chart", slug: "problem-upgrades" },
    { id: "1470894712538103813", title: "Chapter 2: Platform investments", slug: "platform-investments" },
    { id: "1477399261700526080", title: "Chapter 3: Layerinitis", slug: "layerinitis" },
    { id: "1493569303030816770", title: "Chapter 4: Alignment > Autonomy", slug: "alignment" },
    { id: "1520068607803158528", title: "Chapter 5: Going fast slowly", slug: "fast-slowly" },
    { id: "1563155464296095749", title: "Chapter 6: Problem solving vs problem planning", slug: "problem-solving-vs-planning" }
];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let filename = `${fn_prefix}${chapter_num}`;
    while (fs.existsSync(`${filename}.md`)) {
        const tweet = tweets[chapter_num - 1];
        filename = `${filename}-${tweet.slug}.html`;
        console.log(`Generating ${filename}...`);
        const response = await fetch(`https://api.twitter.com/2/tweets/${tweet.id}?tweet.fields=public_metrics`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${config.bearer}`
            }
        });

        const tweet_data = await response.json();
        console.log("TWEET: " + tweet_data.data.id + ", " + tweet_data.data.public_metrics.like_count);
        await page.goto(`${url}${chapter_num}`, { waitUntil: 'networkidle2' });
        await page.evaluate((tweet_data, tweet) => {
            var element = document.head.querySelectorAll(".loader")[0];
            element.parentNode.removeChild(element);
            element = document.head.querySelectorAll(".importer")[0];
            element.parentNode.removeChild(element);

            element = document.querySelectorAll(".title")[0];
            element.innerHTML = tweet.title;

            element = document.querySelectorAll(".tweet_link")[0];
            element.href = "https://twitter.com/jmwind/status/" + tweet.id;

            element = document.querySelectorAll(".likes")[0];
            element.innerHTML = tweet_data.data.public_metrics.like_count.toLocaleString("en-US");
            element = document.querySelectorAll(".comments")[0];
            element.innerHTML = tweet_data.data.public_metrics.reply_count.toLocaleString("en-US");
            element = document.querySelectorAll(".retweets")[0];
            element.innerHTML = (tweet_data.data.public_metrics.retweet_count + tweet_data.data.public_metrics.quote_count).toLocaleString("en-US");
        }, tweet_data, tweet);
        const websiteContent = await page.content();
        fs.writeFileSync(filename, websiteContent);

        chapter_num++;
        filename = `${fn_prefix}${chapter_num}`;
    }
    console.log("Closing...");
    await browser.close();
})();
