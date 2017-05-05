let game_instance = null

export function setGame (game) {
	game_instance = game
}

export function getGame () {
	if (game_instance == null)
		throw new Error('Game is not defined!')

	return game_instance
}

export function clearGame () {
	game_instance = null
}

export default game_instance
