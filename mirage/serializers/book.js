import JSONAPISerializer from './application';

 export default JSONAPISerializer.extend({
    links(author) {
        return {
          'posts': {
            related: `/authors/${author.id}`
          }
        };
      }
 });