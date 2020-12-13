Posts = new Mongo.Collection("posts");
Post.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function() {
        return true;
    }
})
