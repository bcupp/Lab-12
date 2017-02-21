var app = angular.module('toDoModule', []);

app.controller('toDoController', function($scope) {
    $scope.list = [];
    $scope.toDoItem = '';

    $scope.addItem = function() {
        $scope.list.push($scope.toDoItem);
        $scope.toDoItem ='';
    }

    $scope.removeItem = function(item) {
        var index = $scope.list.indexOf(item);
        $scope.list.splice(index, 1);
    }


});


document.getElementById("inputID")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("btnID").click();
    }
});
