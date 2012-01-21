---
layout: post
title: The Quickish and Easish “Getting Started w/ GitHub” Article
---

I just finished reading [The quickest and easiest “Getting Started w/ GitHub” article you’ll ever read!](http://ryanlowdermilk.com/2012/01/the-quickest-and-easiest-getting-started-w-github-article-youll-ever-read/). While it's a good place to start I think using GitExtensions hurts beginners more then it helps. Call me a purest but I think you should learn the commands first and then add tools to help simplify the process. I also think his assumption of 'What 80% of People Do On GitHub' is a bit off. Maybe I'm wrong on that, but I would also like to make an assumption of my own in that if you are just getting started with Git then you probably aren't going to immediately start forking repositories or contributing to open source projects. We'll save those topics for another time, but I digress, here is my attempt to impart the same type of information in a way that will help you establish a solid foundation to build on when using Git and Github. 


###Terminology 

*Git* - A free, open source distributed version control system. I assume you already have Git installed on your machine. If not check out [Github's help docs](http://help.github.com/mac-set-up-git/) and grab the newest version for your OS.  
*Github* - A site for hosting and managing public or private projects tracked by Git.  
*Remote Repository* – Where the master copy of your code is stored. *This is where Github comes in*.  
*Local Repository* - Your local copy of the code Cloned from the Remote Repository you will edit and then Push back to the Remote Repository.  
*Clone* – Copy a Repository to your machine to work on.  
*Commit* – Confirm code changes to your Local Repository.  
*Push* – Upload your committed code changes to the Remote Repository.  
*Fork* – Create a new Remote Repository from the master copy of someone else's Remote Repository.  
*Pull Request* – Ask the owner of a Repository you have made changes to, to Pull the changes you made into the master copy of the code.  
*Pull* – Download the latest code changes from the Remote Repository to your Local Repository.  


###Typical Usage

1. Create a new project and add it to Github (Create a Remote Repository).  
2. Create a local copy on your local machine to work on (Clone the Remote Repository to create your Local Repository).  
3. Work on the project, make code changes, add or delete files, etc.  
4. Commit the changes they have made (Commit changes to your Local Repository).  
5. Pull down any changes made to the master copy and merge with your work (Pull from the Remote Repository).  
6. Push the changes to the master copy (Push the changes made in you Local Repository to the Remote Repository)  
7. Loop on steps 3-6  
8. ?  
9. Profit  


###Example

1. Create a Github account if you don't already have one or Log in. This should take you to your Github dashboard.  
2. In the *Your Repositories* section on the right hand side of the page click on *New Repository*.  
3. For the project name lets use *Getting Started with GitHub*, for the description lets use *The Quickish and Easish “Getting Started w/ GitHub” Article found at http://danielmcgraw.com* and for the homepage lets use *THE POSTS URL*. Lastly go ahead and hit the 'Create repository' button.  
4. On the following page you will see some instructions. We will be using the *Global setup* and *Next steps* portions. Go ahead and follow the steps in those sections and click on the *continue* link when you are done.  
*CONGRATULATIONS* You've just created your Remote Repository (and your Local Repository, but we are going to delete it and rebuild it to learn about Cloning).  
5. 