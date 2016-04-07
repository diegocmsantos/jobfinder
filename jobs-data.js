var mongoose = require('mongoose');
var Promise = require('bluebird');

var Job = mongoose.model('Job');

function findJobs(query) {
  return Promise.cast(mongoose.model('Job').find(query).exec());
}

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

var createJob = Promise.promisify(Job.create, Job);

module.exports.seedJobs = function() {

  return Job.find({}).then(function(collection) {

    if (collection.length === 0) {

      return Promise.map(jobs, function(job) {
        return createJob(job);
      });

    }

  });

}

var jobs = [
    {title: "Cook", description: "You will be making Bagels"},
    {title: "Waiter", description: "You will be putting food on peoples table"},
    {title: "Programmer", description: "You will be mindless typing for hours"},
    {title: "Axe Makerr", description: "We need many axes made.. So Many.."}
  ];