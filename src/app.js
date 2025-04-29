
window.onload = function() {
 
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon',"puedes"];
  let extens=[".com", ".net", ".us",".es"];

  for (let p=0;p<pronoun.length;p++){
    for(let a=0;a<adj.length;a++){
      for(let n=0;n<noun.length;n++){
        for(let e=0;e<extens.length;e++){

          let dominio=pronoun[p]+adj[a]+noun[n]+extens[e];
          console.log(dominio);
        }
      }
    }
  }
};

