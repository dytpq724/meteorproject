if(Meteor.isClient) {
Template.selectmain.helpers({
    cooks:[
        {text: '네네치킨'},
        {text: '둘둘치킨'},
        {text: '삼삼치킨'},
        {text: '하나치킨'}
    ]
});

    Template.layout.events({
        'click .btn-default': function (event) {
            Router.go('/selectmain');
        }
    });

}