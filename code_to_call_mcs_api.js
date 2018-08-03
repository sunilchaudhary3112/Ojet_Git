// /* global angular, document, window */
// 'use strict';

// angular
// .module('ideas.ideasController', ['ionic'])
// .controller(
// 	'myIdeasCtrl',
// 	function($scope, $state, $http, $stateParams, $timeout,
// 		ionicMaterialInk, ionicMaterialMotion, IdeasFactory) {
// 					// Set Header
// 					$scope.$parent.showHeader();
// 					$scope.$parent.clearFabs();
// 					$scope.$parent.setHeaderFab('left');

// 					// Delay expansion
// 					$timeout(function() {
// 						$scope.isExpanded = true;
// 						$scope.$parent.setExpanded(true);
// 					}, 300);

// 					// Set Motion
// 					ionicMaterialMotion.fadeSlideInRight();

// 					// Set Ink
// 					ionicMaterialInk.displayEffect();

// 					// $scope.response = newIdea;
// 					$scope.response = 'Fetching Your Ideas...';
// 					// initialise idea and ideaList
// 					// $scope.idea = {};
// 					$scope.ideas = {};
// 					$scope.ideasCount = 0;

// 					// declare the connection details
// 					var apiLink = 'https://donotdeleteplease-gse00011678.mobileenv.us2.oraclecloud.com:443/mobile/custom/Innovation/Ideas'

// 					// make $http request with callback later

// 					var req = {
// 						method : 'GET',
// 						url : apiLink,
// 						headers : {
// 							'Oracle-Mobile-Backend-ID' : 'fcc1bd42-b9fb-400c-991d-c4c78c22b1b0',
// 							'Authorization' : 'Basic R1NFMDAwMTE2NzhfTUNTX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6Smk3cXBld3lrczlfbmI=',
// 							'Content-Type' : 'application/json'
// 						}
// 					}


// 					$http(req).then(
// 						function(res) {
// 								// to debug enable the below
// 								// $scope.response = "PASS:" +
// 								// JSON.stringify(res.data);
// 								var responseValue = res.data;
// 								$scope.ideas = responseValue.Body.findIdeaFindIdeaByNameResponse.result.Value;
// 								$scope.response = "You have " + $scope.ideas.length
// 								+ " ideas submitted";

// 							}, function(res) {
// 								$scope.response = "Error:" + JSON.stringify(res);
// 							});

// 					// Transform Category into appropriate string values -
// 					// probably should be done in MCS instead
// 					$scope.transformCategory = function(category) {

// 						if (category == "New_Product") {
// 							return "New Product";
// 						}
// 						if (category == "Process_Improvement") {
// 							return "Process Improvement";
// 						} else {
// 							return "Generic Idea";
// 						}

// 					};

// 					// Update Idea ID
// 					$scope.updateIdea = function(ideaId) {
// 						$scope.input = {};
// 						$scope.input.ideaId = ideaId;
// 						IdeasFactory.setIdeaObject($scope.input);

// 						$state.go('app.ideaDetail', {}, {
// 							location : 'replace'
// 						});

// 					};

// 				})

// .controller(
// 	'newIdeaCtrl',
// 	function($scope, $state, $http, Camera, $stateParams, $timeout,
// 		ionicMaterialMotion, ionicMaterialInk) {

// 		$scope.$parent.showHeader();
// 		$scope.$parent.clearFabs();
// 		$scope.isExpanded = true;
// 		$scope.$parent.setExpanded(true);
// 		$scope.$parent.setHeaderFab('right');

// 		$timeout(function() {
// 			ionicMaterialMotion.fadeSlideIn({
// 				selector : '.animate-fade-slide-in .item'
// 			});
// 		}, 200);

// 		$scope.cancelIdea = function() {
// 			$timeout(function() {
// 				$state.go('app.profile', {}, {
// 					location : 'replace'
// 				});
// 			}, 300);

// 		}

// 					// Code to Take Photo
// 					$scope.getPhoto = function() {
// 						//$scope.response = 'Getting camera';
// 						//var sourceType = device.isVirtual ? Camera.PictureSourceType.PHOTOLIBRARY:Camera.PictureSourceType.CAMERA;
// 						//console.log('sourceType!', sourceType);
// 						Camera.getPicture({
// 							quality : 75,
// 							targetWidth : 320,
// 							targetHeight : 320,
// 							saveToPhotoAlbum : true,
// 							destinationType : 0,
// 							correctOrientation : true,
// 							// encode as image/png
// 							encodingType : 1
// 						}).then(function(dataURI) {
// 							// console.log(imageURI);
// 							$scope.idea.base64Photo = dataURI;
// 							$scope.idea.hasPhoto = true;
// 						}, function(err) {
// 							//$scope.response = err;
// 							console.log(err);
// 						});
// 					}

