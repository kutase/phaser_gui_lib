import AbstractGraphic from './AbstractGraphic'

export default class AbstractComponent extends AbstractGraphic {
	constructor (...args) {
		super(...args)
	}

	init () {
		this.children = []

		this.children.delete = function (el) {
	    let index = this.indexOf(el)

	    if (index != -1) {
	      this.splice(index, 1)
	      
	      return el
	    }

	    return null
		}

		this.children.add = function (el) {
			this.push(el)
		}

		super.init()
	}

	update () {
		super.update()
		this.sort()

		for (let child of this.children) {
			child.update()
		}
	}

	add (element) {
		this.children.add(element)
		element.moveToGroup(this.group)
		element.parent = this

		element.z = this.z + 1

		this.update()
	}

	remove (element) {
		this.children.delete(element)
		element.parent = null
		element.clearGroup()

		this.update()
	}

	moveToGroup (group) {
		this.group = group

		for (let child of this.children) {
			child.moveToGroup(this.group)
		}
	}

	clearGroup () {
		for (let child of this.children) {
			child.clearGroup()
		}

		this.group = null
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

	set width (val) {
		this._width = val
		this.update()
	}

	get width () {
		return this._width
	}

	set height (val) {
		this._height = val
		this.update()
	}

	get height () {
		return this._height
	}

	sortFunc (a, b) {
		return a.z > b.z
	}

	bringToTop () {
		super.bringToTop()

		for (let child of this.children) {
			child.bringToTop()
		}
	}

	sort (func = this.sortFunc) {
		this.children.sort(func)

		for (let child of this.children) {
			child.bringToTop()
		}
	}
}
