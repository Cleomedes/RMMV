/*
  Mute BGM on minimize
*/
/*:
 * @plugindesc Mute BGM on minimize
 * @author Yuuta Kirishima 
 *
 * @param Fade out frames
 * @desc The amount of frames until completely stopped
 * @default 1
 *
 * 
 */
var parameters = PluginManager.parameters("MuteMinimize");
document.addEventListener("visibilitychange", function() {
  if(document.hidden == true){
      $gameSystem.saveBgm();
      AudioManager.fadeOutBgm(parameters["Fade out frames"]);
  } else {
      $gameSystem.replayBgm();
  }
}, false);

