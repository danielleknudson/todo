var app = app || {};

var TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Backbone.localStorage('todos-backbone'),
  getCompleted: function () {
    return this.filter(function (todo) {
      return todo.get('completed');
    });
  },
  getRemaining: function () {
    return this.filter(function (todo) {
      return !todo.get('completed');
    });
  },
  generateId: function () {
    if (!this.models.length) {
      return 1;
    }
    return this.models.last().get('id') + 1;
  },
  comparator: function (todo) {
    return todo.get('id');
  }
});