import HeaderController from 'discourse/controllers/header';
import HeaderView from 'discourse/views/header';

export default {
  name: 'extend-for-header-links',

  initialize() {
    HeaderController.reopen({
      headerLinks: function () {
        return this.siteSettings.header_links_links.split('|');
      }.property(),
      hideLinks: function () {
        return this.get('showExtraInfo');
      }.property('showExtraInfo')
    });

    //HeaderView.reopen({
    //  showExtra
    //  toggleOutlet: function () {
    //    if (this.get('controller.showExtraInfo')) {
    //      $('.header-after-home-logo').addClass('showing-extra-info');
    //    }
    //  }.observes('controller.showExtraInfo'),
    //});
  }
}