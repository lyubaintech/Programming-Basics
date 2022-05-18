function depositCalc(input) {
  let depositSum = Number(input[0]);
  let period = Number(input[1]);
  let percent = Number(input[2]);
  let finalSum = depositSum + period * ((depositSum * percent / 100) / 12)

  console.log(finalSum);
}
// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
depositCalc(["200","3","5.7"]);
