# nuCloud Map Embed Block Plugin

Add nuCloud maps to your Gutenberg enabled WordPress website with this custom block. Usage of these blocks requires an account at https://map.nucloud.com to manage your interactive map.

![Editing a map in a Gutenberg block](https://i.imgur.com/uxbyr8m.png)

## Installation

![Download the current release zip file](https://i.imgur.com/zUy0nzM.jpg)

To install, use the *Clone or Download* button on the repository homepage at GitHub to grab the zip file for the latest release. In your site's backend, go to *Plugins* > *Add New* and click the *Upload* button.

![Installing a plugin from a zip file](https://i.imgur.com/rJ2KeAr.jpg)

From there, use the *Choose File* button to select the downloaded zip file on your computer, and finish by clicking *Install Now*. Once it has been installed, activate the plugin as usual.

## Usage

### Find your map ID

When editing your map in the interactive map editor, there are two ways to easily find your map ID. The first is if you go into your map workbench, your map ID will be in the URL of the browser - just identify your ID number in the place of `{MAP_ID}` when looking at the URL `https://map.nucloud.com/maps/{MAP_ID}/markers`. The second way is to look at the embed code for your map. Similarly, just look at your embed code block that looks like: `<iframe width='900' height='851' src='map.nucloud.com/nucloudmap/index.html?map={MAP_ID}' frameborder='0'></iframe>`, and identify the number in place of `{MAP_ID}`.

### Setting Height

The height configuration setting in the block inspector takes a value in pixels or percents of how tall your map should be.

### Open a marker by default

In the *Display Marker* field, you can pass in the ID of a marker on your map that will be open on page load. You can only pass in one marker at a time. If you need to find your marker's ID, just open the marker on your map and click the *Share This Map* link in the popup window. You'll see a URL like `https://your.site/portfolio/?map=5&marker={MARKER_ID}&zoom=2&x=2360.690302&y=-1491.159999`, and just identify the number in place of `{MARKER_ID}`. This parameter follows (standard deep-linking rules)[https://nucloud.com/documentation/deep-linking-to-your-nucloud-map/].

### Open layers by default

Similar to opening a marker, this field allows you to insert a comma separated list of layer names that you would like to have open by default when the page loads. This parameter follows (standard deep-linking rules)[https://nucloud.com/documentation/deep-linking-to-your-nucloud-map/].

### Set a custom map ID

Providing a custom string in the *Custom Element ID* field will apply a specific ID to the `<iframe>` embed of the map. By default, your map will be given the ID `nucloud-map`.

### Upgrading

By default, this plugin includes support for detecting release updates using Andy Fragen's excellent [GitHub Updater plugin](https://github.com/afragen/github-updater). This additional plugin is not required, however.

In the event you don't use GitHub Updater, we have included a library that will periodically check GitHub for release updates. _Note:_ There is currently a [known issue](https://github.com/nuCloud/nucloud-block/issues/3) with this method that prevents you from using the *View Details* link when an update is detected.

In either case, upgrading to the latest version is as easy as clicking the "Update Now" link when you are notified that there is an update. This retains the normal update behavior of WordPress, and requires no special or different steps from upgrading any other plugin or theme.

![Click 'Update Now' to upgrade](https://i.imgur.com/kM2Gm2f.jpg)

Map embeds are rendered via a server-side function on page load, so you don't have to worry about plugin updates breaking your existing blocks when editing in the future.

## Development Documentation

### 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

### 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

### 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.
