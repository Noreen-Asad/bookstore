import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', function() {
    this.route('index', {path: '/'});
    this.route('book', {path: "/:book_id"});
  })
  this.route('authors')
});

export default Router;
