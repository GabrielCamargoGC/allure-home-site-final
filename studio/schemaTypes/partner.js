export default {
    name: 'partner',
    title: 'Arquitetos Parceiros', 
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Nome do Arquiteto', 
        type: 'string',
      },
      {
        name: 'photo', 
        title: 'Foto', 
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ]
  }