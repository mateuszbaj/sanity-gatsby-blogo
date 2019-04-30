export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cc7f64ed2ad0a6f428e727c',
                  name: 'Content Studio',
                  siteId: 'ac11ffb5-e80c-41d8-bbbc-35be8e5fd05c'
                },
                {
                  buildHookId: '5cc7f64e74876bcf727334c3',
                  name: 'Blog Website',
                  siteId: 'd6b51cd0-f485-455c-95a6-52d447954355'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/sanity-gatsby-blogo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;sanity-gatsby-blogo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
