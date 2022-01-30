const fs = require('fs');
var path = require('path');
message1 = 'hi';
message2 = 'hello';
const dateTimeStamp = () => {
    let date_object = new Date();
    return date_object;
}
const log = fs.createWriteStream(filePath, {
    flags: 'a' 
})

log.write('logData/log.txt', `${dateTimeStamp()} ${message1}`);
log.write('logData/log.txt', `${dateTimeStamp()} ${message2}`);