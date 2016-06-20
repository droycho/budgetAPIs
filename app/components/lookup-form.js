// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   actions: {
//     emailLookup() {
//       var params = {
//         email: this.get('email')
//       };
//       this.sendAction('emailLookup', params);
//     }
//   }
// });

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    nameLookup() {
      var params = {
        name: this.get('name')
      };
      this.sendAction('nameLookup', params);
    }
  }
});
