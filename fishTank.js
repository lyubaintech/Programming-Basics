function fishTank(input) {
  let lenght = Number(input[0]);
  let widht = Number(input[1]);
  let height = Number(input[2]);
  let percent = Number(input[3]);

  let volumeSqM = lenght * widht * height;
  let volumeLiters = volumeSqM / 1000;

  let liters = volumeLiters * (1 - percent / 100);

  console.log(liters);
}
fishTank(["105", "77", "89", "18.5"]);
