const puppeteer = require('puppeteer');
const fs = require('fs');

const fn_prefix = "chapter";
const url = "http://127.0.0.1:8887/book/chapter.html?num=";
let chapter_num = 1;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let filename = `${fn_prefix}${chapter_num}`;
    while(fs.existsSync(`${filename}.md`)) { 
        console.log(`Generating ${filename}.html...`);
        await page.goto(`${url}${chapter_num}`, { waitUntil: 'networkidle2'});
        await page.evaluate((sel) => {            
            var elements = document.head.querySelectorAll(".loader");            
            for(var i=0; i< elements.length; i++){
                elements[i].parentNode.removeChild(elements[i]);
            }
            elements = document.head.querySelectorAll(".importer");            
            for(var i=0; i< elements.length; i++){
                elements[i].parentNode.removeChild(elements[i]);
            }
        });
        const websiteContent = await page.content();
        fs.writeFileSync(`${filename}.html`, websiteContent);                
        chapter_num++;
        filename = `${fn_prefix}${chapter_num}`;        
    }
    console.log("Closing...");
    await browser.close();  
})();
