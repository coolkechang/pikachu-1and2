import string from './css.js' //引用css.js

// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')
// let n = 1;
// let runTime = 50;
// let id;

const player = {
  n: 1,
  runTime: 50,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },

  hashTable: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },

  init: () => {  //init是启动的简写。通常，它用于创建“ new Object（）”。用作初始化
    player.ui.demo.innerHTML = string.substring(0, player.n);
    player.ui.demo2.innerText = string.substring(0, player.n); //substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。
    player.play();
    player.bindEvents();
  },

  bindEvents: () => {
    for (let key in player.hashTable) {
      if (player.hashTable.hasOwnProperty(key)) {//如果player.hashTable的key是自身属性.(防止遍历到继承的属性)
        const value = player.hashTable[key]  // pause / play /slow
        document.querySelector(key).onclick = player[value]
      }
    }
  },

  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerHTML = string.substring(0, player.n);
    player.ui.demo2.innerText = string.substring(0, player.n);
    player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight;
  },

  play: () => {
    player.id = setInterval(player.run, player.runTime)
  },
  //Window 和 Worker 接口提供的 setInterval() 方法重复调用一个函数或执行一个代码片段，在每次调用之间具有固定的时间间隔。它返回一个 interval ID，该 ID 唯一地标识时间间隔，因此你可以稍后通过调用 clearInterval() 来移除定时器。
  //代码优化：() => {player.run()}简化成 player.run。比如在 let x = () => {run()} 中 x 与run()等价。因为这句代码就是x要执行run，没干别的。那执行x和执行run()是一样的

  pause: () => {
    window.clearInterval(player.id)
  },

  slow: () => {
    player.pause()
    player.runTime = 200
    player.play()
  },

  normal: () => {
    player.pause()
    player.runTime = 50
    player.play()
  },

  fast: () => {
    player.pause()
    player.runTime = 0
    player.play()
  }
}

player.init()//对player进行初始化


