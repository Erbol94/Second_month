// // class dog {
// //     constructor(weight, height, color) {
// //         this.weight = weight;
// //         this.height = weight;
// //         this.color = weight;
// //
// //
// //     }
// // }
// //
// // const rex = new dog(40,1.5, 'violet');
// // const bobik = new dog(3,30, 'yellow');
// //
// // console.log(rex);
// // console.log(bobik);
//
// //1-Абстрактный класс
//
// class animal {
//     constructor(type, gender, color, voiceText){
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
//     voice(){
//         console.log(this.voiceText)
//     }
// }
//
// class Dog extends animal {
//     constructor (type, gender, color, voiceText, name, purposeText){
//        super(type,color,gender,voiceText);
//        this.name = name;
//        this.purposeText = purposeText;
//     }
//     purpose() {
//         console.log(`Dog: ${this.name}\nPurpose: ${this.purposeText}`)
//     }
// }
//
// const rex = new Dog (
//     'хищник',
//     'male',
//     'pink',
//     'gaf gaf!',
//     'Tuzik',
//     'security'
// );// Обьект клааса дог
//
// // console.log(rex);
// rex.purpose();
//
// const bublik = new Dog (
//     'domestic',
//     'fevale',
//     'red',
//     'tyaf tyaf!',
//     'bublik',
//     'Daggy'
// );
// bublik.purpose();
// // console.log(bublik);

class home {
    constructor(home, number, podezd, color, roof){
        this.home = home,
        this.number = number,
        this.podezd = home,
        this.color = home,
        this.roof = home
    }
}

class flat extends home {
    constructor (home, number, podezd, color, roof, floor, door, window, rooms, floor1, wall, ceiling){
        super(home, number, podezd, color, roof, floor, door, window, rooms, floor1, wall, ceiling);
        this.floor = floor;
        this.door = door;
        this.window = window;
        this.rooms = rooms;
        this.floor1 = floor1;
        this.wall = wall;
        this.ceiling = ceiling;
    }
    call(){
        console.log(`Kvartira: ${this.floor}\nOkno:${this.window}\nDver:${this.door}\nKomnaty:${this.rooms}\nPodezd:${this.floor1}\nSteny:${this.wall}\nPotolok:${this.ceiling}`)
    }
}

const mainHome = new flat(
    'Big',
    '8',
    '3',
    'White',
    'black',
    'beton',
    'iron',
    'plastic',
    'five',
    'wooden',
    'kirpich',
    'white'
);
// console.log(mainHome);
mainHome.call();