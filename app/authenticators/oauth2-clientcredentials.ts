import Oauth2Base from './oauth2-base';

export default Oauth2Base.extend({
  makeRequest(serverTokenEndpoint, data){
    data['grant_type'] = 'client_credentials';
    delete data.username;
    delete data.password;

    return this._super(...arguments);
  },

  authenticate(identification, password, serverTokenEndpoint, clientId, clientSecret){
    return this._super('', '', serverTokenEndpoint, clientId, clientSecret);
  }
});
