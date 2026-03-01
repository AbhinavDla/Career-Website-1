// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHhtnzZZf1qQBhHcvB046GLVsG6JbIgmU",
    authDomain: "fbla-website-2023-2024.firebaseapp.com",
    databaseURL: "https://fbla-website-2023-2024-default-rtdb.firebaseio.com",
    projectId: "fbla-website-2023-2024",
    storageBucket: "fbla-website-2023-2024.appspot.com",
    messagingSenderId: "694502114792",
    appId: "1:694502114792:web:91c6f21dd1eb976c04105d",
    measurementId: "G-TGVRCJD32X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function submitForm() {
    // Get form input values
    const firstName = document.querySelector('input[name="first-name"]').value;
    const lastName = document.querySelector('input[name="last-name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const ssn = document.querySelector('input[name="ssn"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const education = document.querySelector('input[name="Education"]').value;
    const jobApplied = document.querySelector('input[name="job"]').value;

    // Create a reference to the Firebase database
    const database = getDatabase();

    // Get a reference to the "Applications" node and create a new child node under the applicant's name
    const applicationsRef = ref(database, `Applications/${firstName}_${lastName}`);
    const newApplicationRef = push(applicationsRef);

    // Set the form data in the database
    set(newApplicationRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        ssn: ssn,
        address: address,
        education: education,
        jobApplied: jobApplied
    });

    alert("Application submitted successfully!");
    // Optionally, reset the form after submission
    document.querySelector('form').reset();
}

// Event listener for the form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm();
});