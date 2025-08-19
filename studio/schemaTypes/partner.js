export default {
  name: 'partner',
  title: 'Marca Parceira',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome da Marca',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logotipo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
}