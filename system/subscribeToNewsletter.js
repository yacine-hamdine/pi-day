const firebaseConfig = {
  apiKey: "AIzaSyCiTgvAU_kU-f0nTRRcd5dgN7TULTiJeJo",
  authDomain: "pi-day-87113.firebaseapp.com",
  projectId: "pi-day-87113",
  storageBucket: "pi-day-87113.appspot.com",
  messagingSenderId: "593809530853",
  appId: "1:593809530853:web:e142bd0c4882ad29c1d90c",
  measurementId: "G-VJ8NNEV071"
};

const app = initializeApp(firebaseConfig);

let emailsDB = firebase.database().ref("newsletter-subscribers");

document.querySelector("#subscribe").onclick = () => {
    let newSubscriber = emailsDB.push();

    newSubscriber.set({
        email: document.querySelector("#email").value
    });
}