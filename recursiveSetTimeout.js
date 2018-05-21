if (Session.get("getInterval")){
    clearInterval(Session.get("getInterval"));
}
var location = Template.currentData().location;
var timeOut= 10000;

/**Retrieves social proof data to display in popup
* @param method The name of the method being called
* @param the type of activity
* @param callback
*/
setTimeout(function openPopup() {
    Meteor.call('getPopUp', location, function(err, result){
        if (result) {
            Session.set('showPopUp', result.popup);
            Session.set('popupStats', result.popCounter);

            if (result.popup){
                timeOut = result.popup.timer;  
            }
            //NB: slideDown() = show
            $("#mainPopUp").slideDown();
            setTimeout(function() {
                //NB: slideUp() = hide
                $("#mainPopUP").slideUp();
            }, 10000);
        } else if (err) {
            console.error(err);
        }  
    });
    setTimeout(openPopup, timeOut);
}, 0); 