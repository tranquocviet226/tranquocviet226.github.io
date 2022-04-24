const webglCollection = [
  { id: 1, key: 'introduction', title: 'Introduction', path: '/course/html-css' },
  { id: 2, key: 'tags', title: 'Tags', path: '/course/html-css/tags' }
]

// Set webgl data to sidebar
const uiSidebar = document.querySelector('#html-css ui-sidebar')
uiSidebar.setAttribute('data', JSON.stringify(webglCollection))
