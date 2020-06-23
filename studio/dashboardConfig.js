export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ef1a5fed279774c770ff1d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-t61w558y',
                  apiId: '0122becd-8f6e-49b0-b8ce-907904b08956'
                },
                {
                  buildHookId: '5ef1a5ff924194a7116fea15',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-zq2iqm2r',
                  apiId: 'e049c022-0249-44ae-b137-fe815f787ecb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/christo26/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-zq2iqm2r.netlify.app', category: 'apps'}
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
