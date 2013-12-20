(function () {

    var defaults = {
        callback: null,
        message: "Waiting...",
        messageSelector: ".overlay-message",
        overlaySelector: ".overlay"
    };

    function setElements(overlay, opts) {
        overlay.$overlay = $(opts.overlaySelector);
        overlay.$message = $(opts.messageSelector);
    }
    
    function setInitialValues(overlay) {
        overlay.isInitialized = true;
        overlay.isVisible = false;
    }

    function throwErrorIfNotInitialized(overlay) {
        if (!overlay.isInitialized) {
            throw Error("Overlay has not been initialized!");
        }            
    }

    window.overlay = {
        
        hide: function() {
            this.$overlay.hide();
            this.isVisible = false;
            return this;
        },

        initialize: function (opts) {            
            this.options = $.extend(defaults, opts);
            setElements(this, this.options);
            setInitialValues(this);
            return this;
        },

        options: {},

        show: function (opts) {
            throwErrorIfNotInitialized(this);
            var message = (opts && opts.message) || this.options.message;
            this.$message.text(message);
            this.$overlay.show();
            this.isVisible = true;
            if (this.options.callback) {
                this.options.callback();
            }
            return this;
        },

    };

})();