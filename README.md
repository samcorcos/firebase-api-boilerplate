# Firebase API Boilerplate

Built with Firestore, Functions, and Storage out of the box

Since every project will need to replicate users in a `Users` collection, this comes with those hooks built-in along with.

## Setup

Grep `TODO` and `next-firebase-boilerplate` and change everything that requires changing to your current project. That's pretty much it.

Go to `console.firebase.com` and create a new project, if you have not done so already. Then `Settings` (the gear) => `Project Settings` => `Service Accounts` => `Generate New Private Key`. Download the file and add it to the `/credentials` directory.

Change `/functions/lib/firebase.js` to inclue the path to the new credentials file.

## Deployment 

`firebase deploy` - requires CLI

## Additional

Uses the `firestore-rest` package, which is a requirement so long as the Firestore gRPC issue is broken:

https://github.com/samcorcos/firestore-rest

