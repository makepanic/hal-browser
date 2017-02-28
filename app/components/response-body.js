/* global Prism */
import Ember from 'ember';

const {computed, String:{htmlSafe}} = Ember;

export default Ember.Component.extend({
  json: {},

  formattedJSON: computed('json', function(){
    const stringified = JSON.stringify(this.get('json'), null, '  ');
    const html = Prism.highlight(stringified, Prism.languages.json);
    return htmlSafe(html);
  })
});
