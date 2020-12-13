Home = React.createClass({
    mixins: [ReactMeteorData],
    gteMeteorData(){
        var posts = Posts.find().fetch();
        return {
            posts: posts
        }
    },
    getPosts() {
        if(this.props.user){
        return Posts.find({'user': this.props.user}).fetch();
        } else {
        return Posts.find().fetch();
        }
    },
    renderPosts() {
        return this.getPosts().map((post) => {
            return <Post key={post._id} post={post} />;
        });
    },
    render(){
        let allPosts = this.data.posts;
        
        return (
            <div>
                <h1>
                Hello World
                </h1>
                <InsertPost />
                <br />
                
                {this.renderPosts()}
            </div>
        )
});
