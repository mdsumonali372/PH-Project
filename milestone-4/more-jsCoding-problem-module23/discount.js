/*
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket number is more than, but less than 200. First 100 tickets will be 100/ticket rest tickets will be 90 taka per piece.
3. if you purchase more than 200 tickets
    first 100 -----> 100tk
    101-200 -------> 90tk
    200+ ----------> 70tk

*/

function ticketPrice(ticketQuantity) {
  const first100TicketRate = 100;
  const second100TicketRate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100TicketRate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100TicketRate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100TicketRate;
    let totalPrice = restTicketPrice + first100Price;
    return totalPrice;
  } else {
    const first100Price = 100 * first100TicketRate;
    const second100Price = 100 * second100TicketRate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalCost = restTicketPrice + first100Price + second100Price;
    return totalCost;
  }
}

let ticketInput = ticketPrice(201);
console.log(ticketInput);
