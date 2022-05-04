const handlePlayAudio = (audioId) => {
  document.getElementById(audioId).play()
}

const goToURL = (url) => {
  if (url && url !== 'null' && url !== 'undefined' && url.trim() !== '') location.href = url
}

const htmlEntities = (str) => {
  let strReplace = str
  const uiCode = str.match(/(?<=<ui-code-block>)(.*?)(?=<\/ui-code-block>)/gs)
  if (uiCode) {
    uiCode.map(code => {
      const result = String(code).replace(/[&<>"']/g, function ($0) {
        return "&" + { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "#39" }[$0] + ";";
      });
      strReplace = strReplace.replace(code, result)
    })
  } else {
    return str
  }

  return strReplace
}

const url = 'https://tranquocviet226.github.io/'
