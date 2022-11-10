// Data  model
/* Most famous persons in the city
data = [
  city: String
  [
    {
      id: 
      person:
      jobtitle:
      company:
      phrase:
    },
  ],
]
*/

const { faker } = require('@faker-js/faker');
const fs = require('fs');

const cities = ['helsinki', 'london', 'paris', 'tokyo', 'san francisco', 'new york',
                'oslo', 'stockholm', 'barcelona'];
let data = {};

cities.forEach(city => {
  const N = Math.floor(Math.random() * 15) + 1;
  const arr = []
  for (let i = 0; i < N; i++)
    arr.push({
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      jobtitle: faker.name.jobTitle(),
      company: faker.company.name(),
      phrase: faker.hacker.phrase(),
    });
  data[city] = arr;
});

fs.writeFileSync('datafile.json', JSON.stringify(data, null, 2), 'utf-8');