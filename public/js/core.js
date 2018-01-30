
angular
    .module('ISPF-app', [
        'ngRoute',
        'nvd3',
        'ngStorage',
        'datetimepicker',
        'restangular',
        'ngAria',
        'ngAnimate',
        'ngMaterial',
        
    ])

// Configuration pour les vues
    .config(configure)
    


configure.$inject = ['$routeProvider','RestangularProvider', '$mdIconProvider', '$mdThemingProvider'];

function configure($routeProvider, RestangularProvider, $mdIconProvider, $mdThemingProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: 'views/pages/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard',
            activeTab: 'dashboard'
        }).
        when('/planning', {
            templateUrl: 'views/pages/planning.html',
            controller: 'PlanningController',
            controllerAs: 'planning',
            activeTab: 'planning'
        }).
        when('/request', {
            templateUrl: 'views/pages/request.html',
            controller: 'RequestController',
            controllerAs: 'request',
            activeTab: 'request'
        }).
        when('/functionsComposition', {
            templateUrl: 'views/pages/functionsComposition.html',
            controller: 'FunctionsCompositionController',
            controllerAs: 'functionsComposition',
            activeTab: 'functionsComposition'
        }).
        when('/reporting', {
            templateUrl: 'views/pages/reporting.html',
            controller: 'ReportingController',
            controllerAs: 'reporting',
            activeTab: 'reporting'
        }).
        when('/register', {
            templateUrl: 'views/pages/register.html',
            controller: 'RegisterController',
            controllerAs: 'register',
            activeTab: 'register'
        }).
        when('/modifPlanning', {
            templateUrl: 'views/pages/modifPlanning.html',
            controller: 'ModifPlanningController',
            controllerAs: 'modifPlanning',
            activeTab: 'modifPlanning'
        }).
        when('/login', {
            templateUrl: 'views/pages/login.html',
            controller: 'LoginController',
            controllerAs: 'login',
            activeTab: 'login'
        }).
        when('/profileManagement', {
            templateUrl: 'views/pages/profileManagement.html',
            controller: 'ProfileManagementController',
            controllerAs: 'profileManager',
            activeTab: 'profileManagement'
        }).
        when('/map', {
            templateUrl: 'views/pages/map.html',
            controller: 'MapController',
            controllerAs: 'vm',
            activeTab: 'map'
        }).
        when('/graph', {
            templateUrl: 'views/pages/graph.html',
            controller: 'GraphController',
            controllerAs: 'vm',
            activeTab: 'graph',
        }).
        otherwise({
            redirectTo: '/login'
        });
        
    RestangularProvider.setBaseUrl('http://exploreit-cbiots.eu-gb.mybluemix.net/api');
    
    // Angular Material Icons
    $mdIconProvider
        .iconSet('action', '../assets/iconsets/action-icons.svg', 24)
        .iconSet('alert', '../assets/iconsets/alert-icons.svg', 24)
        .iconSet('av', '../assets/iconsets/av-icons.svg', 24)
        .iconSet('communication', '../assets/iconsets/communication-icons.svg', 24)
        .iconSet('content', '../assets/iconsets/content-icons.svg', 24)
        .iconSet('device', '../assets/iconsets/device-icons.svg', 24)
        .iconSet('editor', '../assets/iconsets/editor-icons.svg', 24)
        .iconSet('file', '../assets/iconsets/file-icons.svg', 24)
        .iconSet('hardware', '../assets/iconsets/hardware-icons.svg', 24)
        .iconSet('icons', '../assets/iconsets/icons-icons.svg', 24)
        .iconSet('image', '../assets/iconsets/image-icons.svg', 24)
        .iconSet('maps', '../assets/iconsets/maps-icons.svg', 24)
        .iconSet('navigation', '../assets/iconsets/navigation-icons.svg', 24)
        .iconSet('notification', '../assets/iconsets/notification-icons.svg', 24)
        .iconSet('social', '../assets/iconsets/social-icons.svg', 24)
        .iconSet('toggle', '../assets/iconsets/toggle-icons.svg', 24)
        .iconSet('avatar', '../assets/iconsets/avatar-icons.svg', 128);

    // Angular Material theming
    $mdThemingProvider.theme('dark')
        .dark()
        .primaryPalette('blue-grey')
        .accentPalette('green')
        .warnPalette('blue');
    
}

