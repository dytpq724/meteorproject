
Template.selectmain.helpers({

    cooks: function(){
        var a = Session.get('searchList');
        return Tasks.find({title:{$regex:a}});
    }
});

Template.layout.events({
    "click #searchBtn" : function(){
        var search = $("#searchInput").val();
        Session.set('searchList',search);
        Router.go('/selectmain');
        }
});
