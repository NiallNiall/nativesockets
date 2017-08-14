module.exports = function(args) {

    var theseArgs = args;

    var dirArg = '';
    var thisDir = {};
    // print process.argv
    theseArgs.forEach((val, index) => {
        // console.log(`${index}: ${val}`);
        if (index == 2) {
            dirArg = val;
        }
    });

    switch (dirArg) {
        case 'drawings':
            thisDir = {
                'name':'drawings',
                'folder':'drawings',
                'midi':'midi-standard'
            }
            // console.log('drawings');
            break;
        case 'words':
            thisDir = {
                'name':'words',
                'folder':'words',
                'midi':'midi-standard'
            }
            // console.log('words');
            break;
        case 'standard':
            thisDir = {
                'name':'standard',
                'folder':'standard',
                'midi':'midi-standard'
            }
            // console.log('words');
            break;
        case 'three':
            thisDir = {
                'name':'three',
                'folder':'three',
                'midi':'midi-standard'
            }
            // console.log('words');
            break;
        default:
            thisDir = {
                'name':'standard',
                'folder':'standard',
                'midi':'midi-standard'
            }
            // console.log('drawings');
    }

    return(thisDir);

}