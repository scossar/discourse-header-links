import HeaderController from 'discourse/controllers/header';
import HeaderView from 'discourse/views/header';

export default {
  name: 'extend-for-header-links',

  initialize() {
    HeaderController.reopen({
      headerLinks: function () {
        const links =  this.siteSettings.add_header_links.split('|'),
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
      }.property('showExtraInfo')
    });
  }
}