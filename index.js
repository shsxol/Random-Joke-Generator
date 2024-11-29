const generateButton= document.querySelector('.generate-button');
const memeTitle = document.querySelector('.meme-title');
const memeUrl = document.querySelector('.meme-img');
const memeAuthor = document.querySelector('.author');

function getMeme(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) =>{
        const {author,title,url} = data
        memeAuthor.innerHTML = `Meme by : ${author}`;
        memeTitle.innerHTML = title;
        memeUrl.src = url;
        console.log(author,title,url);
    })
}
getMeme();

generateButton.addEventListener('click', () =>{
    getMeme();
})

