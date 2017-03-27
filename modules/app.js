var moduleApp = angular.module("ModulesApp", ["myHelloModule","ngTagsInput"]);

moduleApp.controller("TagsDemoCtrl", TagsCtrl);

function TagsCtrl(){
    this.tags =  [
    { text: 'Maran' },
    { text: 'Mano' },
    { text: 'Maggie'}
  ];
}
