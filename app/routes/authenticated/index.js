import Ember from 'ember';
import ENV from 'hal-browser/config/environment';

export default Ember.Route.extend({
  beforeModel(transition){
    if (transition.targetName === 'authenticated.index') {
      const url = transition.queryParams.defaultUrl ? transition.queryParams.defaultUrl : '/';
      return this.transitionTo('authenticated.inspect', url);
    }
  }
});
