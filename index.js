function change(response) {
    if (response.errorCode === 0) {
        //document.getElementById("profilePicture").src = response['profile']['photoURL'];
        $("#profilePicture").html(response['profile']['photoURL']);
    } else {
        alert("Error: " + response.errorMessage);
    }
}

function changeProfPic(mode) {
    if (mode == 'login') {
        gigya.accounts.getAccountInfo({ "callback": change });
        $("logout").show();
        $("edit").show();
    } else {
        document.getElementById("profilePicture").src = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
    }
}


gigya.accounts.addEventHandlers({
    onLogin: changeProfPic('login'),
    onLogout: changeProfPic('logout')
});