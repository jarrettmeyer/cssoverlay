describe("Overlay", function () {

    describe("hide", function() {
    }); // hide

    describe("initialize", function () {
        var result;

        beforeEach(function () {
            result = overlay.initialize();
        });


        it("can be initialized", function() {            
            expect(result).toBeDefined();
        });

        it("has a default value for message selector", function () {
            expect(result.options.messageSelector).toBe(".overlay-message");
        });

        it("has a default value for overlay selector", function() {
            expect(result.options.overlaySelector).toBe(".overlay");
        });

        it("sets an overlay element", function () {
            expect(result.$overlay).toBeDefined();            
        });

        it("sets isInitialized to true", function () {            
            expect(result.isInitialized).toBeTruthy();
        });

        it("sets isVisible to false", function() {
            expect(result.isVisible).toBeFalsy();
        });

    }); // initialize

    describe("show", function () {

        var defaultMessage;

        beforeEach(function () {
            defaultMessage = "Testing: " + Date.now().toString();
            overlay.initialize({ message: defaultMessage });
        });

        afterEach(function() {
            if (overlay.isVisible) {
                overlay.hide();
            }
        });

        it("can be shown", function () {            
            overlay.show({ message: "This is a test" });
        });
        
        it("sets isVisible to true", function () {
            overlay.show({ message: "This is a test" });
        });
        
        it("sets message text", function () {
            var msg = "Testing... " + Date.now().toString();
            overlay.show({ message: msg });
            expect($(".overlay-message").text()).toBe(msg);
        });
        
        it("uses a default message", function () {
            overlay.show();
            expect($(".overlay-message").text()).toBe(defaultMessage);
        });

    });

});