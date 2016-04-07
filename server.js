var express = require('express'),
    jobModel = require('./models/Job'),
    jobsData = require('./jobs-data');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
  jobsData.findJobs().then(function(collection) {
    res.send(collection);
  })
})

app.get('*', function(req, res) {
  res.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://diego:diegos@ds019829.mlab.com:19829/jobfinder')
  .then(function() {
    console.log('Connected to mongodb successfully!');
    jobModel.seedJobs();
  });

app.listen(process.env.PORT || 3000, function() {
  console.log('Running on port 3000');
});