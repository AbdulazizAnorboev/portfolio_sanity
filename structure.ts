// deskStructure.ts
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder, context: any) =>
  S.list()
    .title('Content')
    .items([
      // Include only the document types you want to display
      S.documentTypeListItem('user').title('User'),
      orderableDocumentListDeskItem({
        type: 'technology',
        title: 'Technologies',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'project',
        title: 'Projects',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'publication',
        title: 'Publications',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'education',
        title: 'Education',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'experience',
        title: 'Experience',
        S,
        context,
      }),
      // Add other visible document types here
    ])
