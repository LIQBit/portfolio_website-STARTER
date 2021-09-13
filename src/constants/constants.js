export const projects = [
  {
    title: 'Band Website',
    description:"A responsive Gatsby/React for a UK-based punk-rock band called Surviving December. I built a headless CMS for the blog that uses Contentful's API and webhooks and is hosted on Netlify.",
    image: '/images/sdbanner.png',
    tags: ['React', 'Gatsby', 'GraphQL', 'JavaScript'],
    source: 'https://survivingdecember.com',
    visit: 'https://github.com/LIQBit/gatsby-blog-site',
    id: 1,
  },
  {
    title: 'Fantasy Football App',
    description: "This is a fantasy football app that I built in Django and JavaScript. It pulls NFL player and game stats from sportsdata.io. Users can register an account, edit their team name, add and delete players to/from their roster, and check their team's weekly score against other users on the Scoreboard page.",
    image: '/images/field.jpg',
    tags: ['Django', 'Python', 'JavaScript'],
    source: 'https://github.com/LIQBit/fantasyfootball',
    visit: 'https://leighff.herokuapp.com/game/register',
    id: 3,
  },
  {
    title: 'Travel Buddy',
    description: "A travel assistant app built using JavaScript, HTML and CSS and sources data from four different API's for photos, weather info, country info, etc.",
      image: '/images/beach.jpg',
      tags: ['JavaScript', 'Express', 'AJAX', 'Node.js'],
    source: 'https://github.com/LIQBit/front-end-travel-app',
    visit: 'https://travel-buddy-3000.herokuapp.com/',
    id: 2,
  },
  {
    title: 'Tokyo on a Diet',
    description: "This is an app I built in React.js together with Goople Maps and the Hotpepper restaurant API for displaying the location and info of restaurants in Tokyo that cater to special diets: vegan, halal, kosher, etc. Data for kosher and vegan restaurants was hard to source so I had to make my own JSON resource for these. ",
      image: '/images/tokyo.jpg',
      tags: ['React', 'API', 'HTML/CSS'],
    source: 'https://practical-sinoussi-47a600.netlify.app/',
    visit: 'https://github.com/LIQBit/restaurantmap',
    id: 0,
  },
];

export const TimeLineData = [
  { year: 2019, text: 'Started learning HTML & CSS towards the end of 2019.', },
  { year: 2020, text: 'Completed MITx Introduction to Computer Science with Python & Harvardx Web Programming with Python & JavaScript', },
  { year: 2021, text: 'Completed Udemy Front-End Nanodegree, volunteer web-site support for Phoenixville Time-Bank.', },
];