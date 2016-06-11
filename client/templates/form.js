 Template.form.events({
     'click .commit' : function (event){

         var title = $("#usr").val(); // 값을 변수에 저장
        var category =  Session.get('category');
         event.preventDefault();

         Tasks.insert({
             title: title,
             category: category,
             createdAt : new Date()

         }); // db에 값 저장

         Router.go('rice'); // rice html로 이동
     }
 });