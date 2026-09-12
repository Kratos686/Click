const GOOGLE_CLIENT_ID =
    "384296946484-hgr8on5khatakv6u2knngut3eee42h32.apps.googleusercontent.com";

const googleButton = document.getElementById("googleSignInBtn");

googleButton.addEventListener("click", () => {
    console.log("CLICK Google button pressed");

    const redirectUri = window.location.origin + "/login.html";

    const params = new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: "token",
        scope: "openid email profile"
    });

    window.location.href =
        "https://accounts.google.com/o/oauth2/v2/auth?" + params.toString();
});