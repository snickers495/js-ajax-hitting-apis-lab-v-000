function getRepositories(){
  const user = document.getElementById("username").value
  const url = "https://api.github.com/users/" + user + "/repos"
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", url)
  req.send()
}
function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
function getCommits(el){
  const data = el.dataset;
  const name = data.repository;
  const username = data.username;
  const url = 'https://api.github.com/repos/' + username + '/' + name + '/commits'
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayCommits)
  req.open("GET", )
  req.send()
}
function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`;
  document.getElementById("details").innerHTML = commitsList;
}
