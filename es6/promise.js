//Create a promise object

let giftPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var random = Math.floor(Math.random() * 3);

        if (random == 0) {
            resolve('bat');
        } else if (random == 1) {
            resolve('cycle')
        } else {
            reject('I was busy');
        }
    }, 2000);
});


giftPromise.then(
    (data) => {
        if (data == 'bat') {
            console.log('I will play cricket');
        } else if (data == 'cycle') {
            console.log('I will go cycling');
        }
    },
    (data) => {
        console.log(`Oops! He ditched me again saying ${data}`);
    }
);
console.log('Hello');



//

const bringGift = (cb) => {
    setTimeout(() => {
        var options = ['cycle', 'bat', 'no gift']
        cb(Math.floor(Math.random()*3));
    }, 3000);
}

const plan = (gift) => {
    if (gift == 'bat') {
        console.log('I will play cricket');
    } else if (gift == 'cycle') {
        console.log('I will go cycling');
    } else {
        console.log('Oops');
    }
}
bringGift(plan);

