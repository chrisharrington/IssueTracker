IssueTracker.app.factory("usersDeleteUser", function($rootScope, userRepository, feedback) {
	var _scope;

	return {
		init: function() {
			return _scope = {
				show: false,
				loading: false,

				load: function(user) {
					_scope.user = user;
					_scope.show = true;
				},

				users: function(users) {
					_scope.users = users;
				},

				ok: function() {
					_scope.loading = true;
					userRepository.remove(_scope.user).then(function() {
						feedback.success(_scope.user.name + " has been deleted.");
						_scope.show = false;
						_moveUser(_scope.user);
					}).catch(function() {
						feedback.error("An error has occurred while deleting the user. Please try again later.");
					}).finally(function() {
						_scope.loading = false;
					});
				},

				cancel: function() {
					_scope.show = false;
					_scope.loading = false;
				}
			};

			function _moveUser(remove) {
				$.each(_scope.users, function(i, user) {
					if (user.id === remove.id)
						user.isDeleted = true;
				});

				$.each($rootScope.users, function(i, user) {
					if (user.id === remove.id)
						user.isDeleted = true;
				});
			}
		}
	};
});