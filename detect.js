var Detect = {
    browser: function() {
        var n = navigator.userAgent.indexOf(" Edge/") >= 0,
            e = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
            o = "undefined" != typeof InstallTrigger,
            i = (Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, !!window.chrome && !e && !n),
            r = !!document.documentMode;
        return 1 == e ? "Opera" : 1 == o ? "Mozilla Firefox" : 1 == i ? "Google Chrome" : 1 == r ? "Internet Explorer" : 1 == n ? "Microsoft Edge" : void 0
    },
    OS: function() {
        var n = "Unknown OS";
        return -1 != navigator.appVersion.indexOf("Win") && (n = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && (n = "MacOS"), -1 != navigator.appVersion.indexOf("X11") && (n = "UNIX"), -1 != navigator.appVersion.indexOf("Linux") && (n = "Linux"), navigator.userAgent.indexOf("iPhone") >= 0 && (n = "iOS"), navigator.userAgent.indexOf("Android") >= 0 && (n = "Android"), navigator.userAgent.indexOf("Windows Phone") >= 0 && (n = "Windows Phone"), n
    }
};