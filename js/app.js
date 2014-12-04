App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('posts');
    this.resource('post', { path:':post_id' });
});

App.PostsRoute = Ember.Route.extend({
    model: function() {
	return posts;
    }
});

var posts = [{
    id: '1',
    title: "who I am",
    author: { name: "ocean" },
    date: new Date('12-3-2014'),
    excerpt: "this is a brief intro of myself",
    body: "I was born in Tianjin, China. I was planning to be a biologist but end up be a coder."
}, {
    id: '2',
    title: "why am I making this",
    author: { name: "ocean" },
    date: new Date('12-4-2014'),
    excerpt: "the reason for me to build this site",
    body: "I want to use this blog to show people how much I learnt, how much I love data and how much I love my gf!"
}];
