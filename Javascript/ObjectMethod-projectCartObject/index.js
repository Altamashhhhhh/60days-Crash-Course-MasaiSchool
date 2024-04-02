let data = {
  name: ["Rice", "Dal", "Salt"],
  quantity: [2, 3, 1],
  price: [60, 50, 20],

  total: function () {
    let sum = 0;
    for (let i = 0; i < this.quantity.length; i++) {
      sum += this.quantity[i] * this.price[i];
    }
    return sum;
  },
};

console.log(data.total());
