var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
	document.addEventListener("offline", onOffline, false);

function onOffline() {
$('#BtnEnt').hide();
$('#inetOff').show();
ref.close();
}
	    
//document.addEventListener("online", onOnline, false);
//function onOnline() {
//var ref = cordova.InAppBrowser.open('http://elecor.controlsoft.kz/app/?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
//$('#inetOff').hide();
//$('#BtnEnt').show();
//}

if(localStorage.ipush){}
else{
$('.loader1').css('height',screen.width+'px');
$('.loader1').fadeIn();
}
		


$("#BtnEnt" ).click(function() {
var ref = cordova.InAppBrowser.open('http://por.smartekibastuz.kz/fr7/?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
});
        
function didReceiveRemoteNotificationCallBack(jsonData) {
var ref = cordova.InAppBrowser.open('http://por.smartekibastuz.kz/fr7/', '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
}
function didOpenRemoteNotificationCallBack(jsonData) {
var ref = cordova.InAppBrowser.open('http://por.smartekibastuz.kz/fr7/', '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
}        
        //Настройка ПУШЕЙ ДЛЯ АЙФОНА
        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = true;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;

        //ПОДКЛЮЧЕНИЕ ПУШЕЙ 
           window.plugins.OneSignal
          .startInit("eb7e9a68-87cc-4f33-bf09-f10cf9a8c350")
          .handleNotificationReceived(didReceiveRemoteNotificationCallBack)
          .handleNotificationOpened(didOpenRemoteNotificationCallBack)
		  .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
          .iOSSettings(iosSettings)
          .endInit();
        
window.plugins.OneSignal.getIds(function(ids) {
ipush = ids.userId;
$('.loader1').hide();
localStorage.ipush=ipush;
var ref = cordova.InAppBrowser.open('http://por.smartekibastuz.kz/fr7/?push='+ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
$('.loader2').show();
});
        

    }
};

app.initialize();
