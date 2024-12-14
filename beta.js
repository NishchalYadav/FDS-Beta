function login(){
    let username2 = document.getElementById("username").value;
    let password2 = document.getElementById("password").value;

    let website_user = "TeamFDS"
    let website_password = "BetaAccess@teamFds"

    if(username2 == website_user && password2 == website_password){
        window.location = "/study centre/study-hall.html"
    }
    else if (username2 == "" && password2 == ""){
        alert("Fill out the all fields!!")
    }
    else if (username2 == website_user && password2 !== website_password){
        document.getElementById("username").style.border = "1px solid green"
        document.getElementById("password").style.border = "1px solid #dd5a44"
    }
    else if (username2 !== website_user && password2 == website_password){
        document.getElementById("username").style.border = "1px solid #dd5a44"
        document.getElementById("password").style.border = "1px solid green"
    }
    else{
        document.getElementById("username").style.border = "1px solid #dd5a44"
        document.getElementById("password").style.border = "1px solid #dd5a44"
    }
}