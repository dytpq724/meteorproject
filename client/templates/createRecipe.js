Template.createRecipe.events({
    'click .create_recipe' : function (event){
        event.preventDefault();
        console.log('클릭 후 form 태그 이동 완료');
        Router.go('form');

    }
});