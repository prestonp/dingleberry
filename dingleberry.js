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
