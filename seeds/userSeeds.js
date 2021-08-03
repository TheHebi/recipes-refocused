const User = require('../models/User');

const userData = [
  {
    username:'Nate',
    password:`password`,
    email: `nate@nate.com`
  },
  {
    username:'Koppi',
    password:`password`,
    email: `koppi@koppi.com`
  },
  {
    username:'Kaleb',
    password:`password`,
    email: `kaled@kaleb.com`
  },
  {
    username:'Kevin',
    password:`password`,
    email: `kevin@kevin.com`
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;