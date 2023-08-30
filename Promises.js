console.log('person1: shows tickets');
console.log('person2: shows tickets');

const preMovie = async () => 'preMovie';

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
});

const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

const addButter = new Promise((resolve,reject) => resolve(`butter`));

const getColdDrink = new Promise((resolve,rejct) => resolve(`colddrink`));

let ticket = await promiseWifeBringingTicks;

console.log(`wife: I have the ${ticket}`);
console.log('husband: we should go in');
console.log('wife: No, I am hungry');

let popcorn = await getPopcorn;
console.log(`husband: I got some ${popcorn}`);
console.log('husband: we should go in');
console.log('wife: I need butter on my popcorn');

let butter = await addButter;
console.log(`husband: I got some ${butter} on popcorn`);
console.log('husband: we should go in');
console.log('wife: What about my Cold Drink');

let colddrink = await getColdDrink;
console.log(`husband: Here is your ${colddrink}`);
console.log('husband: Anything else darling?');
console.log('wife: Lets go we are getting late');
console.log('husband: Thanks for reminding *grins*');

console.log('person4: shows tickets');
console.log('person5: shows tickets');
