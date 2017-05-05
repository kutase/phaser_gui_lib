function init (game) {

	// console.log('Current game:', game)
	let setGame = require('./Game').setGame

	setGame(game)

	return () => ({
		AbstractGraphic: require('./AbstractGraphic').default,
		AbstractComponent: require('./AbstractComponent').default,
		AbstractLeaf: require('./AbstractLeaf').default,
		Button: require('./Button').default,
		Container: require('./Container').default,
		Image: require('./Image').default,
		Input: require('./Input').default,
		Text: require('./Text').default,
		RootContainer: require('./RootContainer').default
	})
}

module.exports = init
