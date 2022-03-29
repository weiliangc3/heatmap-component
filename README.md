# Heatmap Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Key features

- useContext
- Date comparison logic
- A fun rendering of a bunch of boxes
- No tests

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Nextjs
- Typescript
- ESLint with airbnb standards
- Jest
- react-testing-library
- styled-components

### Test notes

I approached the test with the goal of completeing the test, rather than create great quality code, I admit. The most 'challenging' part of the test is probably the algorithm to create the amount of weeks, and how that associates with rendering the boxes. Other than that, once the relationship between weeks, days and the mapped out 'heat' object is conceptualised, it feels like mostly just implementation.

This is the most fun code test I've done so far to be honest. Please excuse the bootstrap remnants- I was too lazy to clean them up for this test.

I did this over about 3 hours while watching twitch and I didn't have time to add tests. There's an example test I made in the bootstrap of this repo in `components/atoms/Counter`, but the heatmap component isn't tested at all. Because the component is presentational only, the only things I'd test is counting elements etc. To be completely sure, I'd suggest using a screenshot test... but this is expensive... especially for a tech test.

I used divs instead of the svg solution that github uses. I did this because otherwise I'd be tempted to just copy the github rendering solution, which isn't a bad idea, but felt like cheating.

I decided to scope the context to the heatmap alone, so that the component is repeatable. Instead, it takes the transactions as an object and dynamically creates the amount of columns needed.

I avoided redux, using useContext instead, because I don't think I need any of the redux functions (see: actions), and the syntax is somewhat similiar.

There are some better patterns to loop to create elements probably, or handle dates, etc. I avoided libraries, opting to use only javascript, just to reduce the dependencies. I've probably inherited some weaknesses here, but I wasn't thinking hard enough at the time to catch any edge cases.

I didn't style or add bits for what month is where on the table. This can be done fairly easily since boxes are of fixed width, so you can figure out where your 'Jan' and 'Feb's go.

I've done this test with fairly low discipline, so I apologise for the roughness of the work.
