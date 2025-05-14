// schemas/experience.ts
import {defineType, defineField} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
      ],
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
      ],
    }),

    defineField({
      name: 'company_name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company_link',
      title: 'Company Website (optional)',
      type: 'url',
    }),
    defineField({
      name: 'company_logo',
      title: 'Company Logo (URL)',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
      ],
    }),
    defineField({
      name: 'points',
      title: 'Responsibilities / Achievements (English)',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'array', of: [{type: 'string'}]},
        {name: 'kr', title: 'Korean', type: 'array', of: [{type: 'string'}]},
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
      title: 'title.en',
      subtitle: 'company_name',
    },
  },
})
