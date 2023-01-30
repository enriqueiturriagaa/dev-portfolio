import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),

        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),

        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
        }),
        defineField({
            name: 'time',
            title: 'Time',
            type: 'text',
        }),
        defineField({
            name: 'tech',
            title: 'Tech',
            type: 'text',
        })

    ],
})
