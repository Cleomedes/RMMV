/*
    Timed Trial by Yuuta Kirishima
*/

/*:
 * @plugindesc MV Timed Trial
 * @author Yuuta Kirishima 
 *
 * 
 * @param Play time
 * @desc The amount of time the player gets to player in minutes
 * @default 15
 * 
 * @param DisplayMessageEnd
 * @desc If true displays a message that the timed trial has ended at the end of the game.
 * @default true 
 * 
 * @param TrialBeginMessage
 * @desc Specify the message displayed on trial begin.
 * @default This is a Timed Trial, your session will end in 15 minutes. Thanks for playing!
 * 
 * @param TrialEndMessage
 * @desc Specify the message displayed on trial end.
 * @default Trial Ended! Thanks for playing!  
 * 
 * @param RunCommonEventOnEnd
 * @desc If true runs set common event on trial end.
 * @default true
 * 
 * @param Common Event
 * @desc Specify common event id to run if Run Common Event is true
 * @default 1
 * 
 */
var parameters = PluginManager.parameters("TimedTrial");
var TrialBeginMessage = parameters['TrialBeginMessage'];
var TrialEndMessage = parameters['TrialEndMessage'];
var Display_time_e = parameters['DisplayMessageEnd'];
var spec_common_event = parameters['Common Event'];
var runOnEnd = parameters['RunCommonEventOnEnd'];
var Play_Minutes = parameters['Play time'];
var Real_time = Play_Minutes * 60000; // convert minutes to miliseconds
  alert(TrialBeginMessage)
    function timedtrial() {
        if (Display_time_e == "true") {
            $gameMessage.setBackground(1)
            $gameMessage.setPositionType(1);
            $gameMessage.add(TrialEndMessage);
        }
        if (runOnEnd == "true"){
            $gameTemp.reserveCommonEvent(spec_common_event);
        }
        window.close();
    }
    // Create timer
    window.setTimeout(function () {
        timedtrial();
    }, Real_time);
