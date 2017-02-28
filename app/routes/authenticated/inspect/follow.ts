import Ember from 'ember';
import {without} from "../../../utils/object";

const {set, get} = Ember;

export default Ember.Route.extend({
  model({link_name}){
    const resource = this.modelFor('authenticated.inspect');
    const link: Link = resource.response._links[link_name];

    set(link, 'name', link_name);

    return link;
  },

  setupController(ctrl, model) {
    const resource = this.modelFor('authenticated.inspect');

    ctrl.set('model', model);
    ctrl.set('data', without(get(resource, 'response'), ['_links']));
  }
});
