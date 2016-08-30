import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const startups = [
  {
    id: "sctyl",
    name: "Scytl",
    url: "http://www.scytl.com",
    watchHref: "https://vimeo.com/51684209",
    keywords:  [ "eDemocracy", "product", "results consolidation", "voting", "electronic voting" ],
    industryId: "ind10"
  },
  {
    id: "typeform",
    name: "Typeform",
    url: "http://www.typeform.com",
    watchHref: "https://vimeo.com/51684209",
    keywords:  [ "surveys", "forms", "product" ],
    industryId: "ind4"
  },
  {
    id: "cartodb",
    name: "CartoDB",
    url: "http://www.cartodb.com",
    watchHref: "https://vimeo.com/51684209",
    keywords: ["GIS", "maps", "big data"],
    industryId: "ind2"
  },
  {
    id: "ofertia",
    name: "Ofertia",
    url: "http://www.ofertia.com",
    watchHref: "https://vimeo.com/51684209",
    keywords: ["offers", "retail"],
    industryId: "ind1"
  },
  {
    id: "kassisto",
    name: "Kassisto",
    url: "http://www.kassisto.com",
    watchHref: "https://vimeo.com/51684209",
    keywords: ["IA", "virtual assistants", "bots", "machine learning"],
    industryId: "ind10"
  },
  {
    id: "world_sensing",
    name: "World Sensing",
    url: "http://www.world_sensing.com",
    watchHref: "https://vimeo.com/51684209",
    keywords: ["IoT", "big data", "beacons"],
    industryId: "ind8"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (startup) => {
  return replaceAll(startup.name, ' ', '-');
};

class StartupApi {
  static getAllStartups() {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], startups));
      }, delay);
    });
  }

  static saveStartup(startup) {
    startup = Object.assign({}, startup);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minStartupNameLength = 1;
        if (startup.name.length < minStartupNameLength) {
          reject(`Name must be at least ${minStartupNameLength} characters.`);
        }

        if (startup.id) {
          const existingStartupIndex = startups.findIndex(a => a.id == startup.id);
          startups.splice(existingStartupIndex, 1, startup);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          startup.id = generateId(startup);
          //startup.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          startups.push(startup);
        }
        //resolve(Object.assign({}, startup));
        resolve(startup);
      }, delay);
    });
  }

  static deleteStartup(startupId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfStartupToDelete = startups.findIndex(startup => {
          startup.startupId == startupId;
        });
        startups.splice(indexOfStartupToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default StartupApi;
