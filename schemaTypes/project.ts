import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    // orderRankField({type: 'project'}),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({name: 'en', title: 'English', type: 'string'}),
        defineField({name: 'kr', title: 'Korean', type: 'string'}),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({name: 'en', title: 'English', type: 'text'}),
        defineField({name: 'kr', title: 'Korean', type: 'text'}),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image (Upload or URL)',
      type: 'object',
      fields: [
        defineField({
          name: 'upload',
          title: 'Upload Image',
          type: 'image',
          options: {
            accept: 'image/*',
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
      description: 'Upload an image or provide an external image URL.',
    }),
    defineField({
      name: 'github',
      title: 'GitHub Link',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['https']}),
    }),
    defineField({
      name: 'preview',
      title: 'Live Preview Link',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['https']}),
    }),
    {
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true, // hide it in the form
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
