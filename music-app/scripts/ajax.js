function loadSongsOldWay(singerName){
    var xhr = new XMLHttpRequest(); // Object create
    xhr.onreadystatechange = function(){ // Listener
        console.log(this.readyState);
        if(this.readyState==4 && this.status ==200){
           let json =  this.responseText;
           let songs =JSON.parse(json) ; // JSON string to object
           // console.log(songs.results);
           printSongs(songs.results);
        }
    }
    // Request Fill (Method + URL)
    xhr.open('GET','https://itunes.apple.com/search?term=sonu+nigam&limit=25');
    xhr.send(); // request send
}

loadSongsOldWay('SonuNigam');

function loadSongs(singerName){
    const URL = `https://itunes.apple.com/search?term=${singerName}&limit=25`;
    const promise = fetch(URL);
    const options = {
        method:'POST',
        body:JSON.stringify(userInfo),
        headers:{Authorization:'A1111'}
    };
    const  userInfo = {userid:'amit', password:'1111'};
    //const promise = fetch(URL, options);
    // fetch(URL).then(response=>{
    //     response.json().then(data=>{

    //     }).catch(err=>{

    //     })
    // }).catch(err=>{

    // })
    promise.then(response=>{
        const pr = response.json();
        pr.then(data=>{
            printSongs(data.results);
                console.log('Data is ',data.results[2].previewUrl);
        }).catch(err=>{
            console.log('Invalid JSON ', err);
        }).catch(err=>{
            console.log('Server Error ', err);
        })
    })
}
//loadSongs('Sonu Nigam');

function printSongs(allSongs){
    const div = document.querySelector('#songs');
    allSongs.forEach(song=>{
        div.appendChild(printOneSong(song));
    })

}
function printOneSong(song){
    const songDiv = document.createElement('div');
   const titleDiv =  document.createElement('div');
   titleDiv.innerText= 'Artist Name '+song.artistName;
   titleDiv.innerText = titleDiv.innerText + song.collectionName;
   const image = document.createElement('img');
   image.src  = song.artworkUrl100;
   songDiv.appendChild(image);
   songDiv.appendChild(titleDiv);
   songDiv.appendChild(audioPlayer(song));
   return songDiv;
}

function audioPlayer(song){
    const audio = document.createElement('audio');
    audio.src = song.previewUrl;
    audio.controls = true;
    audio.type= 'audio/mp4';
    return audio;

}