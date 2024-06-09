function Random() {
  let r = Math.random() * 100;
  return <h2>Random number is {Math.round(r)}</h2>;
}

export default Random;
