import HeaderController from 'discourse/controllers/header';

export default {
  name: 'extend-for-header-links',

  initialize() {
    HeaderController.reopen({
      headerLinks: function () {
        const links =  this.siteSettings.header_links_add_links.split('|'),
          scriptReg = /<script/;
        let safeLinks = [];
        links.forEach(function(link) {
          if (!scriptReg.test(link)) {
            safeLinks.push(link);
          }
        });
        return safeLinks;
      }.property(),

      hideLinks: function () {
        return this.get('showExtraInfo');
      }.property('showExtraInfo'),

      headerLinksEnabled: function () {
        return this.siteSettings.header_links_enabled;
      }.property()
    });
  }
}