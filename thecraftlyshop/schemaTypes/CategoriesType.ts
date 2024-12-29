import {defineType, defineField} from 'sanity'

export const CategoriesType = defineType({
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
