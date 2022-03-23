# Cast Bill: Vol 1

You're producing a new movie, but the only available actor is Bill Murray. Fortunately, you have access to many incarnations of Mr. Murray, so you can pick and choose which ones you will cast.

## Instructions

For this project, you’ll be building out a React application that displays a list of available Bill Murrays, with some other features. Try your best to find the right places to insert code into the established code base.

After forking/cloning this repo:

1. Run `npm install` in the project directory.
2. Run `npm run server`, which will start the json server on port `8002`.
3. In a new terminal, run `npm start`, which will start up your react app on port `8000`.

Make sure to open [http://localhost:8002/bills](http://localhost:8002/bills) in
the browser to verify that your backend is working before you proceed!

These are the endpoints you might need:

- GET: `/bills`

## Core Deliverables

As a user, I should be able to:

- See profiles of all Bill Murrays rendered in `BillCollection`.
- Add an individual Bill to the cast by clicking on it. The selected actor should render in the `BillsCast` component. The instance of Bill Murray can be enlisted only **once**. The actor **does not** disappear from the `BillCollection`.
- Remove an actor from the cast by clicking on it. The actor disappears from the `BillsCast` component.
- Discharge a Bill Murray from their agency forever, by clicking the blue button that says "FIRE". This removes the actor from both the `BillCollection` and `BillsCast` components on the frontend.

All of the code to style the page has been written for you, meaning that you
should be adding to the code rather than editing it; however, if your finished
product has some styling issues, don't worry too much about it.
