const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const remark = require('remark')
const remarkHTML = require('remark-html')

exports.createPages = ({ graphql, actions: { createPage } }) => {

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx');
    // const tagPage = path.resolve('src/pages/tags.jsx');
    const tagPosts = path.resolve('src/templates/tag.jsx');

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              filter: {fileAbsolutePath: {regex: "/posts/"}},
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                    links
                    cover {
                      relativePath
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        // const postsByTag = {};
        // // create tags page
        // posts.forEach(({ node }) => {
        //   if (node.frontmatter.tags) {
        //     node.frontmatter.tags.forEach(tag => {
        //       if (!postsByTag[tag]) {
        //         postsByTag[tag] = [];
        //       }

        //       postsByTag[tag].push(node);
        //     });
        //   }
        // });

        // const tags = Object.keys(postsByTag);

        // createPage({
        //   path: '/tags',
        //   component: tagPage,
        //   context: {
        //     tags: tags.sort(),
        //   },
        // });

        //create tags
        // tags.forEach(tagName => {
        //   const posts = postsByTag[tagName];

        //   createPage({
        //     path: `/tags/${tagName}`,
        //     component: tagPosts,
        //     context: {
        //       posts,
        //       tagName,
        //     },
        //   });
        // });

        //create posts
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          const sideBarLinks = node.frontmatter.links;
          const prev = index === 0 ? posts[posts.length-1].node : posts[index - 1].node;
          const next = index === posts.length - 1 ? posts[0].node : posts[index + 1].node;
          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path,
              sideBarLinks,
              prev,
              next,
            },
          });
        });
      })
    );
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};


exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  fmImagesToRelative(node);

  if(node.frontmatter){
    const textSections = node.frontmatter.textSections;

    if (textSections) {

      const bodyText = textSections.map(event =>
          remark()
          .use(remarkHTML)
          .processSync(event.text)
          .toString()
        )
      const bodyTitle = textSections.map(event => 
          remark()
          .use(remarkHTML)
          .processSync(event.textTitle)
          .toString()
        )

      createNodeField({
        name: `bodyText`,
        node,
        value: bodyText
      });

      createNodeField({
        name: `bodyTitle`,
        node,
        value: bodyTitle
      });
    }
  }
};