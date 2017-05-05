import AbstractGraphic from './AbstractGraphic'

export default class AbstractLeaf extends AbstractGraphic {
	isLeaf = true
	params = {}

	constructor (...args) {
		super(...args)
	}

	init () {
		super.init()
	}

	setPosition (primitive) {
		let { params, parent, width, height, globalX, globalY } = this

		let hasChanges = false

		if (parent) {
			if (params.positionX) {
				switch(params.positionX) {
					case 'center':
					primitive.x = parent.globalX + parent.width / 2 - width / 2
					break

					case 'left':
					primitive.x = parent.globalX
					break

					case 'right':
					primitive.x = parent.globalX + parent.width - width
					break
				}

				hasChanges = true
			}

			if (params.positionY) {
				switch(params.positionY) {
					case 'center':
					primitive.y = parent.globalY + parent.height / 2 - height / 2
					break

					case 'top':
					primitive.y = parent.globalY
					break

					case 'bottom':
					primitive.y = parent.globalY + parent.height - height
					break
				}

				hasChanges = true
			}
		}

		if (!hasChanges) {
			primitive.x = globalX
			primitive.y = globalY
		}
	}

	set style (style) {
		this.params = { ...this.params, ...style }
	}

	get style () {
		return this.params
	}
}
