This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:


You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Project scripts

Run the following script to create the default project folders if they are missing:

```bash
npm run setup:folders
```

## Database (MongoDB Atlas) setup

1. Create a `.env.local` file in the project root with the following variables (replace placeholders with your values):

```dotenv
MONGO_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority"
JWT_SECRET="your_jwt_secret_here"
```

2. Run the test script to validate the connection:

```bash
npm run test:db
```

If Mongoose prints `MongoDB connected successfully`, you are connected.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
