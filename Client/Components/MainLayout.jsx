MainLayout = React.createClass({
    render(){
        console.log(this.props.logThis);
        return (
            <div>
                {this.props.header}
                
                {this.props.content}
                
                {this.props.footer}
            </div>
        )
    }
});
