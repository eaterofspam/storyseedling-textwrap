# storyseedling-textwrap
Decrypt text on the storyseedling webnovel site to allow it to wrap on the page properly, function with text to speech, and allow machine translation.

# Usage
To download the extension, hit the green code button and download zip. Then unzip the folder in some convenient place.

This is a manifest v3 web extension.

To install in Chrome, you can follow the instructions [here](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked). That is,
- go to releases and download the `storyseedling-textwrap.zip`
- extract the content from the zip file into a folder called `storyseedling-textwrap`
- Go to `manage extensions` in your browser
- Enable Developer mode
- Click on `Load unpacked`
- Select `storyseedling-textwrap`

To install in Firefox, you can follow the instructions [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing). That is,
- go to releases and download the `storyseedling-textwrap.zip`
- extract the content from the zip file into a folder called `storyseedling-textwrap`
- Enter `about:debugging` into the url bar
- Click the This Firefox option
- Click the Load Temporary Add-on button
- Select any file except in the `storyseedling-textwrap` folder.

To install the extension on mobile (only tested it for the mobile version of Microsoft Edge Canary)
- download Microsoft Edge Canary (specifically the canary version... this does not work on the normal or the beta version of edge) from the playstore
- go to the github page under releases and download StorySeedling.decryptor.crx
- open edge canary and go into your settings -> click on About Microsoft Edge -> tap on Current Version a few times until you get notified that the Developer options are now enabled
- go back into your settings, scroll down and click on developer options
- click on Extension install by crx
- click on Choose .crx file
- select StorySeedling.decryptor.crx from your files
- click on OK
- you get asked if you want to add storyseedling-textwrap
- click on Add
