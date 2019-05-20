(function ($) {

    $.dismissibleAlerts   = function(opts) { install(opts); };

    function createAlerts(settings){
        var timeOut = settings.showTimeInterval;
        var self = this;

        $("."+settings.className).each(function () {
            if ($(this).prev("."+settings.className).length > 0) {
                var self = this;
                setTimeout(function () {
                    var position = $(self).prev("."+settings.className).position();
                    var top = position.top + $(self).prev("."+settings.className).height() + 30;
                    $(self).css({ 'right': '10px', 'top': top + 'px' });
                }, timeOut);
                timeOut += timeOut;
            } else {
                $(this).css({ 'right': '10px', 'top': '100px' });
            }
        });
    }

    $.fn.reArrangeAlerts = function(settings){
        console.log('hi');
        $("."+settings.className).each(function () {
            if ($(this).prev("."+settings.className).length > 0) {
                var self = this;
                var position = $(self).prev("."+settings.className).position();
                var top = position.top + $(self).prev("."+settings.className).height() + 30;
                $(self).css({ 'right': '10px', 'top': top + 'px' });
                // setTimeout(function () {
                // }, timeOut);
                // timeOut += timeOut;
            } else {
                $(this).css({ 'right': '10px','top':'100px' });
            }
        });
    }

    function disposeAlerts(settings){
        var disposeCount = $("."+settings.className).length * settings.dismissIntervalTime;
        $("."+settings.className).each(function () {
            var self = this;
            setTimeout(function () {
                $(self).alert('close');
                // $(self).reArrangeAlerts(settings);
            }, disposeCount);
            disposeCount += 1000;
        });

    }
    
    function install(options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            className: "",
            showTimeInterval: 1000,
            dismissIntervalTime : 1000
        }, options);

        createAlerts(settings);

        disposeAlerts(settings);

        $('.'+settings.className).on('closed.bs.alert', function () {
            // do something...
            $(this).reArrangeAlerts(settings);
        })
        return this;

    };

}(jQuery));


// if ($(this).prev('.alert-css').length > 0) {
//     setTimeout(function () {
//         var position = $(self).prev('.alert-css').position();
//         var top = position.top + $(self).prev('.alert-css').height() + 30;
//         $(self).css({ 'right': '10px', 'top': top + 'px' });
//     }, timeOut);
//     timeOut += timeOut;
// } else {
//     $(this).css({ 'right': '10px' });
// }