Ext.define('MyApp.controller.Graph', {
    extend: 'Ext.app.Controller',
	
	views: ['graph.Main'],
	models: ['GraphNode'],
	stores: ['Graph'],
	
	init: function() {
		
		

		var me = this,
			ctrl = {};



		ctrl['graph-main'] = {
			render: me.render.bind(me)
		};


		this.control(ctrl);

		this.callParent(arguments);
	},
	
	render: function(view) {
		
		var me = this,
			store = me.getGraphStore(),
			nextIndex = store.find('type', 'start'),
			next = nextIndex >= 0 ? store.getAt(nextIndex) : 0,
			nextId,
			x = 50.5,
			y = 50.5;
			
		
		
		while(next) {
			
			me.drawBlock(view.surface, next.get('type'), next.get('text'), x, y);
			
			y += 80;

			nextId = next.get('output') || next.get('outputYes');
			next = nextId && store.getById(nextId);
		}
		
		setTimeout(function() {
      view.surface.el.setSize(500, 1000);
		}, 200);
		
		
		
	},
	
	drawBlock: function(surface, type, text, x, y) {
		
		var sprite;

		sprite = Ext.create('Ext.draw.Sprite', {
			type: "text",
			surface: surface,
			text: text,
			width: 160,
			height: 20,
			fill: "#000",
			x: x + 30,
			y: y + 20,
			font: "18px"
		});

		sprite.show(true);	
		
		var path, shapeType = 'rect';

		switch(type) {
			case 'start':
			case 'finish':
				path = 'M' + (25 + x) + ' ' + (45 + y) + 'a 25 25 0 0 1 0 -50 l 150 0 a 25 25 0 0 1 0 50 z';
				shapeType = 'path';
				break;
				
			case 'branch':
				path = 'M 0 20 L 20 0 L 180 0 L 200 20 L 180 40 L 20 40 Z';
				path = path.replace(/([ML]) (\d+) (\d+)/g, function(part, t, px, py) {
					return t + ' ' + (x + (px|0)) + ' ' + (y + (py|0)) + ' ';
				});
				shapeType = 'path';
				break;
			
			
		}

		sprite = Ext.create('Ext.draw.Sprite', {
			type: shapeType,
			path: path,
			surface: surface,
			'stroke-width': 1,
			stroke: '#666', 
			width: 200,
			height: 40,
			fill: '#FFF',
			x: x,
			y: y
		});

		sprite.show(true);
		
	}
	
	




});


