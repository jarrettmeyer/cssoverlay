# CSS Overlay

CSS overlay provides a friendly way to provide "overlay" functionality to your web site. I frequently use this technique while data is POSTing to the server and I want to prevent the user from doing anything on the page until a response is received.

## HTML

You'll need the following HTML in your page.

    <div class="overlay">
        <div class="overlay-container">
            <span class="overlay-spinner"></span>
            <span class="overlay-message"></span>
        </div>
    </div>

If a `~/Views/Shared` folder exists in your project, then an `_Overlay.cshtml` partial view will be copied into this folder. Otherwise, you'll need to write your own.

I usually put the above into a `~/Views/Shared/_Overlay.cshtml` partial view, then include the partial view in my layout.

## Usage

Simply initialize your overlay. No, I don't do it for you. Any time after the overlay file has been added, add the following call to your page.

    overlay.initialize();    

To show the overlay...

    overlay.show({ message: "Hello, World!" });

To hide the overlay...

    overlay.hide();

## Initialization Options

The `initialize()` method takes an optional object parameter. The following values can be set.

| Key              | Default Value     | Description |
|------------------|-------------------|-------------|
| debug            | true              | Set to true to have messages written to the console. |
| message          | Waiting...        | Set the default message. |
| messageSelector  | .overlay-message  | The CSS selector for the overlay message. |
| onShow           | null              | Callback executed after `show()` |
| overlaySelector  | .overlay          | CSS selector for the overlay. |
    