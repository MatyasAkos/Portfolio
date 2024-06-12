const prompt = document.querySelector('p#prompt')
const vid = document.querySelector('video#kareszvideo')
const mozaik = document.querySelector('button#mozaik')
const fa = document.querySelector('button#fa')
const haz = document.querySelector('button#haz')
const labirintus = document.querySelector('button#labirintus')

const prompts = {
    'mozaik' : 'Karesz rajzolja meg <a href="https://molnatt.github.io/logo_mozaik_korongok.png" target="_blank">ezt</a> az ábrát.',
    'fa' : 'Karesz rajzoljon egy olan fát. amelynek egyre kevesebb ága van felfelé haladva.',
    'haz' : 'Karesz rakjon ki egy házikót kavicsokból.',
    'labirintus' : 'Karesz menjen végig a labirintuson és gyűjtse össze a kavicsokat.'
}

mozaik.addEventListener('click', () => OnClick('mozaik'));
fa.addEventListener('click', () => OnClick('fa'));
haz.addEventListener('click', () => OnClick('haz'));
labirintus.addEventListener('click', () => OnClick('labirintus'));

function OnClick(filename){
    prompt.innerHTML = `Feladat: ${prompts[filename]}`
    vid.src = `./../resources/videos/${filename}.mp4`;
}