// 					// Activate ink for controller
// 					ionicMaterialInk.displayEffect();

// 					$scope.idea = {};
// 					// $scope.response = "Tap Submit When You're Ready";

// 					$scope.createNewIdea = function() {

// 						// $scope.response = newIdea;
// 						$scope.response = 'Creating Idea...';

// 						// declare the connection details
// 						var postLink = 'https://donotdeleteplease-gse00011678.mobileenv.us2.oraclecloud.com:443/mobile/custom/Innovation/Ideas'

// 						// Transform Category into appropriate string values -
// 						// probably should be done in MCS instead
// 						if ($scope.idea.category == 'New Product') {
// 							$scope.idea.category = 'New_Product'
// 						}else if ($scope.idea.category == 'IDEA') {
// 							$scope.idea.category = 'IDEA'
// 						}else if ($scope.idea.category == 'Consumer_Goods') {
// 							$scope.idea.category = 'Consumer_Goods'
// 						}

// 						/*var newIdea = {
// 							"description" : $scope.idea.description,
// 							"name" : $scope.idea.name,
// 							"status" : "PENDING",
// 							"ideaType" : $scope.idea.category
// 						}
// 						if ($scope.idea.hasPhoto) {
// 							newIdea["image"] = {};
// 							// Hardcoded... but the encoding type is also hardcoded in
// 							// the take photo function. Sloppy, but we will survive.
// 							newIdea["image"]["type"] = "image/png";
// 							newIdea["image"]["data"] = $scope.idea.base64Photo;
// 						}*/
// {
            
// 						var createIdea = {
// 							 "Header": null,
//             "Body": {
//                 "createIdea": {
//                     "idea": {
//                         "Description": $scope.idea.description,
//                         "Name": $scope.idea.name,
//                         "IdeaType": $scope.idea.category
//                     }
//                 }
//             }
//         }

// 						// make $http request with callback later
// 						var req = {
// 							method : 'POST',
// 							url : postLink,
// 							headers : {
// 								'Oracle-Mobile-Backend-ID' : 'fcc1bd42-b9fb-400c-991d-c4c78c22b1b0',
// 								'Authorization' : 'Basic R1NFMDAwMTE2NzhfTUNTX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6Smk3cXBld3lrczlfbmI=',
// 								'Content-Type' : 'application/json'
// 							},
// 							data : createIdea
// 						}

// 						$http(req).then(function(res) {
// 							// to debug enable the below
// 							// $scope.response = "PASS:" +
// 							// JSON.stringify(res.data);
// 							$scope.response = "Idea posted successfully";
// 							$timeout(function() {
// 								$state.go('app.myIdeas', {}, {
// 									location : 'replace'
// 								});
// 							}, 300);
// 						}, function(res) {
// 							$scope.response = "Error:" + JSON.stringify(res);
// 						});

// 					}

// 				})

// .controller(
// 	'ideaDetailCtrl',
// 	function($scope, $state, $http, Camera, $stateParams, $timeout, $ionicPopup, $ionicLoading,
// 		ionicMaterialMotion, ionicMaterialInk, IdeasFactory) {
// 		$scope.$parent.showHeader();
// 		$scope.$parent.clearFabs();
// 		$scope.isExpanded = true;
// 		$scope.$parent.setExpanded(true);
// 		$scope.$parent.setHeaderFab('right');

// 		$timeout(function() {
// 			ionicMaterialMotion.fadeSlideIn({
// 				selector : '.animate-fade-slide-in .item'
// 			});
// 		}, 200);

// 		$scope.getPhoto = function() {
// 			console.log('Getting camera');
// 			Camera.getPicture({
// 				quality : 75,
// 				targetWidth : 320,
// 				targetHeight : 320,
// 				saveToPhotoAlbum : true,
// 				destinationType : 0,
// 				correctOrientation : true,
// 							// encode as image/png
// 							encodingType : 1
// 						}).then(function(dataURI) {
// 							// console.log(imageURI);
// 							$scope.ideaImage = dataURI;
// 							$scope.idea.hasPhoto = true;
// 						}, function(err) {
// 							console.log(err);
// 						});
// 					}

// 					// Activate ink for controller
// 					ionicMaterialInk.displayEffect();

// 					// $scope.response = "";

// 					// enable the following for testing
// 					// var ideasId = "300000100896148";

// 					$scope.input = IdeasFactory.getIdeaObject();
// 					var ideasId = $scope.input.ideaId;

