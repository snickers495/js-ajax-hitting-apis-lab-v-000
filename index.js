function getRepositories(){
  const user = document.getElementById("username").value
  const url = "https://api.github.com/users/" + user + "/repos"
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", url)
  req.send()
}
