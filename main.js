const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const emojis = '＄';

const alphabet = katakana + latin + nums + emojis;

const fontSize = 16;
const columns = canvas.width;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0,0,0,0.05)'
  context.fillRect(0,0, canvas.width, canvas.height);
  
    context.fillStyle = '#107210';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

setInterval(draw, 25);

function copy() {
  var discord = document.getElementsByClassName("hide-discord");
  navigator.clipboard.writeText(discord[0].textContent);
  console.log(discord[0].textContent);
  alert("Copied! " + discord[0].textContent)
}


window.onload = () => {
  const sources = [
    { src: 'https://www.dropbox.com/s/o3pj3opnbtxxv1y/We%20Don%27t%20Get%20Along?dl=1', type: 'audio/mpeg' },
    { src: 'https://www.dropbox.com/s/fkzhhr5ou5p90di/Had_To.m4a?dl=1', type: 'audio/mpeg' },
    //{ src: '', type: 'audio/mpeg' }
  ];
  const audio = document.getElementById('myAudio');
  audio.volume = 0.02;
  audio.loop = true;
  
  function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * sources.length);
    const randomSource = sources[randomIndex];
    audio.src = randomSource.src;
    audio.type = randomSource.type;
    audio.play();
  }
  
  playRandomSong();
  
  document.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  
  audio.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
};


function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const clockElement = document.querySelector('.clock');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);


  



