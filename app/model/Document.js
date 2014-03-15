Ext.define('MyApp.model.Document', {
    extend: 'Ext.data.Model',

    fields: [
      'modificationDate',
      'creationDate',
      'owner',
      'currentEditor',
      'type', // link, inline
      'text',
      'attachments',
      'links',
      'messages',
      'state'
    ]    
});