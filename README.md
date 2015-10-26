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
to the 'header links links' input box. It is easiest to format your links in a
text editor and then copy and paste them into the input.

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
