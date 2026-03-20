# QA Automation Assignment
This project contains UI and API automation testing using Selenium (JavaScript) and Axios + Mocha.

## 📌 Tech Stack
* Node.js
* Selenium WebDriver
* Mocha
* Axios

## 📁 Project Structure
tests/   -> UI automation test cases  
pages/   -> Page Object Model (POM)  
api/     -> API automation test cases  

## ⚙️ Setup Instructions

### 1. Clone Repository
git clone https://github.com/rezyprdtaa/selenium-automation-js.git
cd qa-automation

### 2. Install Dependencies
npm install

### 4. Run API Automation
npm run api

### 5. Run All Tests UI Automation
npm test


## 🔐 API Configuration

API testing uses Reqres public API.

Note:
Reqres does not enforce API Key authentication, so requests will still return 200 even without API Key.

### UI Automation
* Positive test cases (valid login, session handling)
* Negative test cases (invalid login, empty fields)

### API Automation
* GET request validation
* Invalid parameter testing
* Method validation (POST, PUT, DELETE)
* Response schema validation

## 🎥 Test Evidence

