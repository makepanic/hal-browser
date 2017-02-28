/* global Prism */
import Ember from 'ember';

const {computed, String:{htmlSafe}} = Ember;

export default Ember.Component.extend({
  header: [],

  formattedHeader: computed('header.[]', function(){
    const stringified = this.get('header');
    const html = Prism.highlight(stringified, Prism.languages.yaml);
    return htmlSafe(html);
  })
});
