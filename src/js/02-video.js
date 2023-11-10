import Player from '@vimeo/player';
import { saveToLS, loadFromLS } from './helpers';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
function saveCurrentTime(event) {
  let seconds = event.seconds;
  const key = 'videoplayer-current-time';
  const value = seconds;
  saveToLS(key, value);
}
player.on('timeupdate', throttle(saveCurrentTime, 1000));
let currentTime = loadFromLS('videoplayer-current-time');
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
