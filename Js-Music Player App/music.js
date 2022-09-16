class Music{
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName(){
        return `${this.title} - ${this.singer}`;
    }
}

const musicList = [
    new Music('Boşver', 'Nilüfer', '1.jpeg', '1.mp3'),
    new Music('Buda Geçer', 'Yalın', '2.jpeg', '2.mp3'),
    new Music('Aramızda Uçurumlar', 'Suat Suna', '3.jpeg', '3.mp3'),
    new Music('Sezenler Olmuş', 'Sura İskender', '4.jpeg', '4.mp3'),
    new Music('Unutama Beni','Can Gox', '5.jpeg', '5.mp3'),
]