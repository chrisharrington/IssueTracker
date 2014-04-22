module.exports = {
	root: require("./root"),
	welcome: require("./welcome"),
	issues: require("./issues"),
	notifications: require("./notifications"),
	style: require("./style"),

	init: function(app) {
		for (var name in this)
			if (name != "init")
				this[name].call(this, app);
	}
};