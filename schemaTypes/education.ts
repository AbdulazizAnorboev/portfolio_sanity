// schemas/education.ts
import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
      ],
    }),

    defineField({
      name: 'school_name',
      title: 'School Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'school_link',
      title: 'School Website (optional)',
      type: 'url',
    }),
    defineField({
      name: 'school_logo',
      title: 'School Logo URL',
      type: 'url',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
      ],
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
      title: 'degree.en',
    },
  },
})
