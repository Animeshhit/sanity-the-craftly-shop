import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'legal',
  title: 'Legal',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'returnPolicy',
      title: 'Return Policy',
      type: 'text',
      description: 'Add details about the return policy. in READEME.md',
    }),
    defineField({
      name: 'shippingPolicy',
      title: 'Shipping Policy',
      type: 'text',
      description: 'Add details about the shipping policy.  in READEME.md',
    }),
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy & Policy',
      type: 'text',
      description: 'Add details about the privacy and policy.  in READEME.md',
    }),
    defineField({
      name: 'termsAndConditions',
      title: 'Terms and Conditions',
      type: 'text',
      description: 'Add details about the terms and conditions.  in READEME.md',
    }),
  ],
})
