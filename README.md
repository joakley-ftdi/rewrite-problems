This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The goal
The goal is to establish a catch-all rewrite rule which will matched routes not matched by other paths.  The reason for this is that we want to consult a service to identify redirects at request time, and throw a 404 if the consulted serice doesn't fine anything.

## The problem
The catch-all route is too aggressive.  When there's a statically defined route, such as `pages/foo-bar`, the route is matched successfully.  However, when a path has a dynamic segment, the catch-all route is triggered.  We want the catch-all route only to fire if there is no satisfactory route.

`pages/boo/[...slug]` will resolve if there is no rewrite, but won't if the rewrite rule in `next.config.js` is active.

## Further reading

https://vercel.com/guides/custom-404-page#what-if-i-need-a-custom-404-api-response