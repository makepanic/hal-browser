import Ember from 'ember';

const {inject:{service}, computed, get, isArray} = Ember;

export default Ember.Controller.extend({
  ajax: service(),

  queryParams: ['method', 'body'],
  method: 'GET',
  body: '',

  modes: [],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  jsonBody: computed('body', function () {
    const body = this.get('body');
    let jsonBody;

    try {
      jsonBody = JSON.parse(body);
    } catch (e) {
      jsonBody = {};
    }

    return jsonBody;
  }),

  links: computed('model.response', function () {
    let {_links} = this.get('model.response');

    if (typeof _links !== 'object') {
      _links = {};
    }

    return Object.keys(_links).map(linkName => {
      return {
        name: linkName,
        ..._links[linkName]
      }
    });
  }),

  embedded: computed('model.response', function () {
    let {_embedded} = this.get('model.response');

    if (typeof _embedded !== 'object') {
      _embedded = {};
    }

    return Object.keys(_embedded)
      .filter(modelName => _embedded.hasOwnProperty(modelName))
      .map(modelName => {
        let embeddedList = _embedded[modelName];

        if (!isArray(_embedded[modelName])) {
          embeddedList = [_embedded[modelName]];
        }

        return ({
          name: modelName,
          embedded: embeddedList
            .filter(resource => get(resource, '_links.self'))
            .map((resource, idx) => {
              let {_links} = resource;

              if (typeof _links !== 'object') {
                _links = {};
              }

              return {
                name: `${modelName}[${idx}]`,
                ..._links['self']
              };
            })
        });
      });
  }),

  actions: {
    followLink(link){
      this.transitionToRoute('authenticated.inspect.follow', link.name);
    },
    followHref(link) {
      this.transitionToRoute('authenticated.inspect', link.href);
    },
    openUrl(url) {
      this.transitionToRoute('authenticated.inspect', url);
    }
  }
});
