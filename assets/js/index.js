const handlePlayAudio = (audioId) => {
  document.getElementById(audioId).play()
}

const goToURL = (url) => {
  if (url && url !== 'null' && url !== 'undefined' && url.trim() !== '') location.href = url
}