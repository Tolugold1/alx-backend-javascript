const calculateNumber = (type, a, b) => {
  a_round = Math.round(a);
  b_round = Math.round(b);
  if (type === "SUM") {
    return a_round + b_round;
  } else if (type === "SUBTRACT") {
    return a_round - b_round;
  } else if (type === "DIVIDE") {
    if (b_round == 0) {
      return "Error";
    } else {
      return a_round / b_round;
    }
  }
};

module.exports = calculateNumber;
