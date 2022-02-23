const mainEl = document.querySelector('main')
const footerEl = document.querySelector('footer')

const halfHeightOfFooter = Math.round(footerEl.offsetHeight / 2)

mainEl.style.paddingBlock = halfHeightOfFooter + 'px'
