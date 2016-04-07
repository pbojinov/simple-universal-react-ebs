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

### Node and NPM on the EBS box once you're SSH'd in

/opt/elasticbeanstalk/node-install/node-v4.3.0-linux-x64/bin/node
/opt/elasticbeanstalk/node-install/node-v4.3.0-linux-x64/bin/npm

## .ebextensions

Configuration options for `.ebextensions`

http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html

http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html

### ENV variables

http://stackoverflow.com/questions/11211007/how-do-you-pass-custom-environment-variable-on-amazon-elastic-beanstalk-aws-ebs/14491294#14491294
