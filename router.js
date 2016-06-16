Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/rice', {name: 'rice'}    );
// 첫 번째는 어떤 url로 할 것인가, 두 번째는 url로 사용할 템플릿 명을 선언!
Router.route('/sideFood', {name: 'sideFood'});
Router.route('/jjigae', {name: 'jjigae'});
Router.route('/form', {name: 'form'});
Router.route('/selectmain', {name: 'selectmain'});

