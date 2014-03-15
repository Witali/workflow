Ext.define('MyApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'panel',
        height: 100,
        html: '<h1 style="margin 0; padding: 0 20px; font-size: 40px; line-height: 50px;">Workflow system</h1>'
    }, {
        region: 'west',
        xtype: 'panel',
        title: 'Components',
        split: true,         // enable resizing
        width: 200
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Workflow',
            xtype: 'graph-main'
        }, {
            title: 'New Documents'
        }, {
            title: 'Processing Documents'
        }, {
            title: 'Sent Documents'
        }, {
            title: 'Closed Documents'
        }]
    }]
});