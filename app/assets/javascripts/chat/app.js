var App;
App = (function($) {
    "use strict";
    var handleNumberSignLinks, handleSidebarChat, handleSidebarOptions, ieVersion, init, isTouchDevice;
    ieVersion = false;
    if (/MSIE\s([\d.]+)/.test(navigator.userAgent)) {
        ieVersion = Number(RegExp.$1);
    } else {
        ieVersion = false;
    }
    isTouchDevice = function() {
        return!!("ontouchstart"in window) || !!("onmsgesturechange"in window);
    };
    init = function() {
        handleNumberSignLinks();
        handleSidebarOptions();
        handleSidebarChat();
    };
    handleNumberSignLinks = function() {
        $("[href|='#']").click(function(e) {
            e.preventDefault();
        });
    };
    handleSidebarOptions = function() {
        var dividersTrigger, sidebar, wraper;
        sidebar = $(".social-sidebar");
        wraper = $(".wraper");
        return dividersTrigger = $("#panel #sidebar-dividers");
    };
    handleSidebarChat = function() {
        if (typeof chatboxManager !== 'undefined') {
            chatboxManager.init({sender: {username: "Me", lastname: "Me"}});
            $(".chat-users .user-list li > a").click(function(event, ui) {
                var id;
                id = $(this).attr("data-userid");
                chatboxManager.addBox(id, {title: "chatbox" + id, firstname: $(this).attr("data-firstname"), lastname: $(this).attr("data-lastname"), status: $(this).attr("data-status")});
                event.preventDefault();
            });
            return;
        }
    };
    return{init: init, ieVersion: ieVersion, isTouchDevice: isTouchDevice};
})(jQuery);