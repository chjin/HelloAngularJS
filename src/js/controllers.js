/**
 * Created by cjw on 2016-04-12.
 */
'use strict';

/** 'myApp.controllers 컨트롤러 모듈 생성함.
 *  helloWorldCtrl 컨트롤러는 $scope 객체를 유지함-데이터모델임.
 * $scope 객체에 속한 name변수는 양방향 데이터 바인딩을 위해 사용할 것임.
 * */
angular.module('myApp.controllers',[])
    .controller('helloWorldCtrl', function ($scope) {
        $scope.name="세상에 온걸 환영합니다!";
    });