// 					// Delete handler
// 					$scope.deleteIdea = function() {
// 						if(ideasId == undefined || ideasId == null){
// 							return;
// 						}
// 						var confirmDelete = $ionicPopup.confirm({
// 							title : 'Delete Idea',
// 							template : 'Are you sure you want to delete this idea?',
// 							cancelText : 'No',
// 							okText : 'Yes'
// 						});

// 						confirmDelete.then(function(res) {
// 							if (res) {
// 								// Call delete API
// 								callDelete(ideasId);
// 							} else {
// 								// Otherwise, do nothing.
// 								return;
// 							}
// 						});
// 					};

// 					function callDelete(id){
// 						//$scope.response = "Id value:" + id;
// 						$ionicLoading.show({
// 							template: 'Deleting...'
// 						})
// 						var apiLink = 'https://donotdeleteplease-gse00011678.mobileenv.us2.oraclecloud.com:443/mobile/custom/Innovation/Ideas/' +id
						
// 						var req = {
// 							method : 'POST',
// 							url : apiLink,
// 							headers : {
// 							'Oracle-Mobile-Backend-ID' : 'fcc1bd42-b9fb-400c-991d-c4c78c22b1b0',
// 							'Authorization' : 'Basic R1NFMDAwMTE2NzhfTUNTX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6Smk3cXBld3lrczlfbmI=',
// 							'Content-Type' : 'application/json',
// 							}
// 						}
// 						$http(req).then(
							
// 							function(res) {
								
// 								if(res.status == 200){
// 									$ionicLoading.show({
// 										template: 'Idea Deleted'
// 									});
// 										//Success. Return to Menu
// 										$timeout(function() {
// 											$ionicLoading.hide();
// 											$state.go('app.myIdeas');
// 										}, 300);
// 									}else{
// 										$ionicLoading.hide();
// 										var deleteErrorAlert = $ionicPopup.alert({
// 											title: 'Error',
// 											template: 'Error while deleting idea. Status code: ' +res.status
// 										});
// 									}
// 								}, function(res) {
// 									$scope.response = "Error:" + JSON.stringify(res);
// 									$ionicLoading.hide();
// 								}
// 							)

// 					};

// 					// Update Idea ID
// 					$scope.updateIdea = function(ideaDesc,ideaNameValue) {
// 						/*$scope.input = {};
// 						$scope.input.ideaId = ideaId;
// 						IdeasFactory.setIdeaObject($scope.input);

// 						$state.go('app.ideaDetail', {}, {
// 							location : 'replace'
// 						});*/
// 						//$scope.response = ideaDesc;
// 						if(ideasId == undefined || ideasId == null){
// 							return;
// 						}
// 						var confirmUpdate = $ionicPopup.confirm({
// 							title : 'Update Idea',
// 							template : 'Are you sure you want to update this idea?',
// 							cancelText : 'No',
// 							okText : 'Yes'
// 						});

// 						confirmUpdate.then(function(res) {
// 							if (res) {
// 								// Call delete API
// 								callUpdate(ideasId,ideaDesc,ideaNameValue);
// 							} else {
// 								// Otherwise, do nothing.
// 								return;
// 							}
// 						});

// 					};


// 					function callUpdate(id,ideaDesc,ideaNameValue){
// 						//$scope.response = $scope.ideaDescription;
// 						var status = $scope.ideaCategory;
// 						var category = $scope.ideaStatus;
// 						var statustoSend = "";
// 						var categorytoSend = "";

// 						// Transform the Category - probably should do this on
// 						// the MCS Custom API instead

// 						if (category == "New Product") {
// 							categorytoSend = "New_Product";
// 						} else if (category == "IDEA") {
// 							categorytoSend = "Consumer_Goods";
// 						} else {
// 							categorytoSend = "Consumer_Goods";
// 						}

// 						// Transform the Idea Status - probably should do this
// 						// on the MCS Custom API instead

// 						if (status == "Pending") {
// 							statustoSend = "PENDING";
// 						} else if (status == "Rejected") {
// 							statustoSend = "REJECTED";
// 						} else if (status == "Accepted") {
// 							statustoSend = "ACCEPTED";
// 						} else {
// 							statustoSend = "PENDING";
// 						}
						
