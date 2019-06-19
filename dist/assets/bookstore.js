'use strict';



;define("bookstore/aboutus/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("bookstore/aboutus/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3okwdVeb",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/aboutus/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/app", ["exports", "bookstore/resolver", "ember-load-initializers", "bookstore/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("bookstore/application/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    redirect() {
      this.transitionTo('books');
    }

  });

  _exports.default = _default;
});
;define("bookstore/application/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "R5KJDt5s",
    "block": "{\"symbols\":[],\"statements\":[[0,\"    \"],[7,\"nav\"],[11,\"class\",\"navbar navbar-expand-lg navbar-light bg-light\"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"tagName\",\"route\"],[\"button\",\"aboutus\"]],{\"statements\":[[0,\"            About Us\\n\"]],\"parameters\":[]},null],[4,\"link-to\",null,[[\"tagName\",\"route\"],[\"button\",\"cart\"]],{\"statements\":[[0,\"            cart\\n\"]],\"parameters\":[]},null],[0,\"            \"],[7,\"form\"],[11,\"class\",\"form-inline my-2 my-lg-0\"],[9],[0,\"\\n                \"],[7,\"input\"],[11,\"class\",\"form-control mr-sm-2\"],[11,\"placeholder\",\"Search\"],[11,\"aria-label\",\"Search\"],[11,\"type\",\"search\"],[9],[10],[0,\"\\n                \"],[7,\"button\"],[11,\"class\",\"btn btn-outline-success my-2 my-sm-0\"],[11,\"type\",\"submit\"],[9],[0,\"Search\"],[10],[0,\"\\n            \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"bs-page-header main-header\"],[9],[0,\"MY FIRST EMBER APP\"],[10],[0,\"\\n\"],[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/application/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/authors/author/author-details/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("bookstore/authors/author/author-details/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KyaPpmJ3",
    "block": "{\"symbols\":[],\"statements\":[[7,\"ul\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"Born In \"],[1,[25,[\"author\",\"countryOfBirth\"]],false],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"Born In \"],[1,[25,[\"author\",\"born\"]],false],[10],[0,\"\\n\"],[10],[0,\" \\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/authors/author/author-details/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/authors/author/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("bookstore/authors/author/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xBke8e8a",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[1,[25,[\"model\",\"name\"]],false],[10],[0,\"\\n\"],[1,[29,\"authors/author/author-details\",null,[[\"author\"],[[25,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/authors/author/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/authors/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6bLN9509",
    "block": "{\"symbols\":[\"author\"],\"statements\":[[7,\"h1\"],[11,\"class\",\"bs-page-header\"],[9],[0,\"Authors\"],[10],[0,\"\\n\"],[4,\"each\",[[25,[\"model\"]]],null,{\"statements\":[[0,\"\\t\\t\"],[7,\"ul\"],[9],[0,\"\\n\\t\\t\\t\"],[7,\"li\"],[9],[4,\"link-to\",null,[[\"route\",\"model\"],[\"authors.author\",[24,1,[]]]],{\"statements\":[[1,[24,1,[\"name\"]],false]],\"parameters\":[]},null],[10],[0,\"\\n\\t\\t\"],[10],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/authors/index/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/authors/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('author');
    }

  });

  _exports.default = _default;
});
;define("bookstore/authors/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ygV6P6t4",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/authors/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/books/book/book-details/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    priceWithTax: Ember.computed("book.price", function () {
      return this.get("book.price") + 2;
    }),
    actions: {
      updatePrice(price) {
        this.set('book.price', this.get('book.price') + 2);
      }

    }
  });

  _exports.default = _default;
});
;define("bookstore/books/book/book-details/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "G2q+FSH9",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"article\"],[9],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n                \"],[7,\"li\"],[9],[0,\"Title:\"],[1,[25,[\"book\",\"title\"]],false],[10],[0,\"\\n                \"],[7,\"li\"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"authors.author\",[25,[\"book\",\"author\"]]]],{\"statements\":[[0,\"                                Author:\"],[1,[25,[\"book\",\"author\",\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n                \"],[7,\"li\"],[9],[0,\"Type:\"],[1,[25,[\"book\",\"type\"]],false],[10],[0,\"\\n                \"],[7,\"li\"],[9],[0,\"Price:\"],[1,[23,\"priceWithTax\"],false],[10],[0,\"\\n                \"],[7,\"li\"],[9],[0,\"Number in Stock:\"],[1,[25,[\"book\",\"numberinstock\"]],false],[10],[0,\"\\n        \"],[10],[0,\"        \\n\"],[10],[0,\"\\n\"],[7,\"button\"],[9],[0,\"Update price\"],[3,\"action\",[[24,0,[]],\"updatePrice\"]],[10],[0,\"       \\n\"],[15,1]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/books/book/book-details/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/books/book/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("bookstore/books/book/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9seiK+St",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"h2\"],[9],[1,[25,[\"model\",\"title\"]],false],[10],[0,\"\\n\"],[1,[29,\"books/book/book-details\",null,[[\"book\"],[[25,[\"model\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/books/book/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/books/index/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({// afterModel(model) {
    //  return model.get('author');
    // }
  });

  _exports.default = _default;
});
;define("bookstore/books/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BbZ0QFH4",
    "block": "{\"symbols\":[\"book\"],\"statements\":[[0,\"    \"],[7,\"h1\"],[11,\"class\",\"bs-page-header\"],[9],[0,\"\\n            BOOKS\\n    \"],[10],[0,\" \\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"ul\"],[11,\"class\",\"list-group\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[25,[\"model\"]]],null,{\"statements\":[[0,\"                \"],[7,\"li\"],[11,\"class\",\"list-group-item\"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"books.book\",[24,1,[]]]],{\"statements\":[[0,\"                        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                            \"],[7,\"div\"],[9],[0,\"\\n                                \"],[7,\"img\"],[12,\"src\",[24,1,[\"image_url\"]]],[11,\"class\",\"rounded\"],[11,\"alt\",\"Responsive image\"],[9],[10],[0,\"\\n                            \"],[10],[0,\" \\n                            \"],[7,\"div\"],[9],[10],[0,\"\\n                            \"],[7,\"div\"],[9],[0,\"\\n                                \"],[1,[24,1,[\"title\"]],false],[0,\"\\n                            \"],[10],[0,\" \\n                        \"],[10],[0,\"          \\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\" \\n\"]],\"parameters\":[1]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/books/index/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/books/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('book');
    }

  });

  _exports.default = _default;
});
;define("bookstore/books/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lT2z4n/0",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[23,\"outlet\"],false],[0,\"  \"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/books/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/cart/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("bookstore/cart/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KmvXeUBb",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/cart/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("bookstore/helpers/app-version", ["exports", "bookstore/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("bookstore/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("bookstore/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("bookstore/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "bookstore/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("bookstore/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("bookstore/initializers/ember-cli-mirage", ["exports", "bookstore/config/environment", "bookstore/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("bookstore/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("bookstore/initializers/export-application-global", ["exports", "bookstore/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("bookstore/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("bookstore/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("bookstore/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
    */
    this.get('/books');
    this.get('/books/:id');
    this.get('/authors');
    this.get('/authors/:id');
    this.get('/cart'); // this.get('/books/:id/author', function (schema, request) {
    //   const bookId = request.params.id;
    //   return this.serialize(schema.authors.findBy({bookId: bookId}));
    // });
  }
});
;define("bookstore/mirage/models/author", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({});

  _exports.default = _default;
});
;define("bookstore/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(server) {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */
    const author1 = server.create('author', {
      name: 'DR.MC',
      country_of_birth: 'America',
      born: '1968'
    });
    const author2 = server.create('author', {
      name: 'Enid Blyton',
      country_of_birth: 'England',
      born: '1968'
    });
    const author3 = server.create('author', {
      name: 'J.K Rowling',
      country_of_birth: 'America',
      born: '1965'
    });
    const book1 = server.create('book', {
      image_url: "/assets/crabbythecrab.jpeg",
      title: 'Crabby The Crab',
      author: author1,
      type: 'paperback',
      price: '20',
      numberinstock: '10'
    });
    const book2 = server.create('book', {
      image_url: "/assets/lili.jpeg",
      title: 'Lily The Little Mermaid',
      author: author2,
      type: 'paperback',
      price: '2',
      numberinstock: '10'
    });
    const book3 = server.create('book', {
      image_url: "/assets/somethingtogive.jpeg",
      title: 'EveryBody Has Something To Give',
      author: author3,
      type: 'paperback',
      price: '20',
      numberinstock: '10'
    });
    author1.book = book1;
    author2.book = book2;
    author3.book = book3;
    book1.author = author1;
    book2.author = author2; // author1.save();
  }
});
;define("bookstore/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.JSONAPISerializer.extend({});

  _exports.default = _default;
});
;define("bookstore/mirage/serializers/author", ["exports", "bookstore/mirage/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _application.default.extend({
    embed: true,
    include: ['book']
  });

  _exports.default = _default;
});
;define("bookstore/mirage/serializers/book", ["exports", "bookstore/mirage/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _application.default.extend({
    links(author) {
      return {
        'posts': {
          related: "/authors/".concat(author.id)
        }
      };
    }

  });

  _exports.default = _default;
});
;define("bookstore/models/author", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    name: _emberData.default.attr("string"),
    countryOfBirth: _emberData.default.attr("string"),
    born: _emberData.default.attr("string"),
    books: _emberData.default.hasMany("book")
  });

  _exports.default = _default;
});
;define("bookstore/models/book", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    image_url: _emberData.default.attr('string'),
    title: _emberData.default.attr('string'),
    type: _emberData.default.attr('string'),
    price: _emberData.default.attr('number'),
    numberinstock: _emberData.default.attr('number'),
    author: _emberData.default.belongsTo()
  });

  _exports.default = _default;
});
;define("bookstore/models/cart", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({});

  _exports.default = _default;
});
;define("bookstore/models/order", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({});

  _exports.default = _default;
});
;define("bookstore/models/publisher", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({});

  _exports.default = _default;
});
;define("bookstore/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("bookstore/router", ["exports", "bookstore/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('books', function () {
      this.route('index', {
        path: '/'
      });
      this.route('book', {
        path: "/:book_id"
      });
      this.route('cart', {
        path: "/cart"
      });
      this.route('aboutus', {
        path: "/aboutus"
      });
    });
    this.route('authors', function () {
      //this.route('index', {path:'/'});
      this.route('author', {
        path: "/:author_id"
      });
    });
    this.route('cart');
    this.route('aboutus');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("bookstore/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("bookstore/shopping-cart/cart-contents/cart-content", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    cart: Ember.inject.service('shopping-cart'),
    actions: {
      remove(item) {
        this.cart.remove(item);
      }

    }
  });

  _exports.default = _default;
});
;define("bookstore/shopping-cart/service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    items: null,

    init() {
      this._super(...arguments);

      this.set('items', Ember.A([]));
    },

    add(item) {
      this.items.pushObject(item);
    },

    remove(item) {
      this.items.removeObject(item);
    },

    empty() {
      this.items.clear();
    }

  });

  _exports.default = _default;
});
;define("bookstore/tests/mirage/mirage.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | mirage');
  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/models/author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/author.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/serializers/author.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/serializers/author.js should pass ESLint\n\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('mirage/serializers/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/book.js should pass ESLint\n\n');
  });
});
;

;define('bookstore/config/environment', [], function() {
  var prefix = 'bookstore';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("bookstore/app")["default"].create({"name":"bookstore","version":"0.0.0+a59d986c"});
          }
        
//# sourceMappingURL=bookstore.map
