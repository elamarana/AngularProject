(function(){
    var app  = angular.module("ContactApp");
    app.service("AppDataService", function(AppNameSvc){
        console.log("Name is :: " + AppNameSvc);
        this.name = AppNameSvc; 
        this.author = "Maran";
        this.builtDate = new Date().toDateString();
    });
})();