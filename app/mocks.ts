import { Race } from './race';

export const RACES: Race[] = [{
  "id": 1,
  "name": "Daytona Thunderdome",
  "date": new Date('2512-01-04T14:00:00'),
  "about": "Race through the ruins of an ancient Florida battle arena.",
  "entryFee": 3200,
  "isRacing": false,
  "image": "https://media-cdn.tripadvisor.com/media/photo-s/03/d4/40/8c/miami.jpg",
  "imageDescription": "Race track with laser lanes"
}, {
  "id": 2,
  "name": "San Francisco Ruins",
  "date": new Date('2512-07-03T20:00:00'),
  "about": "Drift down the streets of a city almost sunk under the ocean.",
  "entryFee": 4700,
  "isRacing": true,
  "image": "http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1429821784/CHARMING0415-san-francisco.jpg?itok=vmayDoQQ",
  "imageDescription": "Golden Gate Bridge with lasers"
}, {
  "id": 3,
  "name": "New York City Skyline",
  "date": new Date('2512-07-12T21:00:00'),
  "about": "Fly between buildings in the electronic sky.",
  "entryFee": 4300,
  "isRacing": true,
  "image": "http://www.newyorker.com/wp-content/uploads/2015/12/Veix-Goodbye-New-York-Color-1200.jpg",
  "imageDescription": "Bridge overlooking New York City"
}]; 

