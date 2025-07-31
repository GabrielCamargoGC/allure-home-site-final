export default {
    name: 'aboutPage',
    title: 'Página Sobre Nós',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título Principal',
        type: 'string',
      },
      {
        name: 'heroImage',
        title: 'Imagem de Topo (Hero)',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'missionTitle',
        title: 'Título da Secção Missão',
        type: 'string',
      },
      {
        name: 'missionText',
        title: 'Texto da Missão',
        type: 'text',
      },
      {
        name: 'missionImage',
        title: 'Imagem da Missão',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'teamTitle',
        title: 'Título da Secção Equipa',
        type: 'string',
      },
      {
        name: 'teamMembers',
        title: 'Membros da Equipa',
        type: 'array',
        of: [{ 
          type: 'object',
          fields: [
            { name: 'name', title: 'Nome', type: 'string' },
            { name: 'role', title: 'Cargo', type: 'string' },
            { name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }
          ]
        }]
      }
    ]
  }