// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}*/

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return console.log(gifts);
}

wrapGifts(gifts);

//////////////////////////////////

const names=['Guadalupe', 'Ollie', 'Aki'];

function writeCards(arrayNames, eventName) {
    const newMessage=[];
    for(let i=0; i<arrayNames.length; i++ ) {
        newMessage.push(`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return newMessage
} 

writeCards(names, 'surprise');

//////////////////////////////////


function countDown(number) {
    while(number>=0) {
        console.log(number);
        number--;
    }
    return number;
}
countDown(10);

// Can also use this function to provide same results
/* function countDown(number) {
    let i=number;
    while(i>=0) {
        console.log(i);
        i--;
    }
    return number;
}
countDown(10);*/






