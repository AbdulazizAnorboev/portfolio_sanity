import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Full Name',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
      ],
    }),
    defineField({
      name: 'nickname',
      title: 'Nickname',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'text'},
        {name: 'kr', title: 'Korean', type: 'text'},
      ],
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'cv',
      title: 'CV (File or Link)',
      type: 'object',
      fields: [
        {
          name: 'file',
          title: 'Upload File (PDF)',
          type: 'file',
          options: {
            accept: '.pdf',
          },
        },
        {
          name: 'url',
          title: 'External Link (if hosted elsewhere)',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'kr', title: 'Korean', type: 'string'},
      ],
    }),
    defineField({
      name: 'telegramId',
      title: 'Telegram User ID',
      type: 'string',
    }),
    defineField({
      name: 'telegramToken',
      title: 'Telegram Bot Token',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
            {
              name: 'icon',
              title: 'Icon Upload (SVG or PNG)',
              type: 'file',
              options: {
                accept: '.svg,.png',
              },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'fullname.en',
    },
  },
})
