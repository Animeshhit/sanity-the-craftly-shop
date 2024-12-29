export const ProductType = {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule: {required: () => any}) => Rule.required(), // Can also use "blockContent" if rich text is needed
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'discount',
      title: 'Discount %',
      type: 'number',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      validation: (Rule: {required: () => any}) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'productImages',
      title: 'Product Images',
      type: 'array',
      validation: (Rule: {required: () => any}) => Rule.required(),
      of: [{type: 'image'}],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'categories'}], // Replace 'category' with the name of your category schema
        },
      ],
      validation: (Rule: {required: () => any}) => Rule.required(), // To make it a required field
    },
    {
      name: 'productUniqueId',
      title: 'Product Unique ID',
      validation: (Rule: {required: () => any}) => Rule.required(),
      type: 'string',
    },
    {
      name: 'isFeatured',
      title: 'Is Featured?',
      validation: (Rule: {required: () => any}) => Rule.required(),
      type: 'boolean',
    },
    {
      name: 'isBestSeller',
      title: 'Is Best Seller?',
      validation: (Rule: {required: () => any}) => Rule.required(),
      type: 'boolean',
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'reviewer',
              title: 'Reviewer',
              type: 'string',
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
            },
            {
              name: 'comment',
              title: 'Comment',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'isAvailable',
      title: 'Is Available?',
      type: 'boolean',
      require: true,
    },
    {
      name: 'sold',
      title: 'Sold',
      type: 'number',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    },
  ],
}
