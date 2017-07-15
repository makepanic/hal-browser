import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
  link: computed.alias('model'),

  resource: undefined,
  modes: [],
  expand: {},
  data: {},
  method: 'GET',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  methodsWithBody: ['POST', 'PUT'],

  variables: computed('link.href', function () {
    return new UriTemplate(this.get('link.href')).varNames;
  }),

  actions: {
    close(){
      return this.transitionToRoute('authenticated.inspect');
    },
    followExpanded(){
      const expand = this.get('expand');
      const href = this.get('link.href');
      const data = this.get('data');

      const url = new UriTemplate(href).fill(expand);
      const method: HttpMethod = this.get('method');
      const body = ['PUT', 'POST'].includes(method) ? JSON.stringify(data) : '';

      return this.transitionToRoute('authenticated.inspect', url, {
        queryParams: {
          method,
          body,
          t: Date.now()
        }
      });
    }
  }
});
