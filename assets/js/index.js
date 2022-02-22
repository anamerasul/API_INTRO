console.log("API");

// javascript object notation
//JSON
const user={id:11,name:"goriber amir",job:'actor'}
// console.log(user)
const stringified=JSON.stringify(user);
// console.log(stringified)

const shop={
        name:'alia store',

        address:'ranbir road',
        prodducts:['laptop','mobile','pepsi'],
        owner:{
                name:'alia bhat',
                profession:'actress'
        },
        isExpensive:false
}

// console.log(shop)

const shopStringified=JSON.stringify(shop);

console.log(shopStringified)


const conveted =JSON.parse(shopStringified);

console.log(conveted)




