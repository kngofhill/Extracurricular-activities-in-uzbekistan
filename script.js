import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

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
const database = getDatabase(app);

const form = document.getElementById('activityForm');
const activitiesDiv = document.getElementById('activities');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  push(ref(database, 'activities'), {
    title,
    description,
    timestamp: Date.now()
  });

  form.reset();
});

onValue(ref(database, 'activities'), (snapshot) => {
  activitiesDiv.innerHTML = '';
  snapshot.forEach(childSnapshot => {
    const activity = childSnapshot.val();
    const div = document.createElement('div');
    div.className = 'activity';
    div.innerHTML = <h3>${activity.title}</h3><p>${activity.description}</p>;
    activitiesDiv.appendChild(div);
  });
});
