Template.createRecipe.events({
    'click .create_recipe' : function (event){
        //event.preventDefault();
        console.log('클릭 후 form 태그 이동 완료');

        Session.set('count', 1);

        Router.go('form');

    }
});