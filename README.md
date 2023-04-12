# Building a Fullstack Netflix Clone with React, NextJS, TailwindCSS & Prisma

![image](https://user-images.githubusercontent.com/23248726/220005380-ede4fb14-0b8d-4582-a063-3cc4beeccfb7.png)

This is a repository for a FullStack Netflix Clone tutorial using React, NextJS, TailwindCSS & Prisma.

[VIDEO TUTORIAL](https://www.youtube.com/watch?v=mqUN4N2q4qY)

Features:

- Environment, Typescript, NextJS Setup
- MongoDB & Prisma connect, Database creation
- Authentication with NextAuth, Google & Github Login
- Full responsiveness on all pages
- Cookie based authentication
- API and Controllers creation
- Detail-oriented effects and animations using TailwindCSS
- React SWR data fetching
- Zustand state management

### Prerequisites

**Node version 14.x**

### Install packages

```shell
npm i
```

### Setup .env file

https://cloud.mongodb.com/ 0.0.0.0/0

gitHub -> Settings -> Developer setting -> OAuth Apps airbnb http://localhost:3000/

google developer console https://console.cloud.google.com/ NEW PROJECT SELECT PROJECT search Apis Enabled APIs & services -> OAuth consent screen -> External -> CREATE Credentials -> CREATE CREDENTIALS -> Create OAuth client ID Web application Authorized redirect URLs http://localhost:3000/api/auth/callback/google

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

npx prisma db push

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
