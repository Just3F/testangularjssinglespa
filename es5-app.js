var questApp = angular
  .module("questApp", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider.when("/question", {
      templateUrl: "views/question.html",
      controller: "QuestionController",
    });
    $routeProvider.when("/answer", {
      templateUrl: "views/answer.html",
      controller: "AnswerController",
    });
    $routeProvider.otherwise({ redirectTo: "/question" });
  });

window.myAngularApp = singleSpaAngularjs({
  angular: window.angular,
  mainAngularModule: 'questApp',
  uiRouter: true,
  preserveGlobal: true,
  template: '<account-settings />'
});

System.register([], function (_export) {
  return {
    execute: function () {
      _export(
        singleSpaAngularjs({
          angular: angular,
          mainAngularModule: "questApp",
          uiRouter: true,
          preserveGlobal: false,
          template: "<my-component />",
        })
      );
    },
  };
});
