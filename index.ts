//Interfaces
// 1. Based on what we have learnt in this lesson, and what we discussed in the previous one,
// please get rid of the uncessary code in this project and replace it with the Review interface
// 2. Move the interface to its own file for the next lesson

import { showReviewTotal, populateUser, showDetails } from './utils'
import { Permissions , LoyaltyUser } from './enums'
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews} from './utils'
import { Price, Country} from './types'
import { Review } from './interfaces'
const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

let isLoggedIn: boolean

const reviews: Review[] = [
    
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

enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}
enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
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
  
  let count = 0
  function addReviews(array: {
      name: string;
      stars: number;
      loyaltyUser: LoyaltyUser;
      date: string;
  }[] ) : void {
    function addReviews(array: Review[]) : void {
      if (!count ) {
          count++
          const topTwo = getTopTwoReviews(array)
          for (let i = 0; i < topTwo.length; i++) {
              const card = document.createElement('div')
              card.classList.add('review-card')
              card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
              reviewContainer.appendChild(card)
          }
          container.removeChild(button) 
      }
  }
}
  
  button.addEventListener('click', () => addReviews(reviews))

  for (let i = 0; i < properties.length; i++) {
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer.appendChild(card)
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
console.log(you.userName)


function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning ){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}
populateUser(you.isReturning, you.userName)

let authorityStatus : any

isLoggedIn = false


export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''

// use your location, your current time, and the current temperature of your
// location
let currentLocation : [string, string, number] = ['London', '11.03', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'
