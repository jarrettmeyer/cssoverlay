(function() {

    if (!window.app) {
        window.app = {};
    }

    var defaults = {
        message: "Hello, World!",
        testSelector: "#overlay-test"
    };

    function onOverlayShown() {
        setTimeout(function() {
            overlay.hide();
            console.log("Hiding overlay.");
        }, 5000);
    }

    window.app.HomeIndexView = (function () {

        function HomeIndexView(opts) {
            this.options = $.extend(defaults, opts);
            this.$test = $(this.options.testSelector);
            overlay.initialize({ callback: onOverlayShown });
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