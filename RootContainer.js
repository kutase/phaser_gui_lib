import Container from './Container'
import game from '../classes/Game'

let rootContainer = new Container(0, 0)
rootContainer.moveToGroup(game.GUIGroup)

game.rootContainer = rootContainer

export default rootContainer
