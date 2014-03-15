Ext.define('MyApp.controller.Document', {
    extend: 'Ext.app.Controller',
	
	init:function(){

	this.listWidgetName = this.widgetPrefix + 'list';

	var ctrl = {};

	ctrl['list'] = {
		render: function(list) {
			
		}
	};


	this.control(ctrl);

	this.callParent(arguments);
}


});


