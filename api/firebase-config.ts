require("dotenv").config()
import * as admin from 'firebase-admin'

const credentials = JSON.parse(process.env.FIREBASE_CREDENTIALS!)

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: "https://http-dsl-test-api.firebaseio.com"
})

export const db: FirebaseFirestore.Firestore = admin.firestore()