import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),

  trustedHosts: [
    /.*/,
  ],

  headers: Ember.computed('session.authToken', {
    get() {
      let headers = {
        'accept': 'application/hal+json, application/json, */*; q=0.01'
      };
      if (this.get('session.data.authenticated.access_token')) {
        headers['Authorization'] = `Bearer ${this.get('session.data.authenticated.access_token')}`;
      }
      return headers;
    }
  })
});
