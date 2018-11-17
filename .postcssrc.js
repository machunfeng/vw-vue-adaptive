// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,      // 視窗的寬度，對應的是我們設計稿的寬度，一般是750
      viewportHeight: 1334,    // 視窗的高度，根據750設備的寬度來指定，一般指定1334，也可以不配置
      unitPrecision: 3,        // 指定`px`轉換為視窗單位值的小數位數（很多時候無法整除）
      viewportUnit: 'vw',      // 指定需要轉換成的視窗單位，建議使用vw
      selectorBlackList: ['.ignore', '.hairlines'],  // 指定不轉換為視窗單位的類，可以自定義，可以無限添加,建議定義一至兩個通用的類名
      minPixelValue: 1,       // 小於或等於`1px`不轉換為視窗單位，你也可以設置為你想要的值
      mediaQuery: false       // 允許在媒體查詢中轉換`px`
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}
