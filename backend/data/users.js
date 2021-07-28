import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'deju',
    email: 'deju@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'deju',
    email: 'Deju@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
