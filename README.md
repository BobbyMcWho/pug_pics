# Pug Pics
This is an example of a chrome popup extension, that calls out to an external api, then displays the image in the popup. Read the manifest.yaml for more information about settings.

## Releasing
Run `script/generate_manifest` to update the `manifest.json` based on what is in `manifest.yaml`. You should update the version in `manifest.yaml` as needed.

Package the extension by opening Chrome, navigating to `chrome://extensions`, turning developers tools on, and clicking "Pack Extension".

You can also run this modify this extension farther by loading it unpacked from the `chrome://extensions` page.

## Credit
Thanks to https://dogs.ceo for the dog api.