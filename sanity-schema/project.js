export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullCategory',
      title: 'Full Category Name',
      type: 'string',
      options: {
        list: [
          { title: 'RESIDENTIAL PROJECTS', value: 'RESIDENTIAL PROJECTS' },
          { title: 'COMMERCIAL COMPLEXES', value: 'COMMERCIAL COMPLEXES' },
          { title: 'CORPORATE OFFICES', value: 'CORPORATE OFFICES' },
          { title: 'HOTELS & HOSPITALITY', value: 'HOTELS & HOSPITALITY' },
          { title: 'HOSPITALS & INSTITUTIONS', value: 'HOSPITALS & INSTITUTIONS' },
          { title: 'RETAIL & SHOPPING CENTERS', value: 'RETAIL & SHOPPING CENTERS' }
        ]
      }
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Completion Year',
      type: 'string',
    },

    {
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'Completed' },
          { title: 'On-Going', value: 'On-Going' }
        ],
        layout: 'radio'
      },
      initialValue: 'Completed'
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'The first image uploaded will be used as the main cover image.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'images.0',
    },
  },
};
