"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require('firebase-functions');
const firebase_1 = require("../../lib/firebase");
/**
 * Deletes a document with ID -> uid in the `users` collection.
 *
 * @param {Object} userRecord - Contains the auth, uid, and other info
 * @param {Object} context - Details about the event
 */
const deleteProfile = (userRecord, context) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield firebase_1.db.collection('users').doc(userRecord.uid).delete();
        console.info('User deleted: ', userRecord);
    }
    catch (err) {
        console.error(err);
    }
});
/**
 * Creates a document with ID -> uid in the `users` collection.
 *
 * @param {Object} userRecord - Contains the auth, uid, and other info
 * @param {Object} context - Details about the event.
 */
const createProfile = (userRecord, context) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield firebase_1.db.collection('users').doc(userRecord.uid).set({
            email: userRecord.email
        });
        console.info('User created: ', userRecord);
    }
    catch (err) {
        console.error(err);
    }
});
module.exports = {
    authOnDelete: functions.auth.user().onDelete(deleteProfile),
    authOnCreate: functions.auth.user().onCreate(createProfile)
};
//# sourceMappingURL=index.js.map