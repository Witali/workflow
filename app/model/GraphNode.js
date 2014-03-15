Ext.define('MyApp.model.GraphNode', {
    extend: 'Ext.data.Model',

    fields: [
      'id',
      'type',
      'text',
      'code',
      'input',
      'output',
      'outputYes',
      'outputNo',
      'directOutput' // Yes|No
    ]    
});