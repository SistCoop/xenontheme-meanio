'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Xenontheme = new Module('xenontheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Xenontheme.register(function(app, auth, database) {

    app.set('views', __dirname + '/server/views');

    //We enable routing. By default the Package Object is passed to the routes
    Xenontheme.routes(app, auth, database);

    Xenontheme.aggregateAsset('css', 'xenontheme.css');
    Xenontheme.aggregateAsset('css', '../lib/bootstrap-xenon/dist/css/fonts/linecons/css/linecons.css');
    Xenontheme.aggregateAsset('css', '../lib/bootstrap-xenon/dist/css/fonts/fontawesome/css/font-awesome.min.css');
    Xenontheme.aggregateAsset('css', '../lib/bootstrap-xenon/dist/css/xenon-bootstrap.css');
    Xenontheme.aggregateAsset('css', '../lib/bootstrap-xenon/dist/css/xenon.min.css');

    return Xenontheme;
});
