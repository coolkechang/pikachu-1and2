const string = `
.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::before,
.skin *::after {
  box-sizing: border-box;
}

.skin {
  position: relative;
  background: #ffe600;
  min-height: 50vh;
}

.nose {
  position: absolute;
  border: 10px solid black;
  border-color: black transparent transparent;
  width: 0px;
  height: 0px;
  left: 50%;
  margin-left: -10px;
  top: 200px;
  z-index: 10;
}
@keyframes wave {
  0% {
      transform: rotate(0deg);
  }
  33% {
      transform: rotate(8deg);
  }
  66% {
      transform: rotate(-8deg);
  }
  100% {
      transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: center bottom;
  animation: wave 240ms infinite linear;
}

.yuan {
  position: absolute;
  border: 1px solid black;
  background: black;
  width: 20px;
  height: 8px;
  top: -18px;
  left: -10px;
  border-radius: 8px 8px 0 0;
}

.eye {
  position: absolute;
  border: 2px solid black;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 160px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: '';
  display: block;
  position: absolute;
  border: 3px solid black;
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  left: 4px;
  top: 2px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}

.mouth {
  position: absolute;
  width: 160px;
  height: 160px;
  left: 50%;
  margin-left: -80px;
  top: 240px;
}
.mouth .up {
  position: relative;
  top: -28px;
  z-index: 1;
}
.mouth .up .lip {
  border: 3px solid black;
  height: 32px;
  width: 80px;
  border-top-color: transparent;
  border-right-color: transparent;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -40px;
  background: #ffe600;
}

.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-20deg) translateX(-44px);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(20deg) translateX(44px);
}
.mouth .up .lip::before {
  content: '';
  display: block;
  position: absolute;
  height: 28px;
  width: 5px;
  bottom: 0;
  background: #ffe600;
}
.mouth .up .lip.left::before {
  right: -4.5px;
}
.mouth .up .lip.right::before {
  left: -4.5px;
}

.mouth .down {
  height: 160px;
  position: absolute;
  top: 0px;
  width: 100%;
  overflow: hidden;
}

.mouth .down .yuan1 {
  border: 2px solid black;
  position: absolute;
  width: 150px;
  height: 500px;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 100px/320px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  position: absolute;
  width: 200px;
  height: 300px;
  bottom: -170px;
  left: 50%;
  margin-left: -100px;
  background: #ff485f;
  border-radius: 100px;
}

.face {
  position: absolute;
  left: 50%;
  border: 2px solid black;
  width: 100px;
  height: 100px;
  top: 270px;
  margin-left: -50px;
  border-radius: 50%;
  z-index: 3;
  background: #ff0000;
}
.face.left {
  transform: translateX(-160px);
}
.face.right {
  transform: translateX(160px);
}
`
export default string;
//这里将style.css内容放进来了。
//这里用了模块化，就是将一块独立代码放在一个文件里然后导出。