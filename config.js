module.exports = _dev();

function _dev() {
	return {
		databaseConnectionString: "mongodb://IssueTrackerApp:C90BD87E-7267-4D55-B9A7-36B3581C3102@oceanic.mongohq.com:10038/issuetracker",
		hashAlgorithm: "sha512",
		serverPort: 8888,
		dateFormat: "YYYY-MM-DD"
	}
}