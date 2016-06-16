 Template.form.events({
     'click .commit' : function (event){

         var title = $("#title").val(); // 값을 변수에 저장
         var material = $("#material").val();
         var context = $("#context").val();
         var imageBefore = $("#image").val();
         var image = imageBefore.replace(/\\/g, '').replace("C:fakepath","");


         //console.log(context);

         var category =  Session.get('category');

         //console.log(category);

         event.preventDefault();

         Tasks.insert({
             title: title, // 키랑 값
             material: material,
             context: context,
             image: image,
             category: category,
             hand:0,
             createdAt : new Date()

         }); // db에 값 저장

         Router.go('rice'); // rice html로 이동
     }
 });