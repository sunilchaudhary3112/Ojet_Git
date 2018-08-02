/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * fisher module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojarraytabledatasource',
    'ojs/ojnavigationlist'],
    function (oj, ko, $) {
        /**
         * The view model for the main content view template
         */
        function BuyerDashboardViewModel() {

            var self = this;
            self.router = oj.Router.rootInstance;
            self.buyerRouter = self.router.createChildRouter('buyer').configure({
                'dashboard': { label: 'My Dashboard', isDefault: true },
                'buyproduct': { label: 'Buy Product' }
            });

            var navData = [
                {
                    name: 'My Dashboard', id: 'dashboard',
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-home-icon-24'
                },
                {
                    name: 'Buy Product', id: 'buyproduct',
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-catalog-icon-24'
                }
            ];
            self.navDataSource = new oj.ArrayTableDataSource(navData, { idAttribute: 'id' });
            self.router.go('/user/dashboard');
            //self.router.go('/buyer/dashboard');

            self.handleActivated = function (info) {
                // Implement if needed
                $('#header').show();
            };
        }

        return new BuyerDashboardViewModel();
    });
