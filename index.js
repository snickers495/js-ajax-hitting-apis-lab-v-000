function getRepositories(){
  const user = document.getElementById("username").value
  const url =
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/" +"/repos')
  req.send()
}
