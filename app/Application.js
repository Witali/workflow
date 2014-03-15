Ext.define('MyApp.Application', {
    name: 'MyApp',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
        
    ],

    controllers: [

        'Document',
		'Graph',
        'Main'
    ],

    stores: [
        'Documents'
    ]
});
