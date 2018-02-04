var task = require('./task');
var taskClass = require('./class');

var task1 = new task('Task #1');
var task2 = new taskClass('Task #2')

task1.complete();
task1.save();

task2.complete();
task2.save();
