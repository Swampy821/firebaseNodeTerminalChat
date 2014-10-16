var Firebase = require('firebase');
var prompt = require('prompt');
var mfire = new Firebase('https://amber-torch-2607.firebaseio.com');
var username;
prompt.start();
prompt.get({properties:{name: 'Your Name'} }, function(err, results) {
	username = results.name;
	mfire.set({chat: results.name + ' just joined!'});
	chat();
});
mfire.child('chat').on('value', function(snapshot) {
	console.log('\n' + snapshot.val());
});
function chat() {
	prompt.get("Say", function(err, results) {
		mfire.set({chat:username + ': ' + results.Say});
		chat();
	});
}