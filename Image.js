import AbstractLeaf from './AbstractLeaf'
import { getGame } from './Game'

export default class Image extends AbstractLeaf {
	constructor (x, y, key) {
		super(x, y, key)

		this.update()
	}

	init (x, y, key) {
		this._x = x
		this._y = y

		this.setupImage(key)
	}

	draw () {
		this.setPosition(this.image)
	}

	setupImage (key) {
		let { x, y } = this
		let game = getGame()

		this.image = game.add.image(x, y, key)
	}

	moveToGroup (group) {
		super.moveToGroup(group)

		if (this.group)
			this.group.add(this.image)
	}

	clearGroup () {
		this.group.remove(this.image)
		super.clearGroup()
	}

	bringToTop () {
		if (this.group)
			this.group.bringToTop(this.image)
	}
}
