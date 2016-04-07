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

It's in the `/tmp/deployment/application` folder during deployment and the moved to `/var/app/current` afterward.

In case you search them, the node logs are in `/var/log/nodejs/nodejs.log` and the application will bind to 8081 no matter what PORT environment variable you set in the Environment Variables in the console.

### Node and NPM on the EBS box once you're SSH'd in

/opt/elasticbeanstalk/node-install/node-v4.3.0-linux-x64/bin/node
/opt/elasticbeanstalk/node-install/node-v4.3.0-linux-x64/bin/npm

## .ebextensions

Configuration options for `.ebextensions`

http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html

http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html

### ENV variables

http://stackoverflow.com/questions/11211007/how-do-you-pass-custom-environment-variable-on-amazon-elastic-beanstalk-aws-ebs/14491294#14491294

### Timeout when deploying

For some apps, running `eb deploy` will timeout, so you can create a new config in your `.ebextensions` folder or use the `--timeout` command line flag.

`increase-timeout.config`:

```
option_settings:
    - namespace: aws:elasticbeanstalk:command
      option_name: Timeout
      value: 1800
```

or `eb deploy --timeout 1800`

By the way the maximum timeout is half an hour, so 30 minutes * 60 seconds === 1800 seconds

Thanks to http://stackoverflow.com/questions/25557874/elastic-beanstalk-deployment-taking-longer-than-timeout-period-how-do-i-increas for this one.

## Some Gotchas

 1. EBS wasn’t installing the `devDependencies` so I moved everything to `dependencies` in the `package.json` . This isn't correct but I couldn't figure out any other way to get it to install all the dependencies. I verified this was happening by sshing into the box, going to `/var/app/current/node_modules`, and seeing that the devDependencies weren't there.

 2. The the order EBS tries to run your code is `node app.js`, followed by `node server.js`, and finally `npm run start`. I was trying to run my code with `npm run start:prod` but had a file name `server.js` in the root, so EBS was running the wrong server due to the execution order

 3. I turned off `nginx` and EBS strongly likes having `nginx` running, so now its turned back on for good. Not sure if there was other problems taking precedence over this but i'll leave it on until I need to turn it off for some specific reason.
