import Container from './Container'
import { getGame } from './Game'

function genRootContainer () {
	let game = getGame()

	let rootContainer = new Container(0, 0)
	rootContainer.moveToGroup(game.GUIGroup)

	game.rootContainer = rootContainer

	return rootContainer
}

export default genRootContainer
