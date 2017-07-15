import LocalStorageStore from 'ember-simple-auth/session-stores/cookie';

export default LocalStorageStore.extend({
  key: 'hal-browser-session'
});
