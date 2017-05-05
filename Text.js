import AbstractLeaf from './AbstractLeaf'
import game from './Game'

export default class Text extends AbstractLeaf {
	constructor (x, y, text, style = {}) {
		super(x, y, text, style)

		this.update()
	}

	init (x, y, text, style) {
		this._x = x
		this._y = y

		this.params = style

		this.setupText(text)
	}

	draw () {
		this.setPosition(this.text)
	}

	setupText (text) {
		let { x, y } = this

		this.text = game.add.text(x, y, text)
		this.style = this.params
	}

	set alpha (val) {
		this.text.alpha = val
	}

	set style (style) {
		super.style = style
		this.text.setStyle(this.params)

		this.setPosition(this.text)
	}

	get style () {
		return super.style
	}

	moveToGroup (group) {
		super.moveToGroup(group)

		if (this.group)
			this.group.add(this.text)
	}

	clearGroup () {
		this.group.remove(this.text)
		super.clearGroup()
	}

	bringToTop () {
		if (this.group)
			this.group.bringToTop(this.text)
	}
}
