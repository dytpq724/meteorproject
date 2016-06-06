Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'home'});
Router.route('/rice', {name: 'rice'});
// 첫 번째는 어떤 url로 할 것인가, 두 번째는 url로 사용할 템플릿 명을 선언!
Router.route('/study', {name: 'study'});
Router.route('/contact', {name: 'contact'});
Router.route('/posts', {name: 'posts'});
//Router.route('/notFound', {name: 'notFound'});