// 						$ionicLoading.show({
// 							template: 'Updating...'
// 						})
// 						var apiLink = 'https://donotdeleteplease-gse00011678.mobileenv.us2.oraclecloud.com:443/mobile/custom/Innovation/Ideas/idea'
// 						var postDataUpdate = {
// 								  "Header": null,
// 								  "Body": {
// 								    "updateIdea": {
// 								      "idea": {
// 								        "CreatedBy": "KEVIN.SCHOTT",
// 								          "Description": ideaDesc, 
// 								          "IdeaId": id,
// 								          "Name": ideaNameValue,
// 								          "Status": statustoSend
// 								      }
// 								    }
// 								  }
// 								}
// 						var req = {
// 							method : 'POST',
// 							url : apiLink,
// 							headers : {
// 							'Oracle-Mobile-Backend-ID' : 'fcc1bd42-b9fb-400c-991d-c4c78c22b1b0',
// 							'Authorization' : 'Basic R1NFMDAwMTE2NzhfTUNTX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6Smk3cXBld3lrczlfbmI=',
// 							'Content-Type' : 'application/json',
// 							},
// 							data : postDataUpdate
// 						}
// 						$http(req).then(
							
// 							function(res) {
								
// 								if(res.status == 200){
// 									$ionicLoading.show({
// 										template: 'Idea Updated'
// 									});
// 										//Success. Return to Menu
// 										$timeout(function() {
// 											$ionicLoading.hide();
// 											$state.go('app.myIdeas');
// 										}, 300);
// 									}else{
// 										$ionicLoading.hide();
// 										var updateErrorAlert = $ionicPopup.alert({
// 											title: 'Error',
// 											template: 'Sorry you can not update idea type. Please delete it and create a new idea.'
// 										});
// 									}
// 								}, function(res) {
// 									//$scope.response = "Error:" + JSON.stringify(res);
// 									$ionicLoading.hide();
// 									var updateErrorAlert = $ionicPopup.alert({
// 											title: 'Error',
// 											template: 'Sorry you can not update idea type. Please delete it and create a new idea.'
// 										});
// 								}
// 							)

// 					};

// 					// enable for debugging to check what is the Ideas ID being
// 					// displayed
// 					// $scope.response = "IdeasID is: " +
// 					// JSON.stringify(ideasId);

// 					// declare the connection details
// 					var apiLink = 'https://donotdeleteplease-gse00011678.mobileenv.us2.oraclecloud.com:443/mobile/custom/Innovation/Ideas/idea'


// 					// make $http request with callback later
// 					var getIdeaById = {
// 						"Header": null,
// 						"Body": {
// 							"getIdea": {
// 								"ideaId": ideasId
// 							}
// 						}
// 					}

// 					var req = {
// 						method : 'PUT',
// 						url : apiLink,
// 						headers : {
// 							'Oracle-Mobile-Backend-ID' : 'fcc1bd42-b9fb-400c-991d-c4c78c22b1b0',
// 							'Authorization' : 'Basic R1NFMDAwMTE2NzhfTUNTX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6Smk3cXBld3lrczlfbmI=',
// 							'Content-Type' : 'application/json'
// 						},
// 						data : getIdeaById
// 					}

// 					$http(req).then(
// 						function(res) {
// 								// to debug enable the below
//                                     //$scope.response = "PASS:" + JSON.stringify(res.data.Body);
//                                     var responsevalue1 = res.data.Body;
//                                     var abcd = responsevalue1.getIdeaResponse;
//                                     var responsevalue = abcd.result;
//                                     //$scope.response = "PASS:" + JSON.stringify(responsevalue);
//                                     $scope.ideaName = responsevalue.Name;
//                                     $scope.ideaDescription = responsevalue.Description;
//                                     $scope.ideaCreationDate = responsevalue.CreationDate;
// 								//if (responsevalue.data["image"] != null) {
// 									// encoded for setting as the image src
// 									//$scope.ideaImage = "data:" + responsevalue.image.type
// 									//		+ ";base64," + responsevalue.image.data;
// 								//}
// 								var status = responsevalue.Status;
// 								var category = responsevalue.IdeaType;

// 								// Transform the Category - probably should do this on
// 								// the MCS Custom API instead

// 								if (category == "New_Product") {
// 									$scope.ideaCategory = "New Product";
// 								} else if (category == "Process_Improvement") {
// 									$scope.ideaCategory = "Process Improvement";
// 								} else {
// 									$scope.ideaCategory = "Generic Idea";
// 								}

// 								// Transform the Idea Status - probably should do this
// 								// on the MCS Custom API instead

// 								if (status == "PENDING") {
// 									$scope.ideaStatus = "Pending";
// 								} else if (status == "REJECTED") {
// 									$scope.ideaStatus = "Rejected";
// 								} else if (status == "ACCEPTED") {
// 									$scope.ideaStatus = "Accepted";
// 								} else {
// 									$scope.ideaStatus = "Pending";
// 								}

// 							}, function(res) {
// 								$scope.response = "Error:" + JSON.stringify(res);
// 							});

// });
