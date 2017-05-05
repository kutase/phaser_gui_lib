export default class AbstractGraphic {
	isLeaf = false
	isHidden = false

	_x = 0
	_y = 0
	_z = 0

	constructor (...args) {
		this.init(...args)
	}

	init () {
		this.update()
	}

	// @Override
	draw () {}

	update () {
		this.draw()
	}

	moveToGroup (group) {
		this.group = group
	}

	clearGroup () {
		this.group = null
	}

	bringToTop () {
		if (this.group == null)
			throw new Error('Cannot bring to top without group')
	}

	hide () {
		if (this.isHidden)
			return

		this.isHidden = true

		this.position = {
			x: this.x,
			y: this.y,
		}

		this.x = -10000
		this.y = -10000
	}

	show () {
		if (!this.isHidden)
			return

		this.isHidden = false

		this.x = this.position.x
		this.y = this.position.y
	}

	// @Override
	bringToTop () {}

	set x (val) {
		this._x = val
		this.update()
	}

	get x () {
		return this._x
	}

	set y (val) {
		this._y = val
		this.update()
	}

	get y () {
		return this._y
	}

	get globalX () {
		if (!this.parent)
			return this.x
		return this.x + this.parent.x
	}

	get globalY () {
		if (!this.parent)
			return this.y
		return this.y + this.parent.y
	}

	set z (val) {
		this._z = val

		if (this.parent)
			this.parent.update()
	}

	get z () {
		return this._z
	}
}
