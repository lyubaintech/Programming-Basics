function repainting(input) {
  let naylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let workHours = Number(input[3]);

  let naylonPrice = (naylon + 2) * 1.5;
  let paintPrice = (paint + paint * 0.1) * 14.5;
  let thinnerPrice = thinner * 5;

  let materialsSum = naylonPrice + paintPrice + thinnerPrice + 0.4;
  let workersPayment = materialsSum * 0.3 * workHours;
  let finalSum = materialsSum + workersPayment;

  console.log(finalSum);
}
repainting(["5", "10", "10", "1"]);
