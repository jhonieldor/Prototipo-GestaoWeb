/**
 * Created by Jhoni on 01/08/2016.
 */
(function () {
    'use strict';

    angular.module('app.gestao.parceiros').controller('ParceirosCtrl', ['$scope', '$filter', ParceirosCtrl]);

    function ParceirosCtrl($scope, $filter) {
        var init;
        $scope.parceiros = [];
        $scope.searchKeywords = '';
        $scope.parceirosFiltered = [];
        $scope.row = '';
        $scope.select = select;
        $scope.onFilterChange = onFilterChange;
        $scope.onNumPerPageChange = onNumPerPageChange;
        $scope.onOrderChange = onOrderChange;
        $scope.search = search;
        $scope.order = order;
        $scope.numPerPageOpt = [3, 5, 10, 20];
        $scope.numPerPage = $scope.numPerPageOpt[2];
        $scope.currentPage = 1;
        $scope.currentPage = [];

        //$scope.parceiro = {};
        $scope.parceiros = [
            {
                nome: 'João Santana',
                cidade: 'Curitiba',
                estado: 'PR',
                tipo_parceria: 'Cliente',
                is_cliente: true,
                is_fornecedor: false,
                is_prestador_servico: false,
                is_transportadora: false,
                is_colaborador: false,
                is_usuario: false
            }, {
                nome: 'Mario Ferrare',
                cidade: 'Cascavel',
                estado: 'PR',
                tipo_parceria: 'Cliente, Prestador de Serviço',
                is_cliente: true,
                is_fornecedor: false,
                is_prestador_servico: true,
                is_transportadora: false,
                is_colaborador: false,
                is_usuario: false
            }, {
                nome: 'Francisco da Silva',
                cidade: 'Cascavel',
                estado: 'PR',
                tipo_parceria: 'Cliente, Prestador de Serviço',
                is_cliente: true,
                is_fornecedor: false,
                is_prestador_servico: true,
                is_transportadora: false,
                is_colaborador: false,
                is_usuario: false
            }, {
                nome: 'Carlos Rocha',
                cidade: 'Foz do Iguaçu',
                estado: 'PR',
                tipo_parceria: 'Cliente, Prestador de Serviço',
                is_cliente: true,
                is_fornecedor: false,
                is_prestador_servico: true,
                is_transportadora: false,
                is_colaborador: false,
                is_usuario: false
            }, {
                nome: 'Carlos Fonseca',
                cidade: 'Foz do Iguaçu',
                estado: 'PR',
                tipo_parceria: 'Cliente',
                is_cliente: true,
                is_fornecedor: false,
                is_prestador_servico: true,
                is_transportadora: false,
                is_colaborador: false,
                is_usuario: false
            }, {
                nome: 'RCK S/A',
                cidade: 'Toledo',
                estado: 'PR',
                tipo_parceria: 'Cliente, Fornecedor',
                is_cliente: true,
                is_fornecedor: false,
                is_prestador_servico: true,
                is_transportadora: false,
                is_colaborador: false,
                is_usuario: false
            }
        ];

        function select(page) {
            var end, start;
            start = (page - 1) * $scope.numPerPage;
            end = start + $scope.numPerPage;
            return $scope.parceirosCurrent = $scope.parceirosFiltered.slice(start, end);
        };

        function onFilterChange() {
            $scope.select(1);
            $scope.currentPage = 1;
            return $scope.row = '';
        };

        function onNumPerPageChange() {
            $scope.select(1);
            return $scope.currentPage = 1;
        };

        function onOrderChange() {
            $scope.select(1);
            return $scope.currentPage = 1;
        };

        function search() {
            $scope.parceirosFiltered = $filter('filter')($scope.parceiros, $scope.searchKeywords);
            return $scope.onFilterChange();
        };


        function searchClientes() {
            $scope.parceirosFiltered = $filter('filter')($scope.parceiros, 'Cliente');
            return $scope.onFilterChange();
        };

        function order(rowName) {
            if ($scope.row === rowName) {
                return;
            }
            $scope.row = rowName;
            $scope.parceirosFiltered = $filter('orderBy')($scope.parceiros, rowName);
            return $scope.onOrderChange();
        };

        init = function () {
            $scope.search();
            return $scope.select($scope.currentPage);
        };

        init();
    }
})();
