# QA Automation Assignment
This project contains UI and API automation testing using Selenium (JavaScript) and Axios + Mocha

## Query Task
https://docs.google.com/document/d/10TAbIOl9APyHxZKm_KlnQhxLULbOrhUF/edit?usp=drive_link&ouid=114707961001733332981&rtpof=true&sd=true

## QA responsibilities & QA be involved early in the SDLC.docx
https://docs.google.com/document/d/16TpDqqXhQ3sS3kVjfUrSjdAaK4JkEEl4/edit?usp=drive_link&ouid=114707961001733332981&rtpof=true&sd=true

## Tech Stack
* Node.js
* Selenium WebDriver
* Mocha
* Axios

## Project Structure
tests/   -> UI automation test cases  
pages/   -> Page Object Model (POM)  
api/     -> API automation test cases  

## Setup Instructions

### 1. Clone Repository
git clone https://github.com/rezyprdtaa/selenium-automation-js.git
cd selenium-automation-js

### 2. Install Dependencies
npm install

### 3. Run API Automation
npm run api

### 4. Run All Tests UI Automation
npm test


## API Configuration
API: https://reqres.in/api/users?page=2
API testing uses Reqres public API

Note:
Reqres does not enforce API Key authentication, so requests will still return 200 even without API Key

### UI Automation
* Positive test cases (valid login, session handling)
* Negative test cases (invalid login, empty fields)

### API Automation
* GET request validation
* Invalid parameter testing
* Method validation (POST, PUT, DELETE)
* Response schema validation

## Test Evidence
https://drive.google.com/file/d/1ZEBGR0T9xCu_qioYVtcbraXU1tR1dqho/view?usp=drive_link