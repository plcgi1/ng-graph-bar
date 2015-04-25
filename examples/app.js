(function() {
    'use strict';

    var GraphCtrl;

    angular.module(
        'demo',
        [
            'ngGraph'
        ]
    );

    GraphCtrl = function ($scope) {
        $scope.data = {
            data1 : [
                { name : "Label1", colorClass : 'bar-graph-1', value : '20' },
                { name : "Label2", colorClass : 'bar-graph-2', value : '30' },
                { name : "Label3", colorClass : 'bar-graph-3', value : '10' },
                { name : "Label4", colorClass : 'bar-graph-4', value : '20' },
                { name : "Label5", colorClass : 'bar-graph-5', value : '5' }
            ],
            data2 : [
                { name : "Label2", colorClass : 'bar-graph-1', value : '20' },
                { name : "Label2", colorClass : 'bar-graph-2', value : '30' },
                { name : "Label2", colorClass : 'bar-graph-3', value : '10' },
                { name : "Label2", colorClass : 'bar-graph-4', value : '20' },
                { name : "Label2", colorClass : 'bar-graph-5', value : '60' }
            ],
            data3 : [
                { name : "Label3", colorClass : 'bar-graph-1', value : '20' },
                { name : "Label3", colorClass : 'bar-graph-2', value : '30' },
                { name : "Label3", colorClass : 'bar-graph-3', value : '10' },
                { name : "Label3", colorClass : 'bar-graph-4', value : '20' }
            ]
        };
    };

    angular
        .module('demo')
        .controller('GraphCtrl', GraphCtrl)
        .config([]);
})();
