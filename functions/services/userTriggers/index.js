const functions = require('firebase-functions')
const { db } = require('../../lib/firebase')

/**
 * Deletes a document with ID -> uid in the `users` collection.
 *
 * @param {Object} userRecord - Contains the auth, uid, and other info
 * @param {Object} context - Details about the event
 */
const deleteProfile = (userRecord, context) => {
  return db
    .collection('users')
    .doc(userRecord.uid)
    .delete()
    .then(doc => console.info('User deleted: ', JSON.stringify(doc)))
    .catch(console.error)
}

/**
 * Creates a document with ID -> uid in the `users` collection.
 *
 * @param {Object} userRecord - Contains the auth, uid, and other info
 * @param {Object} context - Details about the event.
 */
const createProfile = (userRecord, context) => {
  return db
    .collection('users')
    .doc(userRecord.uid)
    .set({
      email: userRecord.email
    })
    .then(doc => console.info('User created: ', JSON.stringify(doc)))
    .catch(console.error)
}

module.exports = {
  authOnDelete: functions.auth.user().onDelete(deleteProfile),
  authOnCreate: functions.auth.user().onCreate(createProfile)
}
