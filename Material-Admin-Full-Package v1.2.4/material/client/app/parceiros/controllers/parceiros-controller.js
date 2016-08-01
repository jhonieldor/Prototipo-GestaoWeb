/**
 * Created by Jhoni on 01/08/2016.
 */
(function(){
    'use strict';
    app.module('app.gestao.parceiros').controller('ParceirosCtrl', ['$scope', ParceirosCtrl]);

    function ParceirosCtrl($scope){
        $scope.parceiro = {

        }
        $scope.parceiros = [];
    }

})();
