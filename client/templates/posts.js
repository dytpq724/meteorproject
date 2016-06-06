/**
 * Created by young on 2016-06-06.
 */
Template.posts.helpers({
    title: function() {
        console.log(this);
        return this._subject+"학생입니다.";
    }
});