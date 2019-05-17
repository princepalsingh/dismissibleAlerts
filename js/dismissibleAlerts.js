(function ($) {

    $.fn.dismissibleAlerts = function () {

        // This is the easiest way to have default options.
        // var settings = $.extend({
        //     // These are the defaults.
        //     color: "#556b2f",
        //     backgroundColor: "white"
        // }, options);

        var timeOut = 1000;
        var self = this;

        if ($(this).prev('.alert-css').length > 0) {
            setTimeout(function () {
                var position = $(self).prev('.alert-css').position();
                var top = position.top + $(self).prev('.alert-css').height() + 30;
                $(self).css({ 'right': '10px', 'top': top + 'px' });
            }, timeOut);
            timeOut += timeOut;
        } else {
            $(this).css({ 'right': '10px' });
        }

        // $(".alert-css").each(function () {
        //     if ($(this).prev('.alert-css').length > 0) {
        //         var self = this;
        //         setTimeout(function () {
        //             var position = $(self).prev('.alert-css').position();
        //             var top = position.top + $(self).prev('.alert-css').height() + 30;
        //             $(self).css({ 'right': '10px', 'top': top + 'px' });
        //         }, timeOut);
        //         timeOut += timeOut;
        //     } else {
        //         $(this).css({ 'right': '10px' });
        //     }
        // });
        var disposeCount = $('.alert-css').length * 1000;
        $(".alert-css").each(function () {
            var self = this;
            setTimeout(function () {
                $(self).alert('close');
            }, disposeCount);
            disposeCount += 1000;
        });

        return this;

    };

}(jQuery));