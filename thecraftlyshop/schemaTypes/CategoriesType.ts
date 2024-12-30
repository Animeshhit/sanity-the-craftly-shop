export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the category',
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(3).max(50),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug for the category (used in URLs)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the category',
      validation: (Rule: { max: (arg0: number) => any; }) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'An optional image representing the category',
      options: {
        hotspot: true, // Enables the image hotspot feature
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Describe the image for accessibility',
        },
      ],
    },
  ],
};
