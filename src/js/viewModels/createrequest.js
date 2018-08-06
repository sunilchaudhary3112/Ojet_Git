/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * fisher module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojswitcher', 'ojs/ojnavigationlist', 'ojs/ojinputtext',
    'ojs/ojtable', 'ojs/ojdatetimepicker', 'ojs/ojtimezonedata', 'ojs/ojtimeline'
], function (oj, ko, $, app) {
    /**
     * The view model for the main content view template
     */
    function CreaterequestViewModel() {

        var self = this;
        //self.key = ko.observable(app.key());
        // self.serviceUrl = 'http://localhost:3000/';
        self.dept_name = ko.observable();
        self.dept_type = ko.observable();
        self.dept_location = ko.observable();
        self.date_time = ko.observable();
        self.manager_name = ko.observable();
        self.manager_id = ko.observable();
        self.dept_id = ko.observable();

        self.createDept = function () {
            console.log(self.dept_name._latestValue);
            console.log(self.dept_type._latestValue);
            console.log(self.dept_location._latestValue);
            console.log(self.manager_name._latestValue);
            console.log(self.manager_id._latestValue);
            self.dept_id('30');
            $('#banner1').show();
         }

        self.handleActivated = function (info) {
            // Implement if needed
            $('#header').show();
        };
    }

    return new CreaterequestViewModel();
});
