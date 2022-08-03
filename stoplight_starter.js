/*
- build a stop light
    - 4 lights; red, yellow, green and white
    - 4 types of vehicles
        - human powered ( bicycle ) 
            - can ONLY go if light is green
        - personal/private transportation ( private )
            - can ONLY go if light is green or yellow
            - must slow down to 20mph at yellow light
        - public transportation ( public )
            - can only go if light is white
            - no need to slow down
        - emergency vehicles ( emergency )
            - can go on any light
            - must slow down to 30 mph at yellow and white lights
            - must slow down to 20 mph at red lights
*/

/* starter code */
const VEHICLE_TYPES = {
    bicycle: 'bicycle',
    privateVehicle: 'private',
    publicVehicle: 'public',
    emergencyVehicle: 'emergency'
}

const LIGHTS = {
    white: 'white',
    green: 'green',
    yellow: 'yellow',
    red: 'red'
}

stopLight = ( vehicleType, speed, lightColor) => {
    // your code here
    value = '';
    if (vehicleType == 'bicycle') {
        if (lightColor == 'green') {
            value = 'pass';
        } else {
            value = 'failed';
        }
        console.log(vehicleType + ' ' + speed + ' ' + lightColor + ' ' + value);
    } else if (vehicleType == 'private') {
        if (lightColor == 'yellow' && speed < 20) {
            value='pass';
        } else if (lightColor == 'green') {
            value='pass';
        } else {
            value='failed';
        }
        console.log(vehicleType + ' ' + speed + ' ' + lightColor + ' ' + value);
    } else if (vehicleType == 'public') {
        if (lightColor == 'white') {
            value='pass';
        } else {
            value='failed';
        }
        console.log(vehicleType + ' ' + speed + ' ' + lightColor + ' ' + value);
    } else if (vehicleType == 'emergency') {
        if (lightColor == ('yellow' || 'white') && speed < 30) {
            value='pass';
        } else if (lightColor == 'red' && speed < 20) {
            value='pass';
        } else {
            value='failed';
        }
        console.log(vehicleType + ' ' + speed + ' ' + lightColor + ' ' + value);
    } else {
        console.log(vehicleType + ' ' + speed + ' ' + lightColor + ' failed');
    }
    return speed; 
}

// if ( stopLight( VEHICLE_TYPES.bicycle, 20, LIGHTS.white)  !== 0 )
//     console.log("bicycle 20 white failed")
// 
// if ( stopLight( VEHICLE_TYPES.privateVehicle, 40, LIGHTS.yellow) !== 20 )
//     console.log("private 40 yellow failed")
// 
// if ( stopLight( VEHICLE_TYPES.emergencyVehicle, 60, LIGHTS.red) !== 20 )
//     console.log("emergency 60 red failed")
// 
// if ( stopLight( VEHICLE_TYPES.publicVehicle, 15, LIGHTS.yellow) !== 0 )
//     console.log("public 15 yellow failed")

// fail
stopLight('bicycle', 20, 'white');
stopLight('private', 40, 'yellow');
stopLight('emergency', 60, 'red');
stopLight('public', 15, 'yellow');


// pass
stopLight('bicycle', 20, 'green');
stopLight('private', 10, 'yellow');
stopLight('emergency', 15, 'yellow');
stopLight('public', 15, 'white');

