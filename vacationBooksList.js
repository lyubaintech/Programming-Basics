function vacationBooksList(input) {
  let pages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);
  let totalHours = pages / pagesPerHour;
  let result = totalHours / days;

  console.log(result);
}

vacationBooksList(["432", "15", "4"]);
