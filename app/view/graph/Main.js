Ext.define('MyApp.view.graph.Main', {
    extend: 'Ext.view.View',
    
    xtype: 'graph-main',

    tpl: new Ext.XTemplate(
        '<tpl for=".">',
            '<div style="margin-bottom: 10px;" class="thumb-wrap">',
              '<img src="{src}" />',
              '<br/><span>{caption}</span>',
            '</div>',
        '</tpl>'
    ),
    itemSelector: 'div.thumb-wrap'
});