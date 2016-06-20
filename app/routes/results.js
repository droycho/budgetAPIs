import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'https://api.fullcontact.com/v2/company/lookup.json?domain=trybaker.com&apiKey=76f86ee948f83012';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     Ember.Logger.log(responseJSON);
     return responseJSON;
   });
  }
});
