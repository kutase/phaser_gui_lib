import AbstractLeaf from './AbstractLeaf'
import game from './Game'

export default class Button extends AbstractLeaf {
	constructor (x, y, key, over, out, down) {
		super(x, y, key, over, out, down)

		this.update()
	}

	init (x, y, key, over, out, down) {
		this._x = x
		this._y = y

		this.onClickList = []

		this.setupButton(key, over, out, down)
	}

	draw () {
		this.setPosition(this.button)
	}

	setupButton (key, over, out, down) {
		let { x, y } = this
		this.button = game.add.button(x, y, key, this.onClick, this, over, out, down)
	}

	onClick () {
		for (let func of this.onClickList) {
			func()
			if (func.once) {
				func.once = false
				this.removeOnClick(func)
			}
		}
	}

	addOnClick (func, once = false) {
		if (once)
			func.once = true

		this.onClickList.push(func)
	}

	removeOnClick (func) {
    let index = this.onClickList.indexOf(func)

    if (index != -1) {
      this.onClickList.splice(index, 1)
    }
	}

	moveToGroup (group) {
		super.moveToGroup(group)

		if (this.group)
			this.group.add(this.button)
	}

	clearGroup () {
		this.group.remove(this.button)
		super.clearGroup()
	}

	bringToTop () {
		if (this.group)
			this.group.bringToTop(this.button)
	}
}
