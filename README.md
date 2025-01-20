# Syrian Flag Replacer

A browser extension that replaces the old regime flag with the flag of the Syrian revolution.

## About This Flag

While Syria's future governance remains to be determined at the time of this extension's creation, the revolution flag represents the aspirations and dreams of free Syrians. It stands as a symbol of the Syrian people's struggle for liberty and dignity, and honors the immense sacrifices made over many years in the pursuit of a free Syria.

## What It Does

This extension automatically replaces any instance of the old regime flag () with the revolution flag across all websites, including:
- Social media (Twitter/X, Bluesky, etc.)
- News websites
- Any other webpage

## Installation Instructions for Beginners
[Arabic instructions for install] تعليمات التثبيت بالعربي ([link](https://ubadahsabbagh.com/ar/flag.html))

### Firefox Users
The easiest way is here: [https://addons.mozilla.org/en-US/firefox/addon/syrian-flag-replacer/](https://addons.mozilla.org/en-US/firefox/addon/syrian-flag-replacer/)
Alternatively: 
1. Extract/unzip the `firefox.zip` file you downloaded
2. Open Firefox and type `about:debugging` in the address bar
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on"
5. Navigate to the folder you just extracted and select the `manifest.json` file

Note: In Firefox, you'll need to reload the extension each time you restart the browser. This is a limitation of self-distributed extensions.

### Chrome Users
1. Extract/unzip the `chrome.zip` file you downloaded
2. Open Chrome and type `chrome://extensions` in the address bar
3. Turn on "Developer mode" in the top right corner
4. Click "Load unpacked" in the top left
5. Select the folder you just extracted

Note: In Chrome, you'll need to enable Developer mode to keep using the extension. You may see warnings about using developer mode extensions - this is normal for self-distributed extensions.

## Technical Details

This extension is available in two versions:
- Firefox version: Uses Manifest V2 (Firefox requirement)
- Chrome version: Uses Manifest V3 (Chrome requirement)

Both versions include:
- MutationObserver to handle dynamically loaded content
- Universal URL matching to work across all websites
- Efficient node traversal for performance
- CSS scaling to match surrounding text size

## Troubleshooting

If the flag replacement stops working:
- Firefox users: Go back to `about:debugging` and reload the extension
- Chrome users: Go to `chrome://extensions` and click the refresh icon on the extension

If you see the old flag on Twitter/X:
- Refresh the page
- Make sure the extension is still loaded (see above)

## Contributing

Found a bug or want to suggest an improvement? Please open an issue on GitHub.

## Art Credit

The revolution flag image used in this extension was created by [Mayas on emoji.gg](https://emoji.gg/user/mayas).

## License

MIT License 
