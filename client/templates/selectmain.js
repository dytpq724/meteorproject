if(Meteor.isClient) {
    var cooks = [
        {title: '하나치킨',image:'/하나.jpg',text:'하나하면할머니가...잘잘잘'},
        {title: '둘둘치킨',image:'/둘둘.jpg',text:'두울하면두부장수...잘잘잘'},
        {title: '삼삼치킨',image:'/삼삼.jpg',text:'세엣하면새색시가...잘잘잘'},
        {title: '네네치킨',image:'/네네.jpg',text:'네엣하면?????가...잘잘잘'}
    ];
    Session.set("cooks",cooks);

Template.selectmain.helpers({
    cooks: function(){return Session.get('searchData');}
});

Template.layout.events({
    "click #searchBtn" : function(){
        var search = $("#searchInput").val();
        var data = Session.get("cooks");
        for(var a in data){
            if(data[a].title == search){
                var arr = [];
                arr.push(data[a]);
                Session.set("searchData",arr);
            }
        }
    }
});
}