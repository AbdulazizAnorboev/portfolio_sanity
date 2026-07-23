// schemas/activity.ts
import {defineField, defineType} from 'sanity'

export const activity = defineType({
  name: 'activity',
  title: 'Activity',
  type: 'document',
  fields: [
    defineField({
      name: 'kind',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Exhibition / Trade show', value: 'exhibition'},
          {title: 'Conference presentation', value: 'conference'},
        ],
        layout: 'radio',
      },
      initialValue: 'exhibition',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Event Name',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
        {name: 'uz', title: 'Uzbek', type: 'string'},
        {name: 'ru', title: 'Russian', type: 'string'},
      ],
    }),
    defineField({
      name: 'role',
      title: 'My Role',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
        {name: 'uz', title: 'Uzbek', type: 'string'},
        {name: 'ru', title: 'Russian', type: 'string'},
      ],
    }),
    defineField({
      name: 'organizer',
      title: 'Organizer / Host',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
        {name: 'uz', title: 'Uzbek', type: 'string'},
        {name: 'ru', title: 'Russian', type: 'string'},
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
        {name: 'uz', title: 'Uzbek', type: 'string'},
        {name: 'ru', title: 'Russian', type: 'string'},
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
        {name: 'uz', title: 'Uzbek', type: 'string'},
        {name: 'ru', title: 'Russian', type: 'string'},
      ],
    }),
    defineField({
      name: 'points',
      title: 'Details / Outcomes',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'array', of: [{type: 'string'}]},
        {name: 'kr', title: 'Korean', type: 'array', of: [{type: 'string'}]},
        {name: 'uz', title: 'Uzbek', type: 'array', of: [{type: 'string'}]},
        {name: 'ru', title: 'Russian', type: 'array', of: [{type: 'string'}]},
      ],
    }),
    defineField({
      name: 'link',
      title: 'Event Link (optional)',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'logo',
      title: 'Event / Organizer Logo (URL, optional)',
      type: 'url',
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
      subtitle: 'date.en',
    },
  },
})
