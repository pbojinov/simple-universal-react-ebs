# simple-universal-react-ebs

## Getting Started

This assumes you already have the `aws cli` installed - http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html

    eb init

    eb use <env-name>

    eb deploy

## Useful stuff for debugging EBS app

SSH into the instance (if you've setup the SSH keys beforehand)

    eb ssh

http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-ssh.html

### Where does elastic beanstalk t2 server store my node.js app files?

It's in the ``/tmp/deployment/application` folder during deployment and the moved to ``/var/app/current` afterward.

In case you search them, the node logs are in ``/var/log/nodejs/nodejs.log` and the application will bind to 8081 no matter what PORT environment variable you set in the Environment Variables in the console.
