'use strict';

define("bookstore/tests/integration/components/book-details-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | book-details', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VH1p27hB",
        "block": "{\"symbols\":[],\"statements\":[[5,\"book-details\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "SkXhPwuX",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"book-details\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("bookstore/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('aboutus/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'aboutus/route.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass ESLint\n\n');
  });
  QUnit.test('authors/author/author-details/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authors/author/author-details/component.js should pass ESLint\n\n');
  });
  QUnit.test('authors/author/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authors/author/route.js should pass ESLint\n\n');
  });
  QUnit.test('authors/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authors/route.js should pass ESLint\n\n');
  });
  QUnit.test('books/book/book-details/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'books/book/book-details/component.js should pass ESLint\n\n11:21 - \'price\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('books/book/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'books/book/route.js should pass ESLint\n\n');
  });
  QUnit.test('books/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'books/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('books/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'books/route.js should pass ESLint\n\n');
  });
  QUnit.test('cart/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'cart/route.js should pass ESLint\n\n');
  });
  QUnit.test('models/author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/author.js should pass ESLint\n\n');
  });
  QUnit.test('models/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass ESLint\n\n');
  });
  QUnit.test('models/cart.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/cart.js should pass ESLint\n\n');
  });
  QUnit.test('models/order.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/order.js should pass ESLint\n\n');
  });
  QUnit.test('models/publisher.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/publisher.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('shopping-cart/cart-contents/cart-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shopping-cart/cart-contents/cart-content.js should pass ESLint\n\n');
  });
  QUnit.test('shopping-cart/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shopping-cart/service.js should pass ESLint\n\n');
  });
});
define("bookstore/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('bookstore/aboutus/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bookstore/aboutus/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bookstore/application/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bookstore/application/template.hbs should pass TemplateLint.\n\nbookstore/application/template.hbs\n  1:4  error  Incorrect indentation for `<nav>` beginning at L1:C4. Expected `<nav>` to be at an indentation of 0, but was found at 4.  block-indentation\n  2:12  error  Incorrect indentation for `{{#link-to}}` beginning at L2:C12. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 12.  block-indentation\n  5:12  error  Incorrect indentation for `{{#link-to}}` beginning at L5:C12. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 12.  block-indentation\n  8:12  error  Incorrect indentation for `<form>` beginning at L8:C12. Expected `<form>` to be at an indentation of 6 but was found at 12.  block-indentation\n  3:0  error  Incorrect indentation for `            About Us\n` beginning at L3:C0. Expected `            About Us\n` to be at an indentation of 14 but was found at 12.  block-indentation\n  6:0  error  Incorrect indentation for `            cart\n` beginning at L6:C0. Expected `            cart\n` to be at an indentation of 14 but was found at 12.  block-indentation\n  9:16  error  Incorrect indentation for `<input>` beginning at L9:C16. Expected `<input>` to be at an indentation of 14 but was found at 16.  block-indentation\n  10:16  error  Incorrect indentation for `<button>` beginning at L10:C16. Expected `<button>` to be at an indentation of 14 but was found at 16.  block-indentation\n');
  });
  QUnit.test('bookstore/authors/author/author-details/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bookstore/authors/author/author-details/template.hbs should pass TemplateLint.\n\nbookstore/authors/author/author-details/template.hbs\n  2:8  error  Incorrect indentation for `<li>` beginning at L2:C8. Expected `<li>` to be at an indentation of 2 but was found at 8.  block-indentation\n  3:8  error  Incorrect indentation for `<li>` beginning at L3:C8. Expected `<li>` to be at an indentation of 2 but was found at 8.  block-indentation\n');
  });
  QUnit.test('bookstore/authors/author/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bookstore/authors/author/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bookstore/authors/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bookstore/authors/index/template.hbs should pass TemplateLint.\n\nbookstore/authors/index/template.hbs\n  4:3  error  Incorrect indentation for `<li>` beginning at L4:C3. Expected `<li>` to be at an indentation of 4 but was found at 3.  block-indentation\n');
  });
  QUnit.test('bookstore/authors/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bookstore/authors/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bookstore/books/book/book-details/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bookstore/books/book/book-details/template.hbs should pass TemplateLint.\n\nbookstore/books/book/book-details/template.hbs\n  2:8  error  Incorrect indentation for `<ul>` beginning at L2:C8. Expected `<ul>` to be at an indentation of 2 but was found at 8.  block-indentation\n  3:16  error  Incorrect indentation for `<li>` beginning at L3:C16. Expected `<li>` to be at an indentation of 10 but was found at 16.  block-indentation\n  4:16  error  Incorrect indentation for `<li>` beginning at L4:C16. Expected `<li>` to be at an indentation of 10 but was found at 16.  block-indentation\n  9:16  error  Incorrect indentation for `<li>` beginning at L9:C16. Expected `<li>` to be at an indentation of 10 but was found at 16.  block-indentation\n  10:16  error  Incorrect indentation for `<li>` beginning at L10:C16. Expected `<li>` to be at an indentation of 10 but was found at 16.  block-indentation\n  11:16  error  Incorrect indentation for `<li>` beginning at L11:C16. Expected `<li>` to be at an indentation of 10 but was found at 16.  block-indentation\n  5:24  error  Incorrect indentation for `{{#link-to}}` beginning at L5:C24. Expected `{{#link-to}}` to be at an indentation of 18 but was found at 24.  block-indentation\n  6:0  error  Incorrect indentation for `                                Author:` beginning at L6:C0. Expected `                                Author:` to be at an indentation of 26 but was found at 32.  block-indentation\n  14:17  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('bookstore/books/book/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bookstore/books/book/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bookstore/books/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bookstore/books/index/template.hbs should pass TemplateLint.\n\nbookstore/books/index/template.hbs\n  1:4  error  Incorrect indentation for `<h1>` beginning at L1:C4. Expected `<h1>` to be at an indentation of 0, but was found at 4.  block-indentation\n  1:31  error  Incorrect indentation for `\n            BOOKS\n    ` beginning at L1:C31. Expected `\n            BOOKS\n    ` to be at an indentation of 6 but was found at 12.  block-indentation\n  5:8  error  Incorrect indentation for `<ul>` beginning at L5:C8. Expected `<ul>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:12  error  Incorrect indentation for `{{#each}}` beginning at L7:C12. Expected `{{#each}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  8:16  error  Incorrect indentation for `<li>` beginning at L8:C16. Expected `<li>` to be at an indentation of 14 but was found at 16.  block-indentation\n  9:20  error  Incorrect indentation for `{{#link-to}}` beginning at L9:C20. Expected `{{#link-to}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  10:24  error  Incorrect indentation for `<div>` beginning at L10:C24. Expected `<div>` to be at an indentation of 22 but was found at 24.  block-indentation\n  11:28  error  Incorrect indentation for `<div>` beginning at L11:C28. Expected `<div>` to be at an indentation of 26 but was found at 28.  block-indentation\n  14:28  error  Incorrect indentation for `<div>` beginning at L14:C28. Expected `<div>` to be at an indentation of 26 but was found at 28.  block-indentation\n  15:28  error  Incorrect indentation for `<div>` beginning at L15:C28. Expected `<div>` to be at an indentation of 26 but was found at 28.  block-indentation\n  12:32  error  Incorrect indentation for `<img>` beginning at L12:C32. Expected `<img>` to be at an indentation of 30 but was found at 32.  block-indentation\n  16:32  error  Incorrect indentation for `{{book.title}}` beginning at L16:C32. Expected `{{book.title}}` to be at an indentation of 30 but was found at 32.  block-indentation\n');
  });
  QUnit.test('bookstore/books/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bookstore/books/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('bookstore/cart/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bookstore/cart/template.hbs should pass TemplateLint.\n\n');
  });
});
define("bookstore/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/book-details-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-details-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/aboutus/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/aboutus/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/application/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/authors/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/authors/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/books/book/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/books/book/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/books/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/books/index/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/books/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/books/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/cart/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/cart/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/author-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/book-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/cart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/cart-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/order-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/order-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/publisher-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/publisher-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/author-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/shopping-cart/service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/shopping-cart/service-test.js should pass ESLint\n\n');
  });
});
define("bookstore/tests/test-helper", ["bookstore/app", "bookstore/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("bookstore/tests/unit/aboutus/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | aboutus', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:aboutus');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/application/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/authors/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | authors', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:authors');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/books/book/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | books/book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:books/book');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/books/index/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | books/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:books/index');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/books/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:books');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/cart/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:cart');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/models/author-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('author', {});
      assert.ok(model);
    });
  });
});
define("bookstore/tests/unit/models/book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('book', {});
      assert.ok(model);
    });
  });
});
define("bookstore/tests/unit/models/cart-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('cart', {});
      assert.ok(model);
    });
  });
});
define("bookstore/tests/unit/models/order-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | order', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('order', {});
      assert.ok(model);
    });
  });
});
define("bookstore/tests/unit/models/publisher-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | publisher', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('publisher', {});
      assert.ok(model);
    });
  });
});
define("bookstore/tests/unit/routes/author-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:author');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/routes/books-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:books');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/shopping-cart/service-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | shopping-cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:shopping-cart');
      assert.ok(service);
    });
  });
});
define('bookstore/config/environment', [], function() {
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

require('bookstore/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
