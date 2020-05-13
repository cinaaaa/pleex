/**
 * typechecker HOC function, do type checking on functions
 *
 */
export const typechecker = (inputs, callback) => {
    var eachLoop = new Promise((resolve) => {
        inputs.forEach((element, index) => {
            if (typeof element[0] !== element[1].name.toLowerCase()) {
                throw new Error(`
                    type of ${element[0]} 
                    should be ${element[1].name.toLowerCase()}
                    not ${typeof element[0]}
                `);
            };
            // Loop finished
            if (index === inputs.length -1) resolve();
        });
    });
    // Loop Finshed
    eachLoop.then(() => {
       callback(true);
    });
};