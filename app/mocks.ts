import { race } from './race';

 export const RACES: race[] = [{
  "id": 1,
  "name": "Daytona Thunderdome",
  "date": new Date('2512-01-04T14:00:00'),
  "about": "Race through the ruins of an ancient Florida battle arena.",
  "entryFee": 3200,
  "isRacing": false,
  "image": "http://www.thunderdomeracing.com/images/logo.png",
  "imageDescription": "Race track with laser lanes"
}, {
  "id": 2,
  "name": "San Francisco Ruins",
  "date": new Date('2512-07-03T20:00:00'),
  "about": "Drift down the streets of a city almost sunk under the ocean.",
  "entryFee": 4700,
  "isRacing": true,
  "image": "https://s-media-cache-ak0.pinimg.com/originals/66/10/91/6610915c5ec7a7458761089cd9c15e67.jpg",
  "imageDescription": "Golden Gate Bridge with lasers"
}, {
  "id": 3,
  "name": "New York City Skyline",
  "date": new Date('2512-07-12T21:00:00'),
  "about": "Fly between buildings in the electronic sky.",
  "entryFee": 4300,
  "isRacing": true,
  "image": "http://www.nationalgeographic.com/new-york-city-skyline-tallest-midtown-manhattan/assets/img/articleImg/01nyskyline640.jpg",
  "imageDescription": "Bridge overlooking New York City"
}];
