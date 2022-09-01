const url="https://api.dictionaryapi.dev/api/v2/entries/en/";

const result=document.getElementById("result");
const sound =document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click",() =>{
 let inpWord = document.getElementById("inp-word").value;
 fetch(` ${url}${inpWord} `)
.then((response)=>response.json())
.then((data)=> {
    console.log(data);
    result.innerHTML = `
     <div class="word">
    <h3>${inpWord}</h3>
    <button>
     <i class="fas fa-volume-up"></i>
    </button>
  </div>
  <!-- Details-->
  <div class="details">
    <p>${data[0].meanings[0].partsOfSpeech}</p>
    <p>/sample/</p>
</div> 
<p class="word-meaning">
  A small part or quantity intended to show what the whole is like.
</p>
<p class="word-example">Investigations involved analysing samples of handwriting
</p>`;
})
});