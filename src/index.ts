// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
import { showReviewTotal, populateUser } from './utils'
let isOpen : boolean

const reviews : {
    
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}


const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
}

const you: {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
type Property = {
    image: string;
    title: string;
    price: number;
    location: {
      firstLine: string;
      city: string;
      code: number;
      country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
  };
  
  const properties: Property[] = [
    {
      image: '',
      title: 'Colombian Shack',
      price: 45,
      location: {
        firstLine: 'shack 37',
        city: 'Bogota',
        code: 45632,
        country: 'Colombia'
      },
      contact: [+1123495082908, 'marywinkle@gmail.com'],
      isAvailable: true
    },
    {
      image: '',
      title: 'Polish Cottage',
      price: 34,
      location: {
        firstLine: 'no 23',
        city: 'Gdansk',
        code: 343903,
        country: 'Poland'
      },
      contact:  [+1123495082908, 'garydavis@hotmail.com'],
      isAvailable: false
    },
    {
      image: '',
      title: 'London Flat',
      price: 23,
      location: {
        firstLine: 'flat 15',
        city: 'London',
        code: 35433,
        country: 'United Kingdom'
      },
      contact: [ +1123495082908, 'andyluger@aol.com'],
      isAvailable: true
    }
  ];
  

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
console.log(you.userName)


function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)

// use your location, your current time, and the current temperature of your
// location
let currentLocation: [string, string, number] = ['London', '11:35', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'
