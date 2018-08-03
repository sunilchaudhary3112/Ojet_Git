/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojtable', 'ojs/ojarraydataprovider',
    'ojs/ojtimeline', 'ojs/ojpagingtabledatasource'],
    function (oj, ko, $, app) {

        function CollectionContainerViewModel() {
            //Write View Model Content Here

            var self = this;

            self.deptArray = ko.observableArray([]);
            self.dataprovider = new oj.ArrayDataProvider(self.deptArray, { idAttribute: 'DepartmentId' });

            self.gotoMarketPlace = function () {
                $('#dashboard').hide();
                $('#marketplace').show();
                self.fetchList();

            }

            self.gotoMyTransaction = function () { }
            self.gotoTrace = function () { }

            var deptIdCol = {
                "headerText": "Department Id", "field": "DepartmentId", "headerClassName":
                    "oj-sm-only-hide", "className": "oj-sm-only-hide"
            };
            var deptNameCol = { "headerText": "Department Name", "field": "DepartmentName" };
            var deptLocationCol = {
                "headerText": "Location Id", "field": "LocationId", "headerClassName":
                    "oj-sm-only-hide", "className": "oj-sm-only-hide"
            };
            var deptMgrCol = { "headerText": "Manager Id", "field": "ManagerId" };
            self.tableColumns = [deptIdCol, deptNameCol, deptLocationCol, deptMgrCol];


            self.fetchList = function () {
                debugger

                self.deptArray([]);
                self.deptArray.push({ DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 })
                self.deptArray.push({ DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 })
                self.deptArray.push({ DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 });

            }


            self.showDashboard = function () {
                if (self.previous === 'marketplace') {
                    self.previous = null;
                    $('#marketplace').show();
                }
                else if (self.previous === 'mytransactions') {
                    self.previous = null;
                    $('#mytransactions').show();
                }
                else {
                    $('#dashboard').show();
                    $('#marketplace').hide();
                    $('#mytransactions').hide();
                }
                $('#trace').hide();
            }

        }
        return new CollectionContainerViewModel();
    });
