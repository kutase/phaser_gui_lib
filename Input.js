import AbstractLeaf from './AbstractLeaf'
import game from './Game'
import CanvasInput from 'canvasinput'
import { isFunc } from '../utils/other'

export default class Input extends AbstractLeaf {
	constructor (x, y, width, height, style = {}) {
		super(x, y, width, height, style)

		this.update()
	}

	init (x, y, width, height, style) {
		this._x = x
		this._y = y
		this.width = width
		this.height = height

		this.params = style

		this.setupInput(x, y, width, height)
	}

	setupInput (x, y, width, height) {
		let bitmapData = game.add.bitmapData(width, height)
    this.inputSprite = game.add.sprite(x, y, bitmapData)
    
    this.canvasInput = new CanvasInput({
      canvas: bitmapData.canvas,
      width: width - 15,
      height: height - 15,
      ...this.style,
    })

    this.inputSprite.inputEnabled = true
    this.inputSprite.input.useHandCursor = true
    this.inputSprite.events.onInputUp.add(() =>
    	this.canvasInput.focus()
    )
    this.inputSprite.events.onInputOut.add(() => {
    	game.input.onDown.addOnce(() => 
    		this.canvasInput.blur()
    	)
    })
	}

	draw () {
		this.setPosition(this.inputSprite)
	}

	set style (style) {
		super.style = style

		for (let prop of Object.keys(this.style)) {
			if (isFunc(this.canvasInput[prop])) {
				this.canvasInput[prop](this.style[prop])
			}

			if (prop == 'placeHolder') {
				this.canvasInput.value('')
			}
		}
	}

	get style () {
		return super.style
	}
}
