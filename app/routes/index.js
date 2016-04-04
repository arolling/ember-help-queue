import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    newTicket(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
      this.transitionTo('index');
    }
  }
});
