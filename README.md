# FINMANAGER-BACKEND
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/c93d2738555241bda6c66e563421bd00)](https://www.codacy.com/gh/FINMANAGER/FINMANAGER-BACKEND/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=FINMANAGER/FINMANAGER-BACKEND&amp;utm_campaign=Badge_Grade)
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
- make sure you have created a project on firebase and added Authentication and Cloud Firestore
- create ***.env** file and add the firestore credentials in it
```txt
PORT=3000
API_KEY="your-api-key"
AUTH_DOMAIN="your-auth-domain"
DATABASE_URL=
PROJECT_ID="your-project-id"
STORAGE_BUCKET="your-storage-bucket"
MESSAGING_SENDER_ID="your-messagind-id"
APP_ID="your-app-id"
```

***For Contributors to this project***
- For contributors to this project switch to the dev brach to make any modifications
```
git checkout origin/dev-aron or git switch origin/dev-aron
```
- 

### Running the Project
To run the project in development mode

```
npm run dev
```
- This will start the server and you will be able to access the endpoints from http://localhost:3000

- To view the API documentations, run the following from your browser http://localhost:3000/api-docs/

To run the project in production mode
```
npm start
```

### Acknolegements
 - Fintech-team9 GADs 2022 Community project Team.
