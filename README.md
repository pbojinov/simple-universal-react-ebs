## SSH into instance

eb ssh

### Where does elastic beanstalk t2 server store my node.js app files?

It's in the /tmp/deployment/application folder during deployment and the moved to /var/app/current afterward.

In case you search them, the node logs are in /var/log/nodejs/nodejs.log and the application will bind to 8081 no matter what PORT environment variable you set in the Environment Variables in the console.