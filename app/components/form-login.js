import Ember from 'ember';
import ENV from 'hal-browser/config/environment';

const {Component, inject:{service}} = Ember;

export default Component.extend({
  session: service(),

  classNames: ['form-login'],

  grantTypes: ['password', 'client_credentials'],
  oauthServer: '',
  grantType: 'client_credentials',
  clientId: '',
  clientSecret: '',
  username: '',
  password: '',

  authenticate(){
    const {
      grantType,
      clientId,
      clientSecret,
      username,
      password,
      oauthServer
    } = this.getProperties('grantType', 'clientId', 'clientSecret', 'username', 'password', 'oauthServer');
    const authenticator = grantType === 'password' ? 'oauth2-password' : 'oauth2-clientcredentials';

    return this.get('session').authenticate(`authenticator:${authenticator}`, username, password, oauthServer, clientId, clientSecret)
      .catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
  },

  actions: {
    submit(){
      return this.authenticate();
    }
  }
});
