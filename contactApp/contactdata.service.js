(function(){
    var app  = angular.module("ContactApp");
    app.service("ContactDataService", function(){
        console.log("ContactDataService -----> Insdie ContactDataService");
         this.contacts = [
                {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "hélio",
                    "last": "jesus"
                },
                "location": {
                    "street": "6622 rua da saudade",
                    "city": "ananindeua",
                    "state": "piauí",
                    "postcode": 24545
                },
                "email": "hélio.jesus@example.com",
                "login": {
                    "username": "goldenwolf581",
                    "password": "slapper",
                    "salt": "bIoeKL1o",
                    "md5": "6a22434c30684ed697c3d19c0dc2f783",
                    "sha1": "4da051e5bcd8f04e5c51a8254d3cb43f05fb638e",
                    "sha256": "9ea5e5fce3de323f3e048a84d3aeb1b9f0e70ea60f6109422f5503481ab9eb89"
                },
                "dob": "1984-09-23 05:49:35",
                "registered": "2013-02-10 14:47:29",
                "phone": "(89) 6460-0846",
                "cell": "(80) 6006-3331",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/51.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
                },
                "nat": "BR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "Cron",
                    "last": "Panther"
                },
                "location": {
                    "street": "9400 sam anton suite",
                    "city": "houston",
                    "state": "texas",
                    "postcode": 78908
                },
                "email": "hélio.jesus@example.com",
                "login": {
                    "username": "goldenwolf581",
                    "password": "slapper",
                    "salt": "bIoeKL1o",
                    "md5": "6a22434c30684ed697c3d19c0dc2f783",
                    "sha1": "4da051e5bcd8f04e5c51a8254d3cb43f05fb638e",
                    "sha256": "9ea5e5fce3de323f3e048a84d3aeb1b9f0e70ea60f6109422f5503481ab9eb89"
                },
                "dob": "1984-09-23 05:49:35",
                "registered": "2013-02-10 14:47:29",
                "phone": "(89) 6460-0846",
                "cell": "(70) 6006-3331",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/51.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg" 
                },
                "nat": "BR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "William",
                    "last": "Robert"
                },
                "location": {
                    "street": "818 Edison glen terrace",
                    "city": "edison",
                    "state": "new jersey",
                    "postcode": 08837
                },
                "email": "hélio.jesus@example.com",
                "login": {
                    "username": "goldenwolf581",
                    "password": "slapper",
                    "salt": "bIoeKL1o",
                    "md5": "6a22434c30684ed697c3d19c0dc2f783",
                    "sha1": "4da051e5bcd8f04e5c51a8254d3cb43f05fb638e",
                    "sha256": "9ea5e5fce3de323f3e048a84d3aeb1b9f0e70ea60f6109422f5503481ab9eb89"
                },
                "dob": "1984-09-23 05:49:35",
                "registered": "2013-02-10 14:47:29",
                "phone": "(89) 6460-0846",
                "cell": "(80) 6006-3331",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/51.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
                },
                "nat": "BR"
            }
        ];
    });
})();