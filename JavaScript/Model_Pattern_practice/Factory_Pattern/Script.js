function createProduct(name, price) {
  let stock = 10;
  return {
    name,
    price,
    buy(qty) {
      if (qty > stock) {
        console.log("you dont have much quantity");
      } else {
        stock -= qty;
        console.log(`booked you have ${stock} stock left`);
      }
    },
    refill(qty) {
      stock += qty;
      console.log(`refilled now you have ${stock}`);
    },
    chekeStock() {
      console.log(`you have ${stock} ${name} in stock`);
    },
  };
}
let iphone = createProduct("iphone", 70000);
iphone.buy(11);
iphone.refill(150);
iphone.chekeStock();

let kitkat = createProduct("kitkat", 3000);
kitkat.chekeStock();
