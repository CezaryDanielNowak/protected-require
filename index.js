var child_process = require('child_process');

function runCommand (commandString) {
	return child_process.execSync(commandString, {
		stdio: 'pipe'
	});
}

module.exports = function (path, verbose) {
	var modulePath;

	try {
		// check if file exists
		modulePath = require.resolve(path);
	} catch (err) {
		if (verbose) {
			console.error(err);
		}
		if (err.code == 'MODULE_NOT_FOUND') {
			return undefined;
		}
	}

	try {
		// check if file has valid javascript syntax
		runCommand('node --check ' + modulePath);
		return require(path);
	} catch (err) {
		if (verbose) {
			console.error(err);
		}
		return undefined;
	}
};