const prompt = document.querySelector('p#prompt')
const vid = document.querySelector('video#kareszvideo')
const mozaik = document.querySelector('button#mozaik')
const fa = document.querySelector('button#fa')
const haz = document.querySelector('button#haz')
const labirintus = document.querySelector('button#labirintus')

const prompts = {
    'mozaik' : 'Feladat: Karesz rajzolja meg <a rel="_blank" href="https://molnatt.github.io/logo_mozaik_korongok.png">ezt</a> az ábrát'
    /*'fa' : 
    'haz' : 
    'labirintus' : */
}

mozaik.addEventListener('click', () => OnClick('mozaik'));
fa.addEventListener('click', () => OnClick('fa'));
haz.addEventListener('click', () => OnClick('haz'));
labirintus.addEventListener('click', () => OnClick('labirintus'));

function OnClick(filename){
    prompt.innerHTML = prompts[filename]
    vid.src = `./../resources/videos/${filename}.mp4`;
}