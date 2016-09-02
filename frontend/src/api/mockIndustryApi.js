import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const industries = [
  {
    id: 'ind1',
    name: 'Agriculture, forestry and fishing'
  },
  {
    id: 'ind2',
    name: 'Mining and quarrying'
  },
  {
    id: 'ind3',
    name: 'Manufacturing'
  },
  {
    id: 'ind4',
    name: 'Electricity, gas, water supply'
  },
  {
    id: 'ind5',
    name: 'Construction'
  },
  {
    id: 'ind6',
    name: 'Wholesale and retail trade'
  },
  {
    id: 'ind7',
    name: 'Transportation and storage'
  },
  {
    id: 'ind8',
    name: 'Accommodation and food service activities'
  },
  {
    id: 'ind9',
    name: 'Information and communication'
  },
  {
    id: 'ind10',
    name: ' Financial and insurance activities'
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (industry) => {
  return replaceAll(industry.name, ' ', '-');
};

class IndustryApi {
  static getAllIndustries() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], industries));
      }, delay);
    });
  }

  static saveIndustry(industry) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minIndustryNameLength = 3;
        if (industry.name.length < minIndustryNameLength) {
          reject(`Industry must be at least ${minIndustryNameLength} characters.`);
        }

        if (industry.id) {
          const existingIndustryIndex = industries.findIndex(a => a.id == industry.id);
          industries.splice(existingIndustryIndex, 1, industry);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          industry.id = generateId(industry);
          industries.push(industry);
        }

        resolve(Object.assign({}, industry));
      }, delay);
    });
  }

  static deleteIndustry(industryId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfIndustryToDelete = industries.findIndex(industry => {
          industry.industryId == industryId;
        });
        industries.splice(indexOfIndustryToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default IndustryApi;
