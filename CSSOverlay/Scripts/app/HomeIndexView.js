(function() {

    if (!window.app) {
        window.app = {};
    }

    var duration = 1000;

    var defaults = {
        message: "Hello, World!",
        testSelector: "#overlay-test"
    };

    function onOverlayShown() {
        setTimeout(function() {
            overlay.hide();            
        }, duration);
    }

    window.app.HomeIndexView = (function () {

        function HomeIndexView(opts) {
            this.options = $.extend(defaults, opts);
            this.$test = $(this.options.testSelector);
            overlay.initialize({ onShow: onOverlayShown });
            duration = opts.duration || 30000;
            this.bindEvents();
        }

        HomeIndexView.prototype.bindEvents = function () {
            this.$test.on("click", this.onTestClick.bind(this));
            console.log("app.HomeIndexView: Events binded.");
        };

        HomeIndexView.prototype.onTestClick = function (e) {
            console.log("app.HomeIndexView: Test clicked.");
            e.preventDefault();
            overlay.show({ message: this.options.message });
            return false;
        };

        return HomeIndexView;
    })();

})();