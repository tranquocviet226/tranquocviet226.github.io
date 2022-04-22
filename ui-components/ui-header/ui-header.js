class UiHeader extends HTMLElement {
  constructor() {
    super()

    const listHeader = [
      { id: 'home', title: 'Trang chủ', path: '/', icon: 'home' },
      { id: 'course', title: 'Khóa học', path: '/course', icon: 'book' },
      { id: 'blog', title: 'Blog', path: '/blog', icon: 'writing' },
      { id: 'collection', title: 'Sưu tập', path: '/collection', icon: 'collection' },
      { id: 'more', title: 'Tổng hợp', path: '/more', icon: 'menu' },
    ]
    
    const headerTemplate = (key) => {
      const url = 'http://127.0.0.1:5500/assets/icons/'
      const header = listHeader.map(item => {
        const active = key === item.id
    
        const path = item.path
        const icon = url + (active ? item.icon + '_active' : item.icon) + '.svg'
        const title = item.title
    
        return `
        <li class="${active ? 'active' : ''}">
          <a aria-label="" href="${path}">
            <div class="${active ? '' : 'header_hover'}">
              <span 
                class="icon" 
                style="
                  background-color: var(--primary);
                  mask: url(${icon}) no-repeat center / contain;
                  -webkit-mask: url(${icon}) no-repeat center / contain;"
              ></span>
              <span class="tooltiptext">${title}</span>
            </div>
          </a>
        </li>
        `}).join('')
    
      return `
      <div id="header">
        <ul id="nav">
          ${header}
        </ul>
      </div>
      `
    }
    
    const keyActive = this.getAttribute('active')
    const header = headerTemplate(keyActive)
    this.innerHTML = header
  }
}

customElements.define('ui-header', UiHeader)