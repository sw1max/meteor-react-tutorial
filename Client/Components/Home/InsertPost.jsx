InsertPost = React.createClass({
    insertToCollection(event){
        event.preventDefault();
        var content = $('#post-body').val();
        var user = $('#user').val();
        Posts.insert({
            content: content,
            user: user,
            dateAdded: new Date()
        });
    },
    render(){
        return (
            <div>
                <form onSubmit={this.insertToCollection}>
                    <input className="form-control" id="user" placeholder="User Name" /><br />
                    <textarea placeholder="Type a post" className="form-control" id="post-body"><br />
                    <button type="submit" className="btn btn-info">Save Post</button>
                </form>
            </div>
        )
    }
});
