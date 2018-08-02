/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'ojs/ojknockout-model', 'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojpagingcontrol', 'ojs/ojpagingtabledatasource', 'ojs/ojcollectiontabledatasource'], function (oj, ko) {

    // function DepartmentUIModel(deptId, deptName, locId, mgrId) {
    //     this.DepartmentId = deptId;
    //     this.DepartmentName = deptName;
    //     this.LocationId = locId;
    //     this.ManagerId = mgrId;
    // }

    // function DepartmentOjModelBuilder() {
    //     var parseJsonToModel = function (jsonData) {
    //         return new DepartmentUIModel(jsonData.department_id, jsonData.department_name, jsonData.location_id, jsonData.manager_id);
    //     }

    //     var DepartmentOjModel = oj.Model.extend({
    //         parse: parseJsonToModel,
    //         idAttribute: 'DepartmentId'
    //     });

    //     return new DepartmentOjModel();
    // }

    // function DepartmentOjCollectionBuilder(serviceURL) {
    //     var departmentOjModelInstance = DepartmentOjModelBuilder();
    //     var DepartmentOjCollection = oj.Collection.extend({
    //         url: serviceURL,
    //         model: departmentOjModelInstance,
    //         comparator: "DepartmentId"
    //     });

    //     return new DepartmentOjCollection();
    // }


    function CollectionContainerViewModel() {
        //Write View Model Content Here

        var self = this;
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

        var deptArray = [
            { DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
            { DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 },
            { DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 }
        ];

        var dataprovider = new oj.ArrayTableDataSource(deptArray, { idAttribute: 'DepartmentId' });
        self.pagingDataSource = new oj.PagingTableDataSource(dataprovider);



        // var deptOjCollectionInstance = DepartmentOjCollectionBuilder('http://10.184.61.31:9090/ords/hr/departments');
        // deptOjCollectionInstance.fetch({
        //     success: function (collection, response, options) {
        //         console.log('Successful')
        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //         console.log('Failure');
        //     }
        // });

        // var collectionTableDataSource = new oj.CollectionTableDataSource(deptOjCollectionInstance);
        // self.pagingDataSource = new oj.PagingTableDataSource(collectionTableDataSource);

    }
    return new CollectionContainerViewModel();
});
