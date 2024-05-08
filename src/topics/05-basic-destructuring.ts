interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
};

interface Details {
    author: string;
    year: number;
};

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
};

//const song = "New Song";

//DESESTRUCTURACIÓN DE OBJETOS
const {song:anotherSong, songDuration: duration} = audioPlayer
const {details :{author}} = audioPlayer;

console.log("Song: ",anotherSong);
console.log("Author: ", author);
console.log("Durations: ", duration);
console.log("Author: ", audioPlayer.details.author);

//DESESTRUCTURACIÓN DE ARREGLOS
const [,,trunks="Not Found"]: Array<string> = ["Goku", "Vegeta"];

console.error("Personaje 3: ", trunks);

export {};