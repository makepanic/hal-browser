import Ember from 'ember';

const {computed} = Ember;

const StatusTypes = {
  Ok: 'Ok',
  ClientError: 'ClientError',
  ServerError: 'ServerError'
};

export default Ember.Component.extend({
  classNames: 'resource-overview',
  classNameBindings: ['statusClass'],

  statusType: computed('resource.status', function(){
    const status = this.get('resource.status');

    if (status === 0) {
      return StatusTypes.ClientError;
    }

    if (status < 400) {
      return StatusTypes.Ok;
    } else if (status >= 400 && status < 500) {
      return StatusTypes.ClientError;
    } else if (status >= 500) {
      return StatusTypes.ServerError;
    }
  }),

  statusClass: computed('statusType', function () {
    switch (this.get('statusType')) {
      case StatusTypes.Ok: return 'resource-overview--ok';
      case StatusTypes.ClientError: return 'resource-overview--client-error';
      case StatusTypes.ServerError: return 'resource-overview--server-error';
      default: return 'resource-overview--unknown';
    }
  })
});
