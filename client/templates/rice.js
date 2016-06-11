Template.rice.events({
    'click .create_recipe' : function (event){
        event.preventDefault();
        console.log('클릭 후 form 태그 이동 완료');
        Router.go('form');

    }
});


Template.layout.events({
    'click #home' : function (event) {
        //event.preventDefault(); pathfor 같은 라우팅 링크를 막아버리고, 대신 db값이 있으므로 db값만 들고옴
        var category = Session.set('category', '홈');
    },
    'click #rice' : function (event) {
        //event.preventDefault(); pathfor 같은 라우팅 링크를 막아버리고, 대신 db값이 있으므로 db값만 들고옴
        var category = Session.set('category', '밥');
    },
    'click #jjigae' : function (event) {
        //event.preventDefault();
        var category = Session.set('category', '찌개');
},
    'click #sideFood' : function (event) {
        //event.preventDefault();
        var category = Session.set('category', '반찬');
    }

});

Template.foodList.helpers({
    riceList: function() {

        var category = Session.get('category');
        console.log('헬퍼 진입');
        return Tasks.find({category:category});
    }
});