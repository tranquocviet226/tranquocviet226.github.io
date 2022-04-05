import itVocabularyList from '../data/it_vocabulary/it_vocabulray.json' assert { type: "json" }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active-hover");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

/*
 * Fetch list IT Vocabulary
 */
const itVocabulary = document.getElementById('blog_content-it_vacobulary')
let listInner = ''
itVocabularyList.forEach((it, idx) => {
  const audioId = `blog_it_audio-${idx}`
  const btnId = `blog_it_btn-${idx}`
  const img = `../assets/imgs/english/${it.image}`
  const en = it.en
  const vi = it.vi
  const pronunciation = it.pronunciation
  const audio = it.audio
  const example = it.example
  const trans = it.trans

  listInner += `<div class="card">
    <div class="card_container">
      <img src="${img}" alt="" width="150px" height="130px" class="card_image" />
      <ul>
        <li style="font-weight: 700;">${en}: ${vi}</li>
        <li>${pronunciation}</li>
        <li>
          <div class="card_example">
            <p>${example}</p>
            <p>${trans}</p>
          </div>
        </li>
      </ul>
    </div>
    <img class="audio_icon" id="${btnId}" onclick="handlePlayAudio('${audioId}')"
      src="https://www.shareicon.net/data/2017/01/23/874891_speaker_512x512.png" width="50px" height="50px"
      style="cursor: pointer" />
    <audio id="${audioId}" style="display: none">
      <source src="${audio}" type="audio/ogg">
      <source src="${audio}" type="audio/mpeg">
    </audio>
  </div>`
})

itVocabulary.innerHTML = listInner
