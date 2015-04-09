'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var XenonthemeMeanio = new Module('xenontheme-meanio');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
XenonthemeMeanio.register(function(app, auth, database) {
    app.set('views', __dirname + '/server/views');

    //We enable routing. By default the Package Object is passed to the routes
    XenonthemeMeanio.routes(app, auth, database);

    XenonthemeMeanio.aggregateAsset('css', 'xenonthemeMeanio.css');
    XenonthemeMeanio.aggregateAsset('css', '../lib/bootstrap-xenon/dist/css/fonts/linecons/css/linecons.css');
    XenonthemeMeanio.aggregateAsset('css', '../lib/bootstrap-xenon/dist/css/fonts/fontawesome/css/font-awesome.min.css');
    XenonthemeMeanio.aggregateAsset('css', '../lib/bootstrap-xenon/dist/css/xenon-bootstrap.css');
    XenonthemeMeanio.aggregateAsset('css', '../lib/bootstrap-xenon/dist/css/xenon.min.css');

    return XenonthemeMeanio;
});
