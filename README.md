# Firebase API Boilerplate

Built with Firestore, Functions, and Storage out of the box

Since every project will need to replicate users in a `Users` collection, this comes with those hooks built-in along with.

## Setup

1. Remove git: `rm -rf .git`
2. Grep `TODO` and `next-firebase-boilerplate` and change everything that requires changing to your current project. That's pretty much it.
3. Go to `console.firebase.com` and create a new project, if you have not done so already. Then `Settings` (the gear) => `Project Settings` => `Service Accounts` => `Generate New Private Key`. Download the file and add it to the `/credentials` directory.
4. Change `/functions/lib/firebase.js` to inclue the path to the new credentials file.

## Installation

To install all the necessary components, you'll need to `cd` into `/functions` and run `npm i`

```sh
cd functions && npm i
```

You'll also need the firebase cli:

```
npm i -g firebase-tools
```

## Directory Structure

Following the default configuration for Firebase, most of the app lives within the `/functions` directory.

```s
functions
  |-- credentials # secret credentials for the app, not to be checked in
  |-- lib # helper functions go here
  |-- services # this is where all the functions go that the user interacts with
```

## Development

From within `/functions` run `npm run dev` to run the functions locally.

```sh
npm run dev
```

## Deployment 

You can deploy the functions by themselves or the entire app at once. To deploy just the functions, run `npm run dev` from within the `/functions` directory. To deploy the entire app with settings and configurations, run `firebase deploy`, which requires the CLI.

```sh
firebase deploy
```

## Additional

Uses the `firestore-rest` package, which is a requirement so long as the Firestore gRPC issue is broken:

https://github.com/samcorcos/firestore-rest

