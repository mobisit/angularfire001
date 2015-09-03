// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])
// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebaseObject) {
  // our application code will go here
  // connect to firebase
  var ref = new Firebase("https://angularfire001.firebaseio.com/days");
  //var fb = $firebase(ref);
  // sync as object
  var syncObject = $firebaseObject(ref);
  // three way data binding
  syncObject.$bindTo($scope, 'days');

  // function to set the default data
  $scope.reset = function(){
  	ref.set({
  		monday: {
  			name: 'Monday',
  			slots: {
  				0900: {
  					time: '9:00am',
  					booked: false,
            hidden: false
  				},
  				1000: {
  					time: '10:00am',
  					booked: false,
            hidden: false
  				},
          1100: {
            time: '11:00am',
            booked: false,
            hidden: false
          },
          1200: {
            time: '12:00pm',
            booked: false,
            hidden: false
          },
          1300: {
            time: '1:00pm',
            booked: false,
            hidden: false
          },
          1400: {
            time: '2:00pm',
            booked: false,
            hidden: false
          },
          1500: {
            time: '3:00pm',
            booked: false,
            hidden: false
          }
  			}
  		},
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false,
            hidden: false
          },
          1000: {
            time: '10:00am',
            booked: false,
            hidden: false
          },
          1100: {
            time: '11:00am',
            booked: false,
            hidden: false
          },
          1200: {
            time: '12:00pm',
            booked: false,
            hidden: false
          },
          1300: {
            time: '1:00pm',
            booked: false,
            hidden: false
          },
          1400: {
            time: '2:00pm',
            booked: false,
            hidden: false
          },
          1500: {
            time: '3:00pm',
            booked: false,
            hidden: false
          }
        }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false,
            hidden: false
          },
          1000: {
            time: '10:00am',
            booked: false,
            hidden: false
          },
          1100: {
            time: '11:00am',
            booked: false,
            hidden: false
          },
          1200: {
            time: '12:00pm',
            booked: false,
            hidden: false
          },
          1300: {
            time: '1:00pm',
            booked: false,
            hidden: false
          },
          1400: {
            time: '2:00pm',
            booked: false,
            hidden: false
          },
          1500: {
            time: '3:00pm',
            booked: false,
            hidden: false
          }
        }
      },
      thursday: {
        name: 'Thursday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false,
            hidden: false
          },
          1000: {
            time: '10:00am',
            booked: false,
            hidden: false
          },
          1100: {
            time: '11:00am',
            booked: false,
            hidden: false
          },
          1200: {
            time: '12:00pm',
            booked: false,
            hidden: false
          },
          1300: {
            time: '1:00pm',
            booked: false,
            hidden: false
          },
          1400: {
            time: '2:00pm',
            booked: false,
            hidden: false
          },
          1500: {
            time: '3:00pm',
            booked: false,
            hidden: false
          }
        }
      },
  		friday: {
  			name: 'Friday',
  			slots: {
          0900: {
            time: '9:00am',
            booked: false,
            hidden: false
          },
          1000: {
            time: '10:00am',
            booked: false,
            hidden: false
          },
          1100: {
            time: '11:00am',
            booked: false,
            hidden: false
          },
          1200: {
            time: '12:00pm',
            booked: false,
            hidden: false
          },
          1300: {
            time: '1:00pm',
            booked: false,
            hidden: false
          },
          1400: {
            time: '2:00pm',
            booked: false,
            hidden: false
          },
          1500: {
            time: '3:00pm',
            booked: false,
            hidden: false
          }
        }
  		}
  	});
  };
});