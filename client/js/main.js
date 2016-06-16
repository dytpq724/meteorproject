Template.rice.events({
    'click .create_recipe' : function (event){
        event.preventDefault();
        console.log('클릭 후 form 태그 이동 완료');
        Router.go('form');

    }
});
Template.rice.helpers({
    riceLists: function() {

        var category = Session.get('category');
        console.log('헬퍼 진입');
        return Tasks.find({category:category});
    }
});

Template.jjigae.helpers({
    riceLists: function() {

        var category = Session.get('category');
        console.log('헬퍼 진입');
        return Tasks.find({category:category});
    }
});
Template.sideFood.helpers({
    riceLists: function() {

        var category = Session.get('category');
        console.log('헬퍼 진입');
        return Tasks.find({category:category});
    }
});
Template.layout.events({
    'click #home' : function (event) {
        //event.preventDefault(); pathfor 같은 라우팅 링크를 막아버리고, 대신 db값이 있으므로 db값만 들고옴
        Session.set('category', '홈'); // 앞에는 변수(키), 뒤에는 들어갈 값, 나중에 사용
    },
    'click #rice' : function (event) {
        //event.preventDefault(); pathfor 같은 라우팅 링크를 막아버리고, 대신 db값이 있으므로 db값만 들고옴
        Session.set('category', '밥');
    },
    'click #jjigae' : function (event) {
        //event.preventDefault();
      Session.set('category', '찌개');
    },
    'click #sideFood' : function (event) {
        //event.preventDefault();
       Session.set('category', '반찬');
    }

});

