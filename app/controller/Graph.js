Ext.define('MyApp.controller.Graph', {
    extend: 'Ext.app.Controller',
	
	views: ['graph.Main'],
	models: ['GraphNode'],
	stores: ['Graph'],
	
	init: function() {

		var ctrl = {};



		ctrl['graph-main'] = {
			render: function(view) {

				
				var sprite = Ext.create('Ext.draw.Sprite', {
					type: 'circle',
					fill: '#0f0',
					surface: view.surface,
					radius: 5,
					x: 100,
					y: 100
				});
				
				sprite.show(true);

				sprite = Ext.create('Ext.draw.Sprite', {
					type: 'rect',
					surface: view.surface,
					'stroke-width': 10,
					stroke: '#056567', 
					width: 200,
					height: 50,
					fill: '#00f',
					x: 100,
					y: 100,
					group: 'rectangles'
				});

				sprite.show(true);
			}
		};


		this.control(ctrl);

		this.callParent(arguments);
	},
	
	onRenderGraphView: function() {
		
	}




});


