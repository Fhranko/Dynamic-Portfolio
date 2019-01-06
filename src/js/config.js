import firebase from 'firebase/app'

const config = {
      apiKey: "AIzaSyBvSAGA6cXeUdZZTv18TRMeMogh0hV7ch0",
    authDomain: "dymanic-portfolio.firebaseapp.com",
    databaseURL: "https://dymanic-portfolio.firebaseio.com",
    projectId: "dymanic-portfolio",
    storageBucket: "dymanic-portfolio.appspot.com",
    messagingSenderId: "471747297918"
}

const init = () =>firebase.initializeApp(config)

init()