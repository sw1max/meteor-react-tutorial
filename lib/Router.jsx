FlowRouter.route("/", {
    name: "Home",
    action(params){
        renderView(<Home />);
    }
});

FlowRouter.route("/posts-by/:user", {
    name: "Posts",
    action(params){
        renderView(<Home user={params.user} />);
    }
});

function renderView(component){
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />,
        logThis: "This is a property"
}
