class UiCode extends HTMLElement {
  constructor() {
    super()

    const tag = this.textContent.trim()
    const content = `<${tag}>`
    this.textContent = content
  }
}

export default UiCode