var posts=["2024/05/09/Text/","2024/05/10/Markdown/","2024/05/08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };