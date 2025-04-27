This is a repo to reproduce crucial bugs with parallel routes in Nextjs

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

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Checkout the following bugs for yourself

### Metadata bug

1. Select a role
2. Check the page title in the browser tab

You should see that it returns the same title for both although I have explicitly exported different metadata for each.

### Both routes are being executed but one is rendered

1. Select a role
2. Open the console in your browser

I have placed a `console.log` in each route, you will see that both are logged to the console. I also am facing this with my app where fetches in both routes are being called causing extra unecessary load on my API.


These very basic bugs make the parallel routes feature feel like the feature should be in experimental state and far from production ready. It's a really nice feature and I am hoping the Nextjs team polishes it out.


