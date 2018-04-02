function getLuminance(color){
	var c = color.substring(1);
	var rgb = parseInt(c, 16);
	var r = (rgb >> 16) & 0xff;
	var g = (rgb >>  8) & 0xff;
	var b = (rgb >>  0) & 0xff;
	var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	return luma;
}

function isLight(color){
	return !!(getLuminance(color) > 200);
}

function isDark(color){
	return !!(getLuminance(color) < 200);
}

function merge(target, source){
  	for (let key of Object.keys(source)) {
    	if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
  	}
	return Object.assign({}, target || {}, source)
}

module.exports = {
	getLuminance,
	isLight,
	isDark,
	merge
}