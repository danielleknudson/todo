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
    if (!this.length) {
      return 1;
    }
    return this.last().get('id') + 1;
  },
  // determines model sorting order within the collection
  comparator: function (todo) {
    return todo.get('id');
  }
});