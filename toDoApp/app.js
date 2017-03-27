var moduleApp = angular.module("ToDoApp", []);
moduleApp.controller("ToDoCtrl", ToDoCtrl);

function ToDoCtrl(){
  this.editMode = false;
  this.todos = ["Learn Angular", "Practise Angular 1"];
  this.addNewTodo = function(){
    this.todos.push(this.newTodo);
    this.newTodo = "";
  }  

  this.triggerEditMode = function(){
    this.editMode = !this.editMode;
  }
  this.deleteTodo = function(index){
    this.todos.splice(index,1);
    
  }
}
