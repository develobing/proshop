import bcryptjs from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcryptjs.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcryptjs.hashSync('1234', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcryptjs.hashSync('1234', 10),
  },
  {
    name: 'Dev',
    email: 'dev@dev.com',
    password: bcryptjs.hashSync('1234', 10),
    isAdmin: true,
  },
];

export default users;
