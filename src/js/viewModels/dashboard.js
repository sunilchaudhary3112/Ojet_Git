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
            self.key = ko.observable();
            self.items = ko.observableArray();
            self.records = ko.observableArray([]);
            self.selectedDept = ko.observableArray([]);
            self.selectedDataProvider = new oj.ArrayDataProvider(self.selectedDept, { idAttribute: 'DepartmentId' });
            //self.showbuy = ko.observable(false);

            // if(app.userType() === 'user') {
            //     self.showbuy(true);
            // }

            self.deptArray = ko.observableArray([]);
            self.dataprovider = new oj.ArrayDataProvider(self.deptArray, { idAttribute: 'DepartmentId' });

            self.gotoMarketPlace = function () {
                $('#dashboard').hide();
                $('#marketplace').show();
                self.fetchList();

            }

            self.gotoMyTransaction = function () {
                $('#dashboard').hide();
                $('#mytransactions').show();
                self.fetchList();
            }
            self.gotoTrace = function () {
                self.key('');
                self.items([]);
                self.records([]);
                $('#dashboard').hide();
                $('#trace').show();
            }

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
                self.deptArray([]);
                self.deptArray.push({ DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 })
                self.deptArray.push({ DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 })
                self.deptArray.push({ DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 });

            }

            self.myActionFunction = function (event) { }
            self.myBeforeOpenFunction = function (event) { }

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

            self.getDeptById = function () {
                console.log(self.key._latestValue);
                //Let this result is coming from a api
                var arr = [{ DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 }];
                self.selectedDept([]);
                arr.forEach(dept => {
                    if (dept.DepartmentId == parseInt(self.key._latestValue)) {
                        self.selectedDept.push(dept);
                    }

                });

                console.log(self.selectedDept._latestValue);
                $('#table4').show();
            }


            //Code for making ajax call for external web service
            // self.fetchall = function () {
            //     var querydata = { "channel": "dpwchannel", "chaincode": "dpwasset", "method": "queryAllConsignment", "args": [""], "chaincodeVer": "v4" };
            //     self.myTuna([]);
            //     $.ajax({
            //         type: "POST",
            //         url: '/query',
            //         data: JSON.stringify(querydata),
            //         cache: false,
            //         contentType: 'application/json; charset=utf-8'
            //     }).done(function (result) {
            //         console.log(result);
            //         var parsedRes = JSON.parse(result.replace("/", ""));
            //         if (parsedRes.result != null) {
            //             recordArray = JSON.parse(parsedRes.result);
            //             $.each(recordArray, function (index) {
            //                 if(recordArray[index]['Record']['holder'] === app.user()) {
            //                     recordArray[index]['Record']['key'] = recordArray[index]['Key'];
            //                     self.myTuna.push(recordArray[index]['Record']);
            //                 }
            //             });
            //         }
            //     }).fail(function (jqXHR, textStatus) {
            //         console.log(textStatus);
            //     });
            // }

        }
        return new CollectionContainerViewModel();
    });
