/*angular
    .module('app')
    .directive('keyCleaner', ['$scope', function ($scope) {
        return {
            restrict: 'EA',
            link: function (scope, iElement, attrs, event) {
                console.log("Inside Directive Login");
                //attrs references any attributes on the directive element in html

                var $this = $(iElement);
                var label = $this.prev('label');

                if (event.type === 'keyup') {
                    if ($this.val() === '') {
                        label.removeClass('active highlight');
                    } else {
                        label.addClass('active highlight');
                    }
                } else if (event.type === 'blur') {
                    if ($this.val() === '') {
                        label.removeClass('active highlight');
                    } else {
                        label.removeClass('highlight');
                    }
                } else if (event.type === 'focus') {

                    if ($this.val() === '') {
                        label.removeClass('highlight');
                    } else if ($this.val() !== '') {
                        label.addClass('highlight');
                    }
                }

            }
        };
}]);
*/
