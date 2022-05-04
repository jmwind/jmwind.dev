class RightSideHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="header" class="fixed w-full top-0">
            <div id="progress" class="h-1 z-20 top-0"
                style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>
            <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
                <div class="pl-4 flex flex-wrap items-center justify-between">
                    <a href="/"><img class="w-4 sm:w-10" width="40" height="40" src="/images/logo.webp"></a>
                    <a class="p-3 text-gray-900 no-underline hover:no-underline sm:font-extrabold text-xs md:text-3xl" href="/">
                        Building from the right side
                    </a>
                </div>
                <div class="pl-4 px-2 p-1 text-xs md:text-sm text-gray-500 text-base no-underline hover:no-underline">
                    <a href="/#book">
                        Book
                    </a>
                    <a href="/#about">
                        About
                    </a>
                    <a chref="#contact">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
        `
    }
}

class RightSideFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <footer id="contact" class="w-full bg-white border-t border-gray-400 shadow">
                <div class="container max-w-1xl mx-auto flex py-8">
                    <div class="w-full mx-auto flex flex-wrap">
                        <div class="flex w-full">
                            <div class="px-3">
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-2"
                                    href="https://twitter.com/jmwind">
                                    <svg class="w-6 h-6 text-black-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-2"
                                    href="https://www.linkedin.com/in/jmlemieux-613/"><svg
                                        class="w-6 h-6 text-black-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512">
                                        <path
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                        </path>
                                    </svg></a>
                                <a class="inline-block text-gray-600 no-underline hover:text-black-900 hover:text-underline py-2 px-2"
                                    href="mailto:jml@buildrightside.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg></a>
                                <a class="inline-block text-gray-600 no-underline hover:text-black-900 hover:text-underline py-2 px-2"
                                    href="https://github.com/jmwind/jmwind.dev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a class="inline-block text-gray-600 no-underline hover:text-black-900 hover:text-underline py-2 px-2"
                                    href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fbuildrightside.com%2F">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 329.922 329.922">
                                        <path d="M281.672,70.216C217.34,5.883,112.662,5.884,48.328,70.217C17.162,101.381,0,142.817,0,186.89
                                                c0,44.072,17.162,85.508,48.328,116.672c5.857,5.857,15.356,5.857,21.213,0c5.857-5.859,5.857-15.356,0-21.214
                                                c-21.928-21.927-35.375-50.072-38.713-80.458H45c8.283,0,15-6.715,15-15c0-8.284-6.717-14.999-15-14.999H30.828
                                                c2.793-25.433,12.674-49.291,28.68-69.252l9.984,9.983c2.928,2.929,6.768,4.394,10.605,4.394c3.84,0,7.678-1.464,10.607-4.394
                                                c5.857-5.857,5.857-15.355,0-21.213l-9.98-9.98c20.422-16.344,44.523-25.889,69.248-28.635V66.86c0,8.284,6.715,15,15,15
                                                c8.283,0,15-6.716,15-15V52.787c24.73,2.736,48.842,12.275,69.273,28.616L239.24,91.409c-5.859,5.858-5.859,15.355,0,21.214
                                                c2.928,2.929,6.768,4.393,10.605,4.393c3.84,0,7.678-1.464,10.607-4.393l10.008-10.009c16.35,20.43,25.896,44.542,28.637,69.276
                                                h-14.096c-8.285,0-15,6.716-15,14.999c0,8.285,6.715,15,15,15h14.096c-3.26,29.414-16.135,57.953-38.639,80.458
                                                c-5.857,5.858-5.857,15.355,0,21.214c2.93,2.928,6.768,4.393,10.607,4.393c3.838,0,7.678-1.465,10.605-4.393
                                                C346.006,239.229,346.006,134.55,281.672,70.216z" />
                                        <path d="M211.066,277.954h-92.133c-8.283,0-15,6.717-15,15c0,8.286,6.717,15.001,15,15.001h92.133c8.283,0,15-6.715,15-15.001
                                                C226.066,284.671,219.35,277.954,211.066,277.954z" />
                                        <path d="M165,216.89c10.613,0,19.273-8.274,19.935-18.722l33.098-33.099c5.859-5.858,5.859-15.355,0-21.214
                                                c-5.857-5.857-15.355-5.857-21.213,0l-33.098,33.098c-10.447,0.662-18.723,9.32-18.723,19.934
                                                c-0.002,11.045,8.951,20,19.998,20.002l0,0C164.998,216.89,164.998,216.89,165,216.89z" />
                                    </svg>
                                </a>
                            </div>
                            <p class="inline-block text-gray-400 py-2 px-2">&copy; Copyright 2021, Jean-Michel Lemieux</p>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('rs-header', RightSideHeader);
customElements.define('rs-footer', RightSideFooter);

document.addEventListener("DOMContentLoaded", function() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight',
        progress = document.querySelector('#progress'),
        scroll;
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");

    document.addEventListener('scroll', function () {
        /*Refresh scroll % width*/
        scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        progress.style.setProperty('--scroll', scroll + '%');

        /*Apply classes for slide in bar*/
        scrollpos = window.scrollY;

        if (scrollpos > 10) {
            header.classList.add("bg-white");
            header.classList.add("shadow");
        } else {
            header.classList.remove("bg-white");
            header.classList.remove("shadow");
        }

    });
});

const classMap = {
    p: 'py-2',
    h1: 'py-2 font-sans text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl',
    a: 'underline text-purple-600',
    ul: 'list-disc',
    "/ul": '',
    img: 'sm:w-3/5 sm:h-3/5 rounded-lg shadow-lg mx-auto'
}

function replaceString(key, map) {
    let subs = `<${key} class="${classMap[key]}" $1>`;
    if(key == 'ul') {
        return `<div class="ml-10">${subs}`;
    } else if(key == "/ul") {
        return `${subs}</div>`;
    } else {        
        return subs;
    }
}

const bindings = Object.keys(classMap).map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: replaceString(key, classMap)
}));

let loadContent = (doc, filename) => {
        doc.addEventListener("DOMContentLoaded", function() {
            fetch(filename).then(function(response) {
                return response.text().then(function(text) {
                    var converter = new showdown.Converter({extensions: [...bindings]});                                
                    var html = converter.makeHtml(text);
                    let elem = doc.getElementById('content');
                    elem.innerHTML = html;
                });
            });                
        });
    }

export { loadContent };