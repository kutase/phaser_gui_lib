import AbstractComponent from './AbstractComponent'
import game from './Game'

export default class Container extends AbstractComponent {
	constructor (x, y, width = game.camera.width, height = game.camera.height) {
		super(x, y, width, height)

		this.update()
	}

	init (x, y, width, height) {
		this._x = x
		this._y = y
		this._width = width
		this._height = height

		this.setupBorder()
		super.init()
	}

	setupBorder () {
		this.border = game.add.graphics(0, 0)
		this.border.fixedToCamera = true
	}

  drawBorder () {
    let { border, globalX, globalY, width, height } = this

    border.clear()
    border.lineStyle(3, 0xffffff, 1)
    border.moveTo(globalX, globalY)

    border.beginFill(0xffffff, 0.2)

    border.drawRect(globalX, globalY, width, height)

    border.endFill()
  }

  draw () {
  	this.drawBorder()
  }

  moveToGroup (group) {
  	super.moveToGroup(group)

  	if (this.group)
  		this.group.add(this.border)
  } 
}
