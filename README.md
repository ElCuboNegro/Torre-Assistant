# Kronos Torre

## Description: 
Kronos Torre is a Google Action that can help you to find a job.

- [Kronos Torre](#kronos-torre)
  - [Description:](#description)
  - [Installation:](#installation)
    - [NodeJS](#nodejs)
    - [Gactions](#gactions)
    - [Firebase CLI](#firebase-cli)
  - [Usage:](#usage)
    - [Create and setup the project:](#create-and-setup-the-project)
  - [](#)
  - [In deep documentation:](#in-deep-documentation)
  - [Contributing](#contributing)
  - [Credits:](#credits)
  - [License:](#license)

## Installation: 
### NodeJS
Download and install [Node.js](https://nodejs.org/) according to the Node.js documentation to use the fulfillment library. Your installation of Node.js also allows you to install the Firebase CLI with npm, and later, to run your conversational fulfillment implementation locally.
### Gactions
Install the gactions command line interface (CLI) tool by downloading an installation package, unpacking it, and configuring your execution path.

To install and configure gactions, follow these steps:

1. Download the appropriate package for your operating system:</br>
   
|  Platform	| Package	| checksum 	|
|-	|-	|-	|
|Windows  	|  [Download](https://dl.google.com/gactions/v3/release/gactions-sdk_windows.zip) 	|  [sha256](https://dl.google.com/gactions/v3/release/gactions-sdk_windows.zip.sha256)	|
|Linux  	| [Download](https://dl.google.com/gactions/v3/release/gactions-sdk_linux.tar.gz) 	|  [sha256](https://dl.google.com/gactions/v3/release/gactions-sdk_linux.tar.gz.sha256) 	|
|Mac  	    |  [Download](https://dl.google.com/gactions/v3/release/gactions-sdk_darwin.tar.gz)	|  [sha256](https://dl.google.com/gactions/v3/release/gactions-sdk_darwin.tar.gz.sha256)	|</br>

2. Extract the package to a location of your choice and add the binary to your environment's PATH variable. Alternatively, extract the package to a location that's already in your PATH variable (for example, /usr/local/bin).
3. On Linux and Mac, enable execute permissions if necessary:

```
$ chmod +x PATH_TO/gactions
```

1. Run the following command to authenticate the CLI. This command starts an authentication flow and requires a web browser: 
   
```
$ gactions login
``` 

2. When the flow is complete, the CLI automatically authenticates.

### Firebase CLI
Install and set up the [Firebase CLI](https://firebase.google.com/docs/cli#setup_update_cli) according to the Firebase documentation. The Firebase CLI lets you deploy an Interactive Canvas web app to Firebase Hosting and, if necessary, manually deploy fulfillment to Cloud Functions for Firebase.

## Usage: 
### Create and setup the project:
Before you can use the gactions command-line tool, you must create a project in the Actions console and give gactions access to the project. To create and set up a copy of this project, do the following:

Go to the [Actions console](https://console.actions.google.com/).
Click New project, enter a project name, and click Create project, Select the games category (this will allow us to create html canvas inside the action) and click Next.
Select Blank project and click Start building.
Enable the Actions API in the Google Cloud console by following the instructions in [Enable and disable APIs](https://support.google.com/googleapi/answer/6158841). This allows gactions to interact with your project.



1. Create an empty directory and initialize the hello-world sample in that directory. For example, the following code initializes the sample in an example/ directory, which is used as an example throughout this document, but you have to create your own:

```
gactions init hello-world --dest example
cd example
```

## 

## In deep documentation:
TBD

## Contributing
TBD

## Credits:
Google Actions SDK -> Google LLC.
Nuxt.js -> Creators

## License: 
Copyright, Juan José Albán (2021)