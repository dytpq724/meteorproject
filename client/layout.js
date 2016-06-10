
Template.layout.events({
    "change .hide-completed input": function (event) {

    }
});
Template.layout.events({
    'click .btn-default': function (event) {
        Router.go('/selectmain');
    },
    'click .btn-write': function(event){
        Router.go('/cookwrite');
    }
});