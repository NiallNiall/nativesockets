module.exports = function(args) {

    var theseArgs = args;

    var dirArg = '';
    var thisDir = '';
    // print process.argv
    theseArgs.forEach((val, index) => {
        // console.log(`${index}: ${val}`);
        if (index == 2) {
            dirArg = val;
        }
    });

    switch (dirArg) {
        case 'drawings':
            thisDir = 'drawings';
            // console.log('drawings');
            break;
        case 'words':
            thisDir = 'words';
            // console.log('words');
            break;
        case 'standard':
            thisDir = 'standard';
            // console.log('words');
            break;
        default:
            thisDir = 'standard';
            // console.log('drawings');
    }

    return(thisDir);

}