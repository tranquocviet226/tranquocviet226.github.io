class CodeBlock extends HTMLElement {
  constructor() {
    super()

    // Get current text content
    const content = this.textContent

    // Clear current text content
    this.innerHTML = ''

    // Create pre element
    const pre = document.createElement('pre')

    // Set content to pre element
    pre.textContent = content

    // Append data
    this.appendChild(pre)
  }
}

export default CodeBlock