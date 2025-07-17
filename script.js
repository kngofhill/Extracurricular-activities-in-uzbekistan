// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js";

const firebaseConfig = {
  apiKey: "AIzaSyD__OINWiM7cLVx0pGsT3kBbZxrjBm23c0",
  authDomain: "extracurricularsuzbekistan.firebaseapp.com",
  databaseURL: "https://extracurricularsuzbekistan-default-rtdb.firebaseio.com",
  projectId: "extracurricularsuzbekistan",
  storageBucket: "extracurricularsuzbekistan.firebasestorage.app",
  messagingSenderId: "555521664728",
  appId: "1:555521664728:web:bf72cb8384be98ff7b99ad",
  measurementId: "G-Z53076ZBCJ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const activitiesRef = ref(db, "activities");

// Handle form submission
const form = document.getElementById("activityForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (title && description) {
    push(activitiesRef, {
      title,
      description,
      timestamp: Date.now()
    });

    form.reset(); // Clear the form
  }
});

// Show submitted activities
const activitiesDiv = document.getElementById("activities");

onChildAdded(activitiesRef, (data) => {
  const activity = data.val();
  const div = document.createElement("div");
  div.className = "activity";

  const titleEl = document.createElement("h3");
  titleEl.textContent = activity.title;

  const descEl = document.createElement("p");
  descEl.textContent = activity.description;

  div.appendChild(titleEl);
  div.appendChild(descEl);

  // Add newest on top
  activitiesDiv.prepend(div);
});
