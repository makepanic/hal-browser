import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Ember from 'ember';

const {computed, isEmpty} = Ember;

export default OAuth2PasswordGrant.extend({
  clientId: '',
  clientSecret: '',
  serverTokenEndpoint: '',
  refreshAccessTokens: false,

  _clientIdHeader: computed('clientId', 'clientSecret', function() {
    const clientId = this.get('clientId');
    const clientSecret = this.get('clientSecret');

    if (!isEmpty(clientId)) {
      const base64ClientId = window.btoa(`${clientId}:${clientSecret}`);
      return { Authorization: `Basic ${base64ClientId}` };
    }
  }),

  authenticate(identification, password, serverTokenEndpoint, clientId, clientSecret){
    this.setProperties({
      clientId,
      clientSecret,
      serverTokenEndpoint
    });

    return this._super(identification, password);
  }
});
