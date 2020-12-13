Post = React.createClass({
   render(){
       let {postId} = this.props;
       console.log('post Id', postId);
       return (
           <div className="card">
               <h3>{post.user}</h3>
               <p>{post.conent}</p>
           </div>
       )
   } 
});
