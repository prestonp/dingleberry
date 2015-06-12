var _ = require('../');
var assert = require('assert');

describe('dingleberry', function() {
  describe('pipeline', function() {
    it('should compose functions', function() {
      var add1 = function(val) { return val + 1; };
      var mult2 = function(val) { return val * 2; };
      var add1mult2 = _.pipeline(add1, mult2);
      assert(add1mult2(7) === 16);
    });
  });

  describe('debounce', function() {
    var obj = { val: 0 };
    var inc = function(obj) { obj.val += 1; };
    var debounced = _.debounce(inc, 50);

    beforeEach(function() {
      obj.val = 0;
    });

    it('should debounce multiple calls', function(done) {
      debounced(obj);
      debounced(obj);
      setTimeout(function() {
        debounced(obj);
        setTimeout(function() {
          assert(obj.val === 2);
          done();
        }, 100);
      }, 100);
    });

    it('should call once', function(done) {
      debounced(obj);
      debounced(obj);
      debounced(obj);
      assert(obj.val === 0);
      setTimeout(function() {
        assert(obj.val === 1);
        done();
      }, 100);
    });
  });

  describe('pluck', function() {
    it('should get prop', function() {
      var list = [
        { name: 'Preston', id: 2 },
        { name: 'John', id: 42 },
        { name: 'Paul', id: 21 }
      ];
      assert.deepEqual(_.pluck(list, 'name'), ['Preston', 'John', 'Paul']);
      assert.deepEqual(_.pluck(list, 'id'), [2, 42, 21 ]);
    });
  });
});
