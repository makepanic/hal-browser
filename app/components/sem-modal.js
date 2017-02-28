import Ember from 'ember';
import ModalDialog from 'ember-modal-dialog/components/modal-dialog';

const {computed} = Ember;

const sizes = {
  small: 'small',
  normal: ''
};

export default ModalDialog.extend({
  size: 'normal',

  attachment: 'top center',
  targetAttachment: 'top center',

  containerClassNames: computed('size', function () {
    const sizeClass = sizes[this.get('size')];
    return [`ember-modal-dialog ui standard ${sizeClass} modal transition visible active scrolling`];
  }),
});
