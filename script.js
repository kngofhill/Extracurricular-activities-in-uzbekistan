// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD__OINWiM7cLVx0pGsT3kBbZxrjBm23c0",
  authDomain: "extracurricularsuzbekistan.firebaseapp.com",
  databaseURL: "https://extracurricularsuzbekistan-default-rtdb.firebaseio.com",
  projectId: "extracurricularsuzbekistan",
  storageBucket: "extracurricularsuzbekistan.appspot.com",
  messagingSenderId: "555521664728",
  appId: "1:555521664728:web:bf72cb8384be98ff7b99ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle form submission
document.getElementById("activityForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  database.ref("activities").push({
    title: title,
    description: description
  }).then(() => {
    alert("✅ Activity submitted!");
    document.getElementById("activityForm").reset();
  }).catch((error) => {
    console.error("❌ Error writing to database:", error);
  });
});
