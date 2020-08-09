
                // Your web app's Firebase configuration
                var firebaseConfig = {
                  apiKey: "AIzaSyC3l1a6PVJXgacm5wW_o9ULj59Euda4Smg",
                  authDomain: "portfolio-84bc5.firebaseapp.com",
                  databaseURL: "https://portfolio-84bc5.firebaseio.com",
                  projectId: "portfolio-84bc5",
                  storageBucket: "portfolio-84bc5.appspot.com",
                  messagingSenderId: "1012995269497",
                  appId: "1:1012995269497:web:b37d929e1c37ede34a05a8",
                  measurementId: "G-XS8F4J2K8E"
                };
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);
                const db = firebase.firestore();
              //   db.settings({ timestampsInSnapshots: true});
              