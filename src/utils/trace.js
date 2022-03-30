import * as PIXI from 'pixi.js'
const { Application, Graphics, Container, Sprite } = PIXI
const colors = ['0x5470c6', '0x91cc75', 0xfac858, 0xee6666, 0x73c0de, 0x3ba272, 0xfc8452, 0x9a60b4, 0xea7ccc, 0xfff]
function getRandomColor () {
  return (function intor (m, s, c) {
    return (c ? intor(m, s, c - 1) : '0x') +
    s[m.floor(m.random() * 16)]
  })(Math, '0123456789abcdef', 5)
}
// console.log('Graphics', Graphics)
function paintTrail ({ node, imgSrc, width, height, circleRadius = 10, lineWidth = 2, scale = 1 }) {
  width *= scale
  height *= scale
  circleRadius *= scale
  lineWidth *= scale

  const app = new Application({ width, height, transparent: true })
  node.appendChild(app.view)

  const container = new Container()

  const sprite = Sprite.from(imgSrc)

  sprite.width = width
  sprite.height = height

  container.addChild(sprite)
  app.stage.addChild(container)
  console.log(container)
  const pointArr = []

  const traceGrapMap = {}
  return {
    scale (size) {
      container.scale.x = size
      container.scale.y = size
    },
    clearTrace (id) {
      if (traceGrapMap[id]) {
        traceGrapMap[id].destroy()
        traceGrapMap[id] = null
        delete traceGrapMap[id]
      }
    },
    paintTrace (id) {
      const item = pointArr.find(it => it.id === id)
      if (!item) {
        return
      }
      this.clearTrace(id)
      // console.log(item)
      const graphics = new Graphics()
      graphics.lineStyle(lineWidth, item.color) // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
      graphics.moveTo(item.traceArr[0].x * scale, item.traceArr[0].y * scale)
      item.traceArr.forEach((it, idx) => {
        if (idx === 0) {
          return
        }
        graphics.lineTo(it.x * scale, it.y * scale)
      })
      traceGrapMap[id] = graphics
      // graphics.endFill();
      container.addChild(graphics)
    },
    apoint (id, x, y) {
      if (pointArr.find(it => it.id === id)) {
        this.moveTo(id, x, y)
      } else {
        this.addPoint(id, x, y)
      }
    },
    addPoint (id, x, y) {
      const color = pointArr.length >= colors.length ? getRandomColor() : colors[pointArr.length]
      if (pointArr.find(it => it.id === id)) {
        throw Error('id相同')
      }
      const graphics = new Graphics()
      graphics.lineStyle(0) // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
      graphics.beginFill(color, 1)
      graphics.drawCircle(0, 0, circleRadius)
      graphics.endFill()

      graphics.interactive = true
      let count = 1
      graphics.on('click', (e) => {
        // console.log(e)
        if (count++ % 2) {
          this.paintTrace(id)
        } else {
          this.clearTrace(id)
        }
      })
      graphics.on('touchend', (e) => {
        // console.log(e)
        if (count++ % 2) {
          this.paintTrace(id)
        } else {
          this.clearTrace(id)
        }
      })
      container.addChild(graphics)
      pointArr.push({
        graphics,
        color,
        x,
        y,
        id,
        traceArr: []
      })
      this.moveTo(id, x, y)
      return graphics
    },
    moveTo (id, x, y) {
      const item = pointArr.find(it => it.id === id)
      if (item) {
        // console.log(item)
        item.graphics.position.x = x * scale
        item.graphics.position.y = y * scale
        item.traceArr.push({
          x,
          y
        })
        if (item.traceArr.length > 100) {
          item.traceArr.shift()
        }
      }
    },
    clear (id) {
      const idx = pointArr.findIndex(it => it.id === id)
      if (idx > -1) {
        let [item] = pointArr.splice(idx, 1)
        item.graphics.destroy()
        item.traceArr = []
        item = null
      }
    }
  }
}

export default {
  paintTrail
}
