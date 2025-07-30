export default {
  name: 'product',
  title: 'Produto',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome do Produto',
      type: 'string',
    },
    {
      name: 'productImage',
      title: 'Imagem do Produto',
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