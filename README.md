# code-quiz
The objective of this project was to create an interactive quiz page that tests user's knowledge of the computer science world with an array of questions.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
For all users the first thing you are going to need is to install git. If you already have git installed and have configured your account onto your local machine, then skip the following steps and go to the installing section. You can find the instructions on how to download and install the git software for operating systems of Linux, Mac and Windows at the following link: [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

<br>
Once you are on the page select the corresponding download link to the operating system of your own machine and follow the instructions.
<br>
After having installed the software and have created your own github account, you will now have to link your account to your local machine and you can do this by following the instructions at this link:  

<a href ="https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" >SSH Key</a>


### Installing

Now that you have git installed and you have configured your account to your local machine your next step will be to click on the clone or download button on the page of this repository and click on the clipboard symbol to copy the link. Next open up terminal (mac) or bash (windows), navigate to the directory you want your cloned directory to reside at, and type in the following code:

```
git clone
```

Then paste the copied link.

```
git clone git@github.com:RoyceWilliams510/code-refactor.git
```

## Application's functionality

### Overview of the directory
When opening the directory of the cloned file there are 2 other files in the main directory as well as an assets directory which contains an animated gif of a working example of this project, as well as the css file for the page. The contents of the css folder are rather bare since the majority of the styling done for this assinments is made through the use of bootstrap classes. In the index.html file there is a link to the css file, the script.js file and two links to the JQuery and Bootstrap CDN's. The application of the Bootstrap CDN like previously stated is used in styling html elements, but the application of the jquery CDN can be found throughout the script.js file.


### Jquery
Navigating over to the script.js file, one of the first lines of code you see is:


```
$(document).ready(function() {
```

This line of code is being executed when the document is loaded to prevent the DOM from being manipulated early, causing errors. The others examples seen of Jquery throughout the rest of the script.js file is seen whenever a HTML element is being appended, has it's text modified, or has it's display setting being changed. Whenever Jquery is being used in this code, it always starts with the notation of:


```
$("example").function();
```

This notation is what makes Jquery so usefull since it is essentially a shortcut to writing out:

```
document.querySelector("exammple")
```

To further understand the utility of JQuery, there is plenty of documentation at their [page](https://learn.jquery.com/)


### Opening the page
When the page is live and loaded in the browser the opening section of the page consists of a title, link to the score board, instruction list, and start button. When clicking the start button you will actually comence the quiz and will see a question prompt with three button options that correspond to the prompt. When clicking one of the three button options,the program will then run a function checkAnswer(), to see if you selected the correct answer and will either increment your score by 5 or decrement your score by 5. Once all 5 questions have been answered the score will be calculated in the endGame() function, and will display feedback to your performance. Finally there will also be a text input box with an id of player where users can submit their name to be added to the page's leaderboard. Once your name is submitted the page redirects you to the challenges leaderboard which should already be populated with some dummy data and two buttons, one to return back to the main page and the other to clear the leader board.


## Built With
* [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JQuery](https://learn.jquery.com/)


## Deployed Link

* [See Live Site](https://roycewilliams510.github.io/code-quiz/)


## Authors

 **Royce Williams** 

- [Github](https://github.com/RoyceWilliams510/)
- [LinkedIn](https://www.linkedin.com/in/royce-williams-3334261ab/)

## License

This project is licensed under the Bootstrap License 
