Ext.define('MyApp.controller.Graph', {
    extend: 'Ext.app.Controller',
	
	views: ['graph.Main'],
	models: ['GraphNode'],
	stores: ['Graph'],
	
	init: function() {

		var ctrl = {};

		ctrl['list'] = {
			render: function(list) {

			}
		};


		this.control(ctrl);

		this.callParent(arguments);
	},
	
	onRenderGraphView: function() {
		
	}




});


