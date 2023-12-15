function blue() {
    document.getElementById("text-area").style.backgroundColor = "rgb(197, 197, 248)"
}

function yellow() {
    document.getElementById("text-area").style.backgroundColor = "rgb(255, 255, 159)"
}

function green() {
    document.getElementById("text-area").style.backgroundColor = "rgb(177, 245, 177)"
}

function pink() {
    document.getElementById("text-area").style.backgroundColor = "rgb(253, 193, 203)"
}


function addPost(){
    var description = document.getElementById("text-area").value;
    var bgcolor = document.getElementById("text-area").style.backgroundColor
    
    if (description !== ""){
        var posts = document.getElementById("posts");
        // Template String
        posts.innerHTML += `
        <div>
        <div class="img-name"><img src="images/furqanqazi.jpg" alt="" width="65px" height="70px" style="border-radius: 50%;">
            <p>Furqan Qazi</p>
        </div>
        <br>
        <div id="post-text">
            <textarea id="text-area" style="border: 0px; width: 100%; height: 100%; background-color: ${bgcolor};">${description}</textarea>
        </div>
        </div>
        `
    }

    else{
        alert("Plz Enter something!")
    }
}
