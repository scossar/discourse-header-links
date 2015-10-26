## Discourse Extra Header Links

This plugin is for adding extra links to the Discourse header's header-after-home-logo
plugin outlet.

### Installation

Follow the [Install a Plugin](https://meta.discourse.org/t/install-a-plugin/19157) howto, using
`git clone https://github.com/scossar/discourse-header-links` as the plugin command.

Once you've installed it, review the settings under plugins in the admin section of your
forum.

### Use

To add links to the header, visit the plugin's settings page. Links can be added
to the 'add header links' input box.

![alt tag](https://cloud.githubusercontent.com/assets/2975917/10745802/0e602c0a-7c02-11e5-95b4-0026a1d66d38.png)

![alt tag](https://cloud.githubusercontent.com/assets/2975917/10745812/1c94e090-7c02-11e5-8650-95184247ce74.png)

![alt tag](https://cloud.githubusercontent.com/assets/2975917/10745814/2042199c-7c02-11e5-8fd0-f4b4d266cc04.png)

It is easiest to format your links in a text editor and then copy and paste them into the input.

### Style the links

The header links `ul` has the class `.extra-header-links`, the individual links
have the class `.header-link`. Style them in the Discourse custom html/css area.

### Media queries

On narrow screens, adding extra links to the header will cause problems. You will
probably need to put the extra links inside of a media query. Here is an example
of how to do that:
```css
.extra-header-links {
    display: none;
    @media (min-width: 700px) {
        display: inline-block;
    }
}
```
