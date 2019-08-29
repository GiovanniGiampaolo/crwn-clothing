import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyDuvjr3bkFng5zDSaOkmm6soOwilO7SDnk',
    authDomain: 'crwn-db-869cf.firebaseapp.com',
    databaseURL: 'https://crwn-db-869cf.firebaseio.com',
    projectId: 'crwn-db-869cf',
    storageBucket: '',
    messagingSenderId: '872235737849',
    appId: '1:872235737849:web:4b80c05d40b11d91'
}

// it will be an asyncronus function
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    // console.log(snapShot)

    // if snapshot !exist I create a doc on db
    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.error('ERROR CREATING USER...', e.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// SETUP GOOGLE AUTH UTILITY
const provider = new firebase.auth.GoogleAuthProvider()

// GOOGLE POP-UP FOR LOGIN
provider.setCustomParameters({prompt: ' select_account'})

export const signInWithGoogleMethod = () => auth.signInWithPopup(provider)

export default firebase

