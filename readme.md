# CSS Overlay

CSS overlay provides a friendly way to provide "overlay" functionality to your web site. I frequently use this technique while data is POSTing to the server and I want to prevent the user from doing anything on the page until a response is received.

Details about the NuGet packages can be found on [NuGet.org](https://www.nuget.org/packages/CSSOverlay).

## HTML

You'll need the following HTML in your page.

    <div class="overlay">
        <div class="overlay-container">
            <span class="overlay-spinner"></span>
            <span class="overlay-message"></span>
        </div>
    </div>

This file will be copied to your `~/Views/Shared` folder automatically as a partial view. You will need to include the partial view in your layout in the following manner.

    @Html.Partial("_Overlay")

## Usage

Simply initialize your overlay. Any time after the overlay file has been added, add the following call to your page.

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
    