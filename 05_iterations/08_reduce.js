const myNums = [1, 2, 3]

// const myTotal= myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "perfume",
        price: 399
    },
    {
        itemName: "shoes",
        price: 799
    },
    {
        itemName: "adapter",
        price: 999
    },
]

const totalCartVal = shoppingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(totalCartVal);