let nukeButton = document.getElementById("nuke")

nukeButton.onclick = (x) => {
    console.log("Hello")
    window.alert("Don't do that!")
}

document.body.appendChild(nukeButton.cloneNode(true))