## IoT Device Simulator
IoT is a sprawling set of technologies and use cases that has no clear, single definition. Despite enormous advances, we’ve only seen a fraction of what the Internet revolution has yet to deliver. That’s because many powerful technological forces are now converging — poised to magnify, multiply, and exponentially increase the opportunities that software and the Internet can deliver by connecting the devices, or “things”, in the physical world around us. Each of these devices is able to convert valuable information from the real world into digital data that provides increased visibility to businesses of how users interact their products or services. The backend services required to process and uncover these valuable insights can be expensive to prove without a large pool of physical devices for full end to end integration setup or time-consuming development of scripts.  

Often times, teams constantly have the need to quickly replicate the behavior of their devices interacting with AWS IoT to assess their backend services. The IoT Device Simulator solution is a Graphical User Interface (GUI) based engine designed to enable customers to get started quickly assessing AWS IoT services without an existing pool of devices. The IoT Device Simulator leverages managed, highly available, highly scalable AWS-native services to effortlessly create and simulate thousands of connected devices that are defined by the customer.

For more information and a detailed deployment guide visit the IoT Device Simulator solution at https://aws.amazon.com/answers/iot/iot-device-simulator/.

## Running unit tests for customization
* Clone the repository, then make the desired code changes
* Next, run unit tests to make sure added customization passes the tests
```
cd ./deployment
chmod +x ./run-unit-tests.sh  \n
./run-unit-tests.sh \n
```

## Building distributable for customization
* Configure the bucket name of your target Amazon S3 distribution bucket
```
export DIST_OUTPUT_BUCKET=my-bucket-name # bucket where customized code will reside
export VERSION=my-version # version number for the customized code
```
_Note:_ You would have to create an S3 bucket with the prefix 'my-bucket-name-<aws_region>'; aws_region is where you are testing the customized solution. Also, the assets in bucket should be publicly accessible.

* Now build the distributable:
```
chmod +x ./build-s3-dist.sh \n
./build-s3-dist.sh $DIST_OUTPUT_BUCKET $VERSION \n
```

* Deploy the distributable to an Amazon S3 bucket in your account. _Note:_ you must have the AWS Command Line Interface installed.
```
aws s3 cp ./dist/ s3://my-bucket-name-<aws_region>/iot-device-simulator/<my-version>/ --recursive --acl bucket-owner-full-control --profile aws-cred-profile-name \n
```

* Get the link of the iot-device-simulator.template uploaded to your Amazon S3 bucket.
* Deploy the IoT Device Simulator solution to your account by launching a new AWS CloudFormation stack using the link of the iot-device-simulator.template.

## Building the simulation engine Docker container for customization
The simulation engine is a Docker container that is powered by AWS Fargate. Amazon ECS containers provisioned by AWS Fargate contain the simulation engine that periodically polls a simulation queue for simulation requests. The simulation engine provides the logic for managing virtual devices and generating the simulated data to send to the target AWS IoT endpoint. After making your customizations to the simulation engine, you will need build a new Docker image.
```
cd ./source/simulator
docker build -t <image-name> . \n
```

_Note:_ To install the AWS CLI and Docker and for more information on the steps below, visit the ECR [documentation page](http://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_GetStarted.html).

## File Structure
The IoT Device Simulator consists of a management console, a simulation engine and API microservices that facilitate the functional areas of the solution.
* The management console is a SALAD (S3, API Gateway, Lambda and DynamoDB) application.
* The simulation engine is powered by AWS Fargate.
* The microservices are deployed to a serverless environment in AWS Lambda.

```
|-deployment/
  |-buildspecs/                  [ solutions builder pipeline build specifications ]
  |-build-s3-dist.sh             [ shell script for packaging distribution assets ]
  |-run-unit-tests.sh            [ shell script for executing unit tests ]
  |-iot-device-simulator.yaml    [ solution CloudFormation deployment template ]
|-source/
  |-console/
    |-src/
      |-app/                     [ AngularJS 5 application ]
      |-assets/                  [ css, fonts, images and ui javascript libraries ]
      |-environments/            [ development and production environment configurations ]
  |-resources/
    |-authorizer                 [ Authorizer is a local package to create authentication and authorization claim ticket for solution services ]
    |- helper                    [ Helper is the AWS CloudFormation custom resource for aiding in the deployment of the solution ]
      |- lib/                    [ Helper libraries ]
    |- logger                    [ Logger is an auxiliary logging local package for solution services ]
    |- routes                    [ Predefined GeoJSON routes for vehicles in automotive module ]
    |- usage-metrics             [ Usage Metrics is an auxiliary local package to capture anonymous metrics pertinent for feedback on the solution ]
  |-services/
    |- admin                     [ Adminstration microservice ]
        |-lib/                   [ Administration microservice libraries ]      
    |- device                    [ Device microservice ]
        |-lib/                   [ Device microservice libraries ]      
    |- profile                   [ Profile microservice ]
        |-lib/                   [ Profile microservice libraries ]                                   
  |-simulator/
    |- helpers                   [ Helper resources for deployment ]
    |-lib/                       [ Simulation engine libraries ]
```

Each microservice follows the structure of:

```
|-service-name/
  |-lib/
    |-[service module libraries and unit tests]
  |-index.js [injection point for microservice]
  |-package.json
```
