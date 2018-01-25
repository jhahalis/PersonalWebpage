$(document).ready(function(){
    //make images bigger on hover
    $(".linkIcon").hover(function(){
        $(this).css({"height": "200px", "width": "200px"});
    }, function(){
        $(this).css({"height":"100px", "width": "100px"});
    }); 
    //fetch gitHub repos
    fetchRepos();
});

function callAJAX (url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          callback(xhttp);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  function fetchRepos () {
      //alert("hello");
     const gitHubAPI= "https://api.github.com/users/jhahalis/repos";
     callAJAX (gitHubAPI, ajaxCallback);
  }

  function ajaxCallback(ajaxObject){
      //alert(ajaxObject.responseText);
      let repos=JSON.parse(ajaxObject.responseText);
      let html="<ul>";
      for (i=0; i<repos.length; i++) {
          let repo=repos[i];
          //alert(repo);
          let name=repo.name;
          let url=repo.html_url;
          html += '<li><a class="my-links-item" href="'+ url + '" target="_blank"><label>' + name + '</label></a></li>';
     }
     html += "</ul>";
     document.getElementById("repositories").innerHTML=html;
  }