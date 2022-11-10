<<<<<<< HEAD
<<<<<<< HEAD
# FINMANAGER-BACKEND
=======
# FINMANAGER-BACKEND

## API FOR FINMANAGER APP

In partial completion of the community project phase for the GADs 2022 program, Fintech-team9 developed this API to serve the FINMANAGER app. This APP is to help Personal Financial Management for individuals' income and also helps them keep track of their spending habits.

This API would  be able to provide
- Individuals' real-time spending details
- allow the creation of an initial budget to be managed
- add user details and 
- securely authenticate users into their profile
- manage user profiles

## Getting Started

To get started running this API locally, clone this [repository](https://github.com/FINMANAGER/FINMANAGER-BACKEND) into a desired location in your system.

### Pre-requisit:
- Have Node V16.17.1 or higher installed
- The server runs on expresss js 

### Environment Setup
- clone repository to your machine
- from the root folder of the project run the command below to install all project dependencies
```
npm install
```

***For Contributors to this project***
- For contributors to this project switch to the dev brach to make any modifications
```
git checkout dev or git switch dev
```
- 

### Running the Project
To run the project simply type the command

```
node server.js
```
- This will start the server and you will be able to access the endpoints from http://localhost:3000

- To view the API documentations, run the following from your browser http://localhost:3000/api-docs/

### Acknolegements
 - Fintech-team9 GADs 2022 Community project Team.






>>>>>>> e992b90... update: modified project README.md file
=======
# FINMANAGER-BACKEND
<?php
class User {
  // Holds the app’s current MySQLi object
  private $_mysqli;

  // Use the class constructor to store the passed MySQLi object
  public function __construct($mysqli) {
    $this->_mysqli = $mysqli;
  }

  // Here are the user chores we need to handle
  public function createUser() {

  }
  public function verifyUser() {

  }
  public function signInUser() {
 }
  public function sendPasswordReset() {

  }
  public function resetPassword() {

  }
  public function getDistanceUnit() {

  }
  public function updateDistanceUnit() {

  }
  public function deleteUser() {

  }
}
?>
>>>>>>> 4c9d7fd796a56de1a3e4fb0e5e4c02f2615d589f
