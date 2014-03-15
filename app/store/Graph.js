Ext.define('MyApp.store.Graph', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.GraphNode',
	
	data: [{
		id: 1,
		type: 'start',
		text: 'Заключение договора',
		output: 2
	}, {
		id: 2,
		type: 'action',
		text: 'Секретарь принимает заказ',
		output: 3
	}, {
		id: 3,
		type: 'action',
		text: 'Директор получает заказ для ознакомления',
		output: 4
	}, {
		id: 4,
		type: 'branch',
		text: 'Директор одобряет заказ?',
		outputYes: 5,
		outputNo: 20
	}, {
		id: 5,
		type: 'action',
		text: 'Бухгалтер получает заказ для расчета стоимости',
		output: 6
	}, {
		id: 6,
		type: 'action',
		text: 'Директор получает расчет стоимости заказа',
		output: 7
	}, {
		id: 7,
		type: 'branch',
		text: 'Директор одобряет заказ?',
		outputYes: 8,
		outputNo: 20
	}, {
		id: 8,
		type: 'action',
		text: 'Секретарь согласовывает заказ с заказчиком',
		output: 9
	}, {
		id: 9,
		type: 'branch',
		text: 'Заказчик согласен на все условия?',
		outputYes: 10,
		outputNo: 20
	}, {
		id: 10,
		type: 'action',
		text: 'Подписание договора обеими сторонами',
		output: 20
	}, {
		id: 20,
		type: 'finish',
		text: 'Договор заключен'
	}]

});