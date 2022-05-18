function basketballEquipment(input) {
  let yearTax = Number(input[0]);
  let sneakers = yearTax - yearTax * 0.4;
  let outfit = sneakers - sneakers * 0.2;
  let ball = (1 / 4) * outfit;
  let accesories = (1 / 5) * ball;

  let result = yearTax + sneakers + outfit + ball + accesories;

  console.log(result);
}
basketballEquipment(["550"]);
