# Mail Track
<div align="center">
  <img src="https://i.ibb.co/hWbdctV/mailtracker.png">
  
  
  [![GitHub forks](https://img.shields.io/github/forks/TusharAMD/Mailtrack.svg?style=flat&label=Fork&maxAge=43200)](https://gitHub.com/TusharAMD/Mailtrack/network/)
  [![GitHub stars](https://img.shields.io/github/stars/TusharAMD/Mailtrack.svg?style=flat&label=Star&maxAge=43200)](https://gitHub.com/TusharAMD/Mailtrack/stargazers/)
  
  
  [![GitHub issues](https://img.shields.io/github/issues/TusharAMD/Mailtrack.svg)](https://github.com/TusharAMD/Mailtrack/issues)
[![GitHub issues closed](https://img.shields.io/github/issues-closed/TusharAMD/Mailtrack.svg)](https://github.com/TusharAMD/Mailtrack/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/TusharAMD/Mailtrack.svg)](https://github.com/TusharAMD/Mailtrack/pulls)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-closed/TusharAMD/Mailtrack.svg)](https://github.com/TusharAMD/Mailtrack/pulls?q=is%3Apr+is%3Aclosed)
![GitHub repo size](https://img.shields.io/github/repo-size/TusharAMD/Mailtrack?color=yellow)

</div>

## 📖 Introduction 

- This application tracks the email, let user know whether someone opens the mail and also how many times the email has been opened.
- It works using Pixel tracking method
- Most the work is carried out in the backend. A image is generated for the user and then added in backend folder.
- This link is added in the email message and when user opens the mail a GET request is made. We also track IP address but its of the mail provider and not user.
- Then the data is added to Mongodb and whenever GET request is made current time is appended into the database and we can know when user opens the mail
[![](https://res.cloudinary.com/marcomontalbano/image/upload/v1646922310/video_to_markdown/images/youtube--EbSn3xdAwAQ-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/EbSn3xdAwAQ "")
## ✨ How to Contribute

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

The frontend part is created using react and to run it we need to run npm i and npm start command
This will open the react app
Now to run the backend which is created using flask we need to simply run python app.py. The backend contains REST APIs which enable our react to communicate with MongoDB database.
Our current goal is to redesign the whole project and remove the form input for sending email and instead enable user to login from their email id and send emails just like we do in All in one mail apps which are pre-installed on our devices.

### Steps to Contribute
- 1. Fork this repo and clone it on your local machine 
- 2. Next create a new branch stating issue number and switch to it
- 3. Make changes and commit changes
- 4. Push to remote
- You can follow these links for proper code and walkthrough [How to contribute](https://opensource.com/article/19/7/create-pull-request-github), [Youtube Video](https://www.youtube.com/watch?v=waEb2c9NDL8&t=273s&ab_channel=Jovo)

## Part of Girlscript Summer of Code 2022
<img width="200px" src = https://i.ibb.co/gF9Pvd4/image.png></img>

## 💻 Languages and Frameworks
- Python
- Javascript
- React
- Flask
- Auth0
- MongoDB Atlas

## Licenses
[MIT LICENSE](LICENSE)
