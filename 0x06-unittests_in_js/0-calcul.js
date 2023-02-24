const calculateNumber = (a, b) => {
  a_round = Math.round(a);
  b_round = Math.round(b);
  return (a_round + b_round);
}

module.exports = calculateNumber;