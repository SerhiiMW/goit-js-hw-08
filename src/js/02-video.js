import player from '@vimeo/player';

const iframe = document.querySelector('iframe');
// const vimeo = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

console.log(player);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// player.on('timeupdate', function (data) {
//     data = {
//     duration: 0,
//     percent: 0,
//     seconds: 0
// }
// });

    // const iframe = document.querySelector('iframe');
    // const player = new Vimeo.Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

