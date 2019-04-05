# nuCloud Map Embed Block Plugin

Add nuCloud maps to your Gutenberg enabled WordPress website with this custom block. Usage of these blocks requires an account at https://map.nucloud.com to manage your interactive map.

![Editing a map in a Gutenberg block](https://i.imgur.com/uxbyr8m.png)

## Installation

![Download the current release zip file](https://i.imgur.com/zUy0nzM.jpg)

To install, use the *Clone or Download* button on the repository homepage at GitHub to grab the zip file for the latest release. In your site's backend, go to *Plugins* > *Add New* and click the *Upload* button.

![Installing a plugin from a zip file](https://i.imgur.com/rJ2KeAr.jpg)

From there, use the *Choose File* button to select the downloaded zip file on your computer, and finish by clicking *Install Now*. Once it has been installed, activate the plugin as usual.

### Upgrading

This plugin includes a library that will periodically check GitHub for release updates. Upgrading to the latest version is as easy as clicking the "Update Now" link when you are notified that there is an update. This retains the normal update behavior of WordPress, and requires no special or different steps from upgrading any other plugin or theme.

![Click 'Update Now' to upgrade](https://i.imgur.com/kM2Gm2f.jpg)

Map embeds are rendered via a server-side function on page load, so you don't have to worry about plugin updates breaking your existing blocks when editing in the future.

## Usage

## Development Documentation

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

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
