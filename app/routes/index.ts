import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition){
    if (transition.targetName === 'index') {
      return this.transitionTo('authenticated');
    }
  }
});
