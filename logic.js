  function getCharacters() {
    let baseUrl = "https://api.jikan.moe/v3/"
    fetch(`${baseUrl}manga/1/characters`)
    .then(data=> data.json())
    .then(data=>{
        console.log(data);
    })
  }
 
window.addEventListener("load", function() {
    getCharacters()
});
