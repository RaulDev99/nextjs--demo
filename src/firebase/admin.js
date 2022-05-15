const admin = require("firebase-admin")

// const serviceAccount = require("./serviceAccountKey.json")


try {
  admin.initializeApp({
    
    
  })
} catch (e) {}

export const firestore = admin.firestore()