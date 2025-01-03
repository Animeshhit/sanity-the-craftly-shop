import {defineType, defineField} from 'sanity'

export const SizeTypes = defineType({
  name: 'sizes',
  title: 'Sizes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
  ],
})
