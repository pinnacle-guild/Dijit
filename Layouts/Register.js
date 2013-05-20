/*
    Layout construction for the register page.
*/

// Styling settings
Pinnacle.pages.register.styling = {
    registerAccountContainer : {
        style : {
            
        }
    }
}




require([
    "dijit/layout/LayoutContainer",
    "dijit/layout/ContentPane",
    "dojo/domReady!"
], function(LayoutContainer, ContentPane){
    // Create a LayoutContainer to wrap the layout
    var registerAccountContainer = new LayoutContainer({
        
    });
    
    var bc = new BorderContainer({
        style: "height: 300px; width: 500px;"
    });

    // create a ContentPane as the left pane in the BorderContainer
    var cp1 = new ContentPane({
        region: "left",
        style: "width: 100px",
        content: "hello world"
    });
    bc.addChild(cp1);

    // create a ContentPane as the center pane in the BorderContainer
    var cp2 = new ContentPane({
        region: "center",
        content: "how are you?"
    });
    bc.addChild(cp2);

    // put the top level widget into the document, and then call startup()
    bc.placeAt(document.body);
    bc.startup();
});