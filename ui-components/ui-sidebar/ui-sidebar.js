class UiSidebar extends HTMLElement {
  constructor() {
    super()

    const title = this.getAttribute('title')
    let data = this.getAttribute('data')
    const active = this.getAttribute('active')

    const sidebarTemplate = () => {
      data = JSON.parse(data)
      if (data) {
        const side = data.map(item => {
          return `<li class="${active === item.key ? 'sidebar_active' : ''}" onClick="goToURL('${item.path}')">
            <a>${item.title}</a>
          </li>`
        }).join('')

        return `<div class="sidebar">
          <h3 class="title">${title}</h3>
          <ol>
            ${side || ''}
          </ol>
        </div>`
      }

      return ''
    }

    const sidebar = sidebarTemplate()
    this.innerHTML = sidebar
  }
}

export default UiSidebar