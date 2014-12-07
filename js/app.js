App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('posts', function() {
	this.resource('post', { path:':post_id' });
    });
});

App.PostsRoute = Ember.Route.extend({
    model: function() {
	return $.getJSON('http://localhost:9000/preview').then(function(data){
	    return data.posts.map(function(post) {
		post.body = post.;
		return post;
	    });
	});
    }
});

App.PostRoute = Ember.Route.extend({
    model: function(params) {
//	return posts.findBy('id', params.post_id);
	return $.getJSON('http://localhost:9000/blog/'+params.post_id).then(function(data){
	    data.post.body = data.post.content;
	    return data.post;
	});
    }
});

App.PostController = Ember.ObjectController.extend({
    isEditing : false,

    actions: {
	edit: function() {
	    this.set('isEditing', true);
	},
	doneEditing: function() {
	    this.set('isEditing', false);
	}
    }
});

Ember.Handlebars.helper('format-date', function(date) {
    return moment(date).fromNow();
});

var showdown = new Showdown.converter();
Ember.Handlebars.helper('format-markdown', function(input) {
    return new Handlebars.SafeString(showdown.makeHtml(input));
});
