export function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

export function integerArray(n) {
  const arr = new Array(n);

  for (let i = 0; i < n; ++i) {
    arr[i] = i;
  }

  return arr;
}
