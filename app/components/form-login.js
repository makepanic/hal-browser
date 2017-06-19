import Ember from 'ember';
import Configuration from 'hal-browser/utils/configuration';

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
  entryPoint: Configuration.entryPoint,

  authenticate(){
    const {
      grantType,
      clientId,
      clientSecret,
      username,
      password,
      oauthServer,
      entryPoint,
    } = this.getProperties('grantType', 'clientId', 'clientSecret', 'username', 'password', 'oauthServer', 'entryPoint');
    const authenticator = grantType === 'password' ? 'oauth2-password' : 'oauth2-clientcredentials';

    if (entryPoint.length) {
      Configuration.entryPoint = entryPoint;
    }

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
