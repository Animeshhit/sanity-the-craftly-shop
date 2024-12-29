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
  ],
})
