let inited = false

export function init (game) {
	let setGame = require('./Game').setGame

	setGame(game)
	inited = true
}

exports.AbstractGraphic = inited ? require('./AbstractGraphic').default : null
exports.AbstractComponent = inited ? require('./AbstractComponent').default : null
exports.AbstractLeaf = inited ? require('./AbstractLeaf').default : null
exports.Button = inited ? require('./Button').default : null
exports.Container = inited ? require('./Container').default : null
exports.Image = inited ? require('./Image').default : null
exports.Text = inited ? require('./Text').default : null
exports.RootContainer = inited ? RootContainer : null
