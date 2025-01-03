import {defineType, defineField} from 'sanity'

export const ColorsType = defineType({
  name: 'colors',
  title: 'Colors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color Code eg: #000000',
      type: 'string',
    }),
  ],
})
