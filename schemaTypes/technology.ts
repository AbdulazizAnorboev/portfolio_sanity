import {defineType, defineField} from 'sanity'

export const technology = defineType({
  name: 'technology',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Technology Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Official Site or Docs',
      type: 'url',
    }),
    defineField({
      name: 'icon',
      title: 'Icon (Upload or URL)',
      type: 'object',
      fields: [
        defineField({
          name: 'upload',
          title: 'Upload Image',
          type: 'image',
          options: {
            accept: 'image/svg+xml,image/png',
          },
        }),
        defineField({
          name: 'url',
          title: 'External Image URL',
          type: 'url',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
      description: 'You can either upload an image or provide an external image URL.',
    }),
    {
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true, // hide it in the form
    },
  ],
})
