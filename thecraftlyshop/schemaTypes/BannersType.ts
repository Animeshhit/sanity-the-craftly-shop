import {defineType, defineField, UrlInput} from 'sanity'

export const BannersType = defineType({
  name: 'banners',
  title: 'Banners',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'bannerLink',
      title: 'Banner Link',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      validation: (Rule: {required: () => any}) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
