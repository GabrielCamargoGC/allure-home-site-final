export default {
    name: 'project',
    title: 'Projeto',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'string',
      },
      {
        name: 'mainImage',
        title: 'Imagem Principal',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'categories',
        title: 'Categorias',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
    ]
  }