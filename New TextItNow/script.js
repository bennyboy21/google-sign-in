function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // document.querySelector(".g-signin2").style.display = "none"
    const allowedEmailDomain = 'student.tdsb.on.ca';

    const email = 'test@admin.com';

    if (email.split('@')[1] === allowedEmailDomain) {
        alert("we allow this email")
    } else {
        alert("We don't allow this email")
    }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}