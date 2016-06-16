
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
        },


});
Template.foodList.events({
    "click #comments" : function(){
        Router.go('/comments');
    },
    'click #goods': function(evt){
        var a = Tasks.findOne({_id:this._id});
        var nowhand = a.hand; nowhand++;
        Tasks.update({_id:this._id},
            {$set:{'hand': nowhand}
            });
    }
});

