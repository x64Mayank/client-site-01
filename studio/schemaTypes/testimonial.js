export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Company/Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The name of the company or client giving the testimonial (e.g., Candor TechSpace).',
    },
    {
      name: 'role',
      title: 'Client Role/Team',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The department or role of the client (e.g., Development Team, Operations Team).',
    },
    {
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
      description: 'The actual quote or testimonial text. Maximum 500 characters to keep the website layout neat and consistent.',
    },
    {
      name: 'logo',
      title: 'Company Logo/Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The logo or icon associated with the company or client.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'role',
      media: 'logo',
    },
  },
};
