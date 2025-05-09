export enum UserRole {
  Therapist = 'therapist',
  Client = 'client',
}

export interface User {
  id: string;
  email: string;
  hashed_password: string;
  role: UserRole;
}

// Added only for testing purposes
// export const USERS: User[] = [
//   {
//     email: 'client@galaxies.dev',
//     id: '7z6ydcm',
//     role: UserRole.Client,
//     hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
//   },
//   {
//     email: 'simon@galaxies.dev',
//     id: '41m3lxk',
//     role: UserRole.Therapist,
//     hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
//   },
// ];

export const USERS: User[] = [
  {
    email: 'client@galaxies.dev',
    id: '7z6ydcm',
    role: UserRole.Client,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
  {
    email: 'simon@galaxies.dev',
    id: 'unrbkfv',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$dpS70GLxAMN/8R4VODKAaeVJk2GOA7up8x34m7VXmBJvkczHOPAfW', // dummy "123456"
  },
  {
    email: 'anikala@galaxies.dev',
    id: 'odq5wyw',
    role: UserRole.Client,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
  {
    email: 'benson@galaxies.dev',
    id: 'c2x5kqp',
    role: UserRole.Client,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
  {
    email: 'kunle@muj.dev',
    id: 'e4z9mfj',
    role: UserRole.Client,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
  {
    email: 'ajala@benson.dev',
    id: 'g7y1bdv',
    role: UserRole.Client,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
  {
    email: 'DrRay@galaxies.dev',
    id: 'm3z8nxl',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
  {
    email: 'Drkol@galaxies.dev',
    id: 'u5q6plv',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
];
