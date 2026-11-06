// The header, written once. Every page includes <site-header></site-header>.
// Renders into the page (no shadow DOM) so style.css applies as usual.

const html = `
<header>
<a class="name" href="/">Jean-Michel Lemieux</a>
<a href="/book">Book</a>
<a href="/contact">Contact</a>
</header>
`;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
    const here = location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
    if (here === '/') this.querySelector('.name').remove();
    for (const link of this.querySelectorAll('a')) {
      const href = link.getAttribute('href');
      if (href === here || (href === '/book' && here.startsWith('/book/'))) link.setAttribute('aria-current', 'page');
    }
  }
}

customElements.define('site-header', SiteHeader);
