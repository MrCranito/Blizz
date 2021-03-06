angular
    .module('HTOS', [])

    .controller('MainController', ['$scope', '$http', MainController]);




function MainController($scope, $http) {

    var heroesArray=[]; // All Data get from Maps;
    $scope.HTOSallHeroesArray = [];
    $scope.HTOSallMapsArray = [];
    var Array=[];

    $scope.value = "Dashboard";

    $scope.ArrayChooseHero =["Assassin",
                            "Warrior",
                            "Support",
                            "Specialist"];

    // Heroes Of the Storm Infos

   $scope.HTOSallHeroes = function () {
    console.log("clicked");
    
        $http.get('https://hotsapi.net/api/v1/heroes').then((result) =>{
            result.data.forEach(element => {
                Array.push(element);
            });
            
            Array.forEach((row)=>{
                    row.icon_url = row.icon_url["92x93"];
                    switch(row.name){
                        case "Junkrat":
                        row.icon_url = "/img/Junkrat.jpg";
                        break;
                        case "Alexstrasza":
                        row.icon_url = "/img/Alexstrasza.jpg";
                        break;
                        case "Zul'jin":
                        row.icon_url = "/img/Zul'jin.png";
                        break;
                        case "The Butcher":
                        row.icon_url = "/img/The Butcher.jpg";
                        break;
                        case "Hanzo":
                        row.icon_url = "/img/Hanzo.png";
                        break;
                        case "Maiev":
                        row.icon_url = "/img/Maiev.png";
                        break;
                        case "Blaze":
                        row.icon_url = "/img/Blaze.png";
                        break;
                    }
            });
            $scope.HTOSArray = Array;
            console.log($scope.HTOSArray);
            //var test = $scope.HTOSArray.talents;
            //$scope.HTOSArray.icon_url = $scope.HTOSArray.talents.icon_url["92x93"];
       
            $scope.value = false;
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.detailHero = function(HeroAskedForDeatils){
        Array=[];
        $http.get('https://hotsapi.net/api/v1/heroes/'+HeroAskedForDeatils+'').then((result) =>{
            $scope.DetailsHero = result.data;
            Array = $scope.DetailsHero;
            $scope.DetailsHero.icon_url= $scope.DetailsHero.icon_url["92x93"];
            switch($scope.DetailsHero.name){
                    // row.icon_url = "/img/" + row.name + ".jpg";
                        case "Junkrat":
                        $scope.DetailsHero.icon_url = "/img/Junkrat.jpg";
                        break;
                        case "Alexstrasza":
                        $scope.DetailsHero.icon_url = "/img/Alexstrasza.jpg";
                        break;
                        case "Zul'jin":
                        $scope.DetailsHero.icon_url = "/img/Zul'jin.png";
                        break;
                        case "The Butcher":
                        $scope.DetailsHero.icon_url = "/img/The Butcher.jpg";
                        break;
                        case "Hanzo":
                        $scope.DetailsHero.icon_url = "/img/Hanzo.png";
                        break;
                        case "Maiev":
                        $scope.DetailsHero.icon_url = "/img/Maiev.png";
                        break;
                        case "Blaze":
                        $scope.DetailsHero.icon_url = "/img/Blaze.png";
                        break;
                    };
            
            Array = $scope.DetailsHero.talents;
             Array.forEach((row)=>{
                    row.icon_url = row.icon_url["64x64"];
            });
            $scope.DetailsHero.talents = Array;
            console.log($scope.DetailsHero);
            $('#Personnal').css("display","none");
            $('#Maps').css("display","none");
            $('#value').css("display","none");
            $scope.value = false;
            $('#HeroDetail').css("display","block");
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    }
    $scope.parseJSONhero =function(choose){
        switch(choose){
            case "Assassin":
            $('.Assassin').parent().css("display","flex");
            $('.Support,.Warrior,.Specialist').parent().css("display","none");
            break;
            case "Warrior":
            $('.Warrior').parent().css("display","flex");
            $('.Support,.Assassin,.Specialist').parent().css("display","none");
            break;
            case "Support":
            $('.Support').parent().css("display","flex");
            $('.Warrior,.Assassin,.Specialist').parent().css("display","none");
            break;
            case "Specialist":
            $('.Specialist').parent().css("display","flex");
            $('.Support,.Assassin,.Warrior').parent().css("display","none");
            break;
            default: 
            $('.Assassin,.Support,.Warrior,.Specialist').parent().css("display","flex");
            break;
            
        }

    }
    $scope.HTOSallMaps = function () {
    console.log("clicked");
        Array = [];
        $http.get('https://api.hotslogs.com/Public/Data/Maps').then((result) =>{
            result.data.forEach((row)=>{
                    if(row.PrimaryName == "Checkpoint: Hanamura"){
                        row.PrimaryName = "Checkpoint Hanamura";
                    }
                        row.icon_url =  "/img/" +row.PrimaryName+".jpg";
                    
            });
            $scope.Maps = result.data;
            console.log($scope.Maps);
            $('#Dashboard').css("display","none");
            $('#Personnal').css("display","none");
            $('#Maps').css("display","block");
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.HTOSplayerData = function () {
    console.log("clicked");
    Array = [];
        $http.get('https://api.hotslogs.com/Public/Players/2/JunKJusty_2854').then((result) =>{
            $scope.PersonnalData = result.data;
            console.log($scope.PersonnalData);
            $('#Dashboard').css("display","none");
            $('#Personnal').css("display","block");
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };





        /// WOW INFOS


    $scope.WOWPlayerData = function () {
    console.log("clicked");
        $http.get('https://eu.api.battle.net/wow/character/'+$scope.serverWOW+'/'+$scope.heronameWoW+'?'+$scope.localRegion+'&apikey=whj5bzdx57r9ns8c9et49gg332aegepq').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.WOWPlayerDataPlayerAchievement = function () {
    console.log("clicked");
        $http.get('https://eu.api.battle.net/wow/character/'+$scope.serverWOW+'/'+$scope.heronameWoW+'?fields=achievements&'+$scope.localRegion+'&apikey=whj5bzdx57r9ns8c9et49gg332aegepq').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.WOWPlayerGuild = function () {
    console.log("clicked");
        $http.get('https://eu.api.battle.net/wow/character/'+$scope.serverWOW+'/'+$scope.heronameWoW+'?fields=guild&'+$scope.localRegion+'&apikey=whj5bzdx57r9ns8c9et49gg332aegepq').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.WOWPlayerItem = function () {
    console.log("clicked");
        $http.get('https://eu.api.battle.net/wow/character/'+$scope.serverWOW+'/'+$scope.heronameWoW+'?fields=items&'+$scope.localRegion+'&apikey=whj5bzdx57r9ns8c9et49gg332aegepq').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.WOWPlayerMount = function () {
    console.log("clicked");
        $http.get('https://eu.api.battle.net/wow/character/'+$scope.serverWOW+'/'+$scope.heronameWoW+'?fields=mounts&'+$scope.localRegion+'&apikey=whj5bzdx57r9ns8c9et49gg332aegepq').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };



    // DIABLO 3 infos 

    $scope.D3allDataPlayer = function () {
    console.log("clicked");
    
        $http.get('https://eu.api.battle.net/d3/profile/'+ $scope.battletagName+'-'+$scope.battletagID+'/?locale=fr_FR&apikey=whj5bzdx57r9ns8c9et49gg332aegepq').then((result) =>{
            console.log("GET DIABLO 3 Personnal Player Infos =>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.D3DataByHeroes = function () {
    console.log("clicked");
    if($scope.battletagName && $scope.battletagID){
        $scope.battletag = $scope.battletagName+'-'+$scope.battletagID;
    }
        $http.get('https://eu.api.battle.net/d3/profile/'+$scope.battletag+'/hero/'+$scope.heroesChoosed+'?'+$scope.localRegion+'&apikey=whj5bzdx57r9ns8c9et49gg332aegepq').then((result) =>{
            console.log("Get Data From Player By Hero =>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };


    //Starcraft 2 infos


    $scope.STC2ProfilPlayer = function () {
    console.log("clicked");
        $http.get('https://eu.api.battle.net/sc2/profile/'+$scope.battletagID+'/'+$scope.Region+'/'+$scope.battletagName+'/?'+$scope.localRegion+'&apikey=whj5bzdx57r9ns8c9et49gg332aegepq').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.STC2PlayerMatchHistory = function () {
    console.log("clicked");
        $http.get('https://eu.api.battle.net/sc2/profile/'+$scope.battletagID+'/'+$scope.Region+'/'+$scope.battletagName+'/matches?'+$scope.localRegion+'&apikey=whj5bzdx57r9ns8c9et49gg332aegepq').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    

    


    //Overwtach



    $scope.OVWTPlayerData = function () {
        $http.get('Overwatch/profile/'+$scope.battletagName+'/'+$scope.battletagID+'').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.OVWTPlayerStat = function () {
    console.log("clicked");
    if($scope.battletagName && $scope.battletagID){
        $scope.battletag = $scope.battletagName+'-'+$scope.battletagID;
    }
        $http.get('https://owapi.net/api/v3/u/'+$scope.battletag+'/stats').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
    $scope.OVWTPlayersStatsHeroes = function () {
    console.log("clicked");
    if($scope.battletagName && $scope.battletagID){
        $scope.battletag = $scope.battletagName+'-'+$scope.battletagID;
    }
        $http.get('https://owapi.net/api/v3/u/'+$scope.battletag+'/heroes').then((result) =>{
            console.log("allmaps=>>>>>>>>>>"+JSON.stringify(result));
            },(err)=>{
                
                if (err.code === 'AUTHENTICATION_FAILURE') {
                    swal('', 'Invalid credentials');
                }
                else {
                    swal('', 'Unknown error');
                }

            });
    };
 
}