// Any Type
// 1. Add a description property to Omars review, and give it a value. 
// 2. Next try addressing what TypeScript does not like.
// 3. Now, imagine we DON'T know what kind of review object we are going to 
// get next.
import { showReviewTotal, populateUser } from './utils'
import { Permissions , LoyaltyUser } from './enums'
const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

let isLoggedIn: boolean

const reviews : any[] = [
    
        name: 'Sheia',
        stars: 5,
        loyaltyUser: Gold,
        date: '01-04-2021'
],
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: Bronze,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: Silver,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said.',

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
    permissions: Permissions.ADMIN
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const ADMIN = 'admin'
const READ_ONLY = 'read-only'


enum Permissions {
    ADMIN,
    READ_ONLY
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

let authorityStatus : any

isLoggedIn = false

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}


// use your location, your current time, and the current temperature of your
// location
let currentLocation : [string, string, number] = ['London', '11.03', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'
