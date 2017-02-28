import Ember from 'ember';

const {inject:{service}} = Ember;

export default Ember.Route.extend({
  ajax: service(),

  queryParams: {
    body: {
      refreshModel: true
    },
    method: {
      refreshModel: true
    }
  },

  model({resource_url, method, body}){
    const requestOptions = {
      type: method
    };

    if (method === 'PUT' || method === 'POST') {
      requestOptions.dataType = 'json';
      requestOptions.contentType = 'application/hal+json';
      requestOptions.data = body;
    }

    return this.get('ajax')
      .raw(resource_url, requestOptions)
      .catch(({jqXHR, response, textStatus}) => ({jqXHR, response, textStatus}))
      .then(({jqXHR, response, textStatus}) => {
        const header = jqXHR.getAllResponseHeaders();

        return {response, header, method, body, status: jqXHR.status, textStatus, url: resource_url};
      });
  }
});
