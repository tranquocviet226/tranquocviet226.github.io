const htmlCssCollection = [
  {
    id: 1,
    key: '1',
    title: 'Khai báo “DOCTYPE” dùng để làm gì?',
    path: '#q1',
    content: `Để trình duyệt nhận biết trang html đó được viết ở phiên bản nào.`
  },
  {
    id: 2,
    key: '2',
    title: 'Giới thiệu sơ về thẻ meta trong HTML?',
    path: '#q2',
    content: `
    <ul>
      <li>Thẻ meta luôn đi bên trong phần tử <ui-tag>head</ui-tag> và thường được sử dụng để chỉ định bộ ký
        tự,
        mô tả trang,
        từ
        khóa, tác giả của tài liệu và cài đặt chế độ xem.</li>
      <li>Thẻ meta luôn có cặp tên/giá trị.</li>
      <li>Dữ liệu meta sẽ không được hiển thị trên trang nhưng có thể phân tích cú pháp bằng máy.</li>
      <li>Thẻ meta được sử dụng bởi các trình duyệt (cách hiển thị nội dung hoặc tải lại trang), công cụ tìm
        kiếm
        (từ khóa) và các dịch vụ web khác.</li>
    </ul>
    <ui-code-block>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale = 1.0">
      <meta name="description" content="HTML interview questions">
      <meta name="author" content="Author Name">
      <meta name="copyright" content="All Rights Reserved">
    </ui-code-block>
    `
  },
  {
    id: 3,
    key: '3',
    title: 'CSS peseudo-elements',
    path: '#3',
    content: `
    <style>
      #id-before {
        width: 100px; 
        height: 100px;
        background-color: red;
      }
      #id-before::before {
        content: "";
        display: block;
        width: 50px; 
        height: 50px;
        background-color: green;
      }
      #id-before::after {
        content: "";
        display: block;
        width: 50px; 
        height: 50px;
        background-color: blue;
      }
      #id-first-letter::first-letter {
        font-size: 30px;
        font-weight: bold
      }
      #id-first-line::first-line {
        font-size: 30px;
        font-weight: bold;
      }
      #id-selection::selection {
        background-color: violet;
      }
    </style>
    Là các thuộc tính css thêm lớp giả cho các elements:
    <ul>
      <li>
        <p><ui-code>::before</ui-code>: luôn đứng đầu element, bắt buộc bao gồm <ui-code>content: ""</ui-code> </p>
      </li>
      <li>
        <p><ui-code>::after</ui-code>: luôn đứng cuối element, bắt buộc bao gồm <ui-code>content: ""</ui-code></p>
      </li>
      <li>
        <p><ui-code>::first-letter</ui-code>: Css cho kí tự đầu tiên của element </p>
      </li>
      <li>
        <p><ui-code>::first-line</ui-code>: Css cho dòng đầu tiên của element</p>
      </li>
      <li>
        <p><ui-code>::selection</ui-code>: lớp giả để  css cho các element được select bằng chuột </p>
      </li>
    </ul>
    <p>Ví dụ</p>
    <p>Khối màu đỏ có thuộc tính <ui-code>before</ui-code> là khối màu xanh lá và <ui-code>afrer</ui-code> là khối màu xanh dương</p>
    
    <div id="id-before">
    </div>
    <p id="id-first-letter">Dòng này được css cho <ui-code>first-letter</ui-code></p>
    <p id="id-first-line">Dòng này được css cho <ui-code>first-line</ui-code></p>
    <p id="id-selection">Bôi đen dòng này để xem css cho thuộc tính <ui-code>selection</ui-code></p>
    `
  },
  {
    id: 4,
    key: '4',
    title: 'CSS peseudo-classes',
    path: '#4',
    content: `
    Là các thuộc tính css cho các class bao gồm:
    <p><ui-code>:root</ui-code>: tham chiếu đến phần tử gốc của file HTML </p>
    <p><ui-code>:hover</ui-code>: kích hoạt khi rê chuột vào element</p>
    <p><ui-code>:active</ui-code>: kích hoạt khi click vào element </p>
    <p><ui-code>:first-child</ui-code>: lớp giả để select thẻ con đầu tiên </p>
    <p><ui-code>:last-child</ui-code>: lớp giả để select thẻ con cuối cùng </p>
    `
  },
  {
    id: 5,
    key: '5',
    title: 'box-sizing trong CSS là gì?',
    path: '#5',
    content: `
      <p>Default là <ui-code>content-box</ui-code></p>
      <p>Thuộc tính <ui-code>box-size: border-box</ui-code> sẽ tự động tính toán kích thước của <ui-code>div</ui-code> (trừ padding, border) để  bằng với kích thước khai báo</p>
      <br>
      <p>Ví dụ:</p>
      <p> Kich thước của khối màu đỏ sẽ bằng: <ui-code> 100 + 16*2 + 2*2 = 136px </ui-code> </p>

      <div style="display: flex; flex-direction: row; align-items: center">
        <div style="width: 100px; height: 100px; background: red; padding: 16px; border: 2px solid black; box-sizing: content-box"></div>
        <div style="margin-left: 20px">
          <p><ui-code style="font-size: 12px !important">width: 100px</ui-code> </p>
          <p><ui-code style="font-size: 12px !important">height: 100px</ui-code></p> 
          <p><ui-code style="font-size: 12px !important">padding: 16px</ui-code></p> 
          <p><ui-code style="font-size: 12px !important">border: 2px solid black</ui-code></p>  
          <p><ui-code style="font-size: 12px !important">box-sizing: content-box</ui-code></p>  
        </div>
      </div>
      <br>
      <p> Kich thước của khối màu xanh bằng: <ui-code> 100px </ui-code> </p>
      <div style="display: flex; flex-direction: row; align-items: center">
        <div style="width: 100px; height: 100px; background: blue; padding: 16px; border: 2px solid black; box-sizing: border-box"></div>
        <div style="margin-left: 20px">
          <p><ui-code style="font-size: 12px !important">width: 100px</ui-code> </p>
          <p><ui-code style="font-size: 12px !important">height: 100px</ui-code></p> 
          <p><ui-code style="font-size: 12px !important">padding: 16px</ui-code></p> 
          <p><ui-code style="font-size: 12px !important">border: 2px solid black</ui-code></p>  
          <p><ui-code style="font-size: 12px !important">box-sizing: border-box</ui-code></p>  
        </div>
    </div>
  `
  },
  {
    id: 6,
    key: '6',
    title: 'Giải thích các CSS selectors sau đây?',
    path: '#6',
    content: `
    <p> “div, p”: chọn tất cả các thẻ div và tất cả các thẻ p. </p>
    <p> “div p”: chọn tất cả các thẻ p nằm trong thẻ div. </p>
    <p> “div > p”: chọn tất cả thẻ p có thẻ cha trực tiếp là thẻ div. </p>
    `
  },
  {
    id: 7,
    key: '7',
    title: 'Display:inline và display:block khác nhau thể nào?',
    path: '#7',
    content: `
    <div style="width: 100px; height: 100px; background: red; display: in-line"></div>
    <div style="width: 100px; height: 100px; background: green; display: in-line"></div>
    `
  }
]

// Set html/css data to sidebar
const uiSidebar = document.querySelector('#html-css-interview ui-sidebar')
uiSidebar.setAttribute('data', JSON.stringify(htmlCssCollection))

// Load questions card
const content = document.querySelector('#html-css-interview .content')
let dataContent = ''
htmlCssCollection.map((item, index) => {
  const htmlContent = htmlEntities(item.content)

  dataContent += `
  <div class="question" id="q1">
    <button class="collapsible">${index + 1}. ${item.title}</button>
    <div class="collapsible-content">
      <div class="content-view">
        ${htmlContent}
      </div>
    </div>
  </div>
  `
})
content.innerHTML = dataContent

// Collapsible function
var coll = document.querySelectorAll("#html-css-interview .collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = +content.scrollHeight + "px";
    }
  });
}
