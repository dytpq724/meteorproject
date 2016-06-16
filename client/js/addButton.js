Template.addButton.events({
    'click .addButton' : function (event) {
        // count 1
        var count= Session.get('count');

        console.log('ㅎㅎ');
        $(".temp").append('<label style="color: gray" for="pictutre"><span style="color: hotpink" class="glyphicon glyphicon-heart pictCount'+ count +'" aria-hidden="true"></span> Picture </label><input type="file" name="image" style="color: gray"> <label style="color: gray" for="context"> <span style="color: hotpink" class="glyphicon glyphicon-heart conCount '+ count +'" aria-hidden="true"></span> Context <textarea class="form-control context" rows="3" id="context" placeholder="내용을 입력해주세요..."></textarea>');
        count = Session.set('count',Session.get('count')+1);
        console.log('실행끝');
    }
});