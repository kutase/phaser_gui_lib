export function isFunc (obj) {
	return !!(obj && obj.constructor && obj.call && obj.apply)
}
