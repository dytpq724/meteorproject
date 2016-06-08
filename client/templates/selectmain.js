if(Meteor.isClient) {
Template.selectmain.helpers({
    cooks:[
        {text: '하나치킨',image:'/하나.jpg'},
        {text: '둘둘치킨',image:'/둘둘.jpg'},
        {text: '삼삼치킨',image:'/삼삼.jpg'},
        {text: '네네치킨',image:'/네네.jpg'}
    ]
});

    Template.layout.events({
        'click .btn-default': function (event) {
            Router.go('/selectmain');
        }
    });

}