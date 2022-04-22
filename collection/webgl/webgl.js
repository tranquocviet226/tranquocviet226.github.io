const webglCollection = [
  { id: 1, key: 'introduction', title: 'Introduction', path: '/collection/webgl' },
  { id: 2, key: 'basics', title: 'Basics', path: '/collection/webgl/basics' }
]

// Set webgl data to sidebar
const uiSidebar = document.querySelector('#webgl ui-sidebar')
uiSidebar.setAttribute('data', JSON.stringify(webglCollection))
