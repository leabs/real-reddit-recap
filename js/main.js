//on page load hide page body


//prompt user to enter their username
function promptUser() {
  let username = prompt("Enter your Reddit username");
  document.body.style.display = "none";
  if (username != null) {
    document.body.style.display = "block";
    document.getElementById("username").innerHTML = username;

    document.getElementById("username").innerHTML = username;
    //display top comment inside comment-wrapper div and display subreddit inside sub-reddit button
    function displayTopComment() {
      fetch(
        "https://www.reddit.com/user/" +
          username +
          "/comments.json?sort=top&t=year&limit=1"
      )
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("comment").innerHTML =
            data.data.children[0].data.body;
          document.getElementById("sub-reddit").innerHTML =
            data.data.children[0].data.subreddit;
            document.getElementById("upvotes").innerHTML =
            data.data.children[0].data.ups;
        }),
        fetch(
          "https://www.reddit.com/user/" +
            username +
            "/submitted.json?sort=top&t=year&limit=1"
        )
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("post-title").innerHTML =
              data.data.children[0].data.title;
            document.getElementById("post-body").innerHtml =
              '<img src="' + data.data.children[0].data.thumbnail + '"/>';

            document.getElementById("sub-reddit").innerHTML =
              data.data.children[0].data.subreddit;
          });
      let commentSub =
        "https://www.reddit.com/r/" + data.data.children[0].data.subreddit;
      document.getElementById("myLink").setAttribute("href", link);
      document.getElementById("myLink").innerHTML = link;
    }
    displayTopComment();
  }
}

promptUser();
