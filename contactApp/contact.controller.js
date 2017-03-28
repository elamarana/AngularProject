(function (){
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", CntCtrl);
    function CntCtrl(ContactDataService){ 
        console.log("Controller -----> Call ContactDataService");
        this.contacts = ContactDataService.contacts;

        this.selectedContact = this.contacts[2]; 

        this.selectContact = function(index){
            this.selectedContact = this.contacts[index];
        }
    }
})();