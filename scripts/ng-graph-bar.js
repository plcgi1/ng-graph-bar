/**
 * ng-graph
 * @version v0.0.1 - 2015-04-24
 * @link https://github.com/plcgi1/ng-graph-bar
 * @author Nosau Aliaksandr <plcgi1@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function() {
    'use strict';
    angular.module('ngGraph', []);
    angular.module('ngGraph').directive('ngGraphBar', function(calculator) {
        
        return {
            restrict: 'E',
            replace: true,
            scope: {
                data: '=',
                title: '=',
                template: '='
            },
            template: function(element, attrs) {
                return '<div ng-include="\'' + attrs.template + '\'"></div>';
            },
            link: function(scope, element, attrs) {
                if ( attrs.title ) {
                    scope.title = attrs.title;
                }
                scope.$watch('data', function(val) {
                    console.log(val);
                    var total   = calculator.total(val);
                    var percent = parseFloat(total/100);
                    scope.data  = calculator.changeVal(val,percent);
                });
            }
        }
    });
    angular.module('ngGraph').factory('calculator', function() {
        return {
            total : function(array){
                var i, len=array.length, total = 0;
                for(i=0;i<len;i++) {
                    total = total + parseFloat(array[i].value);
                }
                return total;
            },
            changeVal : function(array,percent){
                var i, len=array.length, total = 0;
                for(i=0;i<len;i++) {
                    array[i].value = parseFloat(array[i].value / percent);
                }
                return array;
            }
        };
    });
})();
