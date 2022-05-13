## Getting Started

This is a template Next.js data tracking app. Currently Tracking Cash Expenses
Data can be added via a text message with twilio or visiting [/crud](/crud)
Go to the root directory to see a chart of expenses.

To set up the twilio connectivity go to twilio console and change the "Message comes in" webhook to make a "POST" request to [/api/twil](/twil)
Text messages are parse by “INTEGERVARIBLE CATEGORYVARIABLE”. For example “43 Dinner”.

Text messages and crud page both update a mongodb database for persistent data.
Update environmental variable with your mongodb URI.

Easily deployed to vercel.

## Future Updates

Authenication is needed.
Block any non-authorized number.
