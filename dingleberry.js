export var debounce = (fn, interval) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn.apply.bind(fn, this, args), interval);
  };
};

export var pipeline = (...fns) => val => fns.reduce((accum, fn) => fn(accum), val);
export var compose = pipeline;

export var pluck = (list, prop) => list.map(obj => obj[prop]);

export var curry = fn => (...args) => {
  return fn.length === args.length ?
    fn.apply(fn, args) :
    function currier(...inner) {
      args = args.concat(inner);
      return args.length < fn.length ? currier : fn.apply(this, args);
    }
}
