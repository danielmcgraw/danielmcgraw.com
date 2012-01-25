---
layout: post
title: The Quickish and Easish “Getting Started w/ GitHub” Article
---

I just finished reading [The quickest and easiest “Getting Started w/ GitHub” article you’ll ever read!](http://ryanlowdermilk.com/2012/01/the-quickest-and-easiest-getting-started-w-github-article-youll-ever-read/). While it's a good place to start I think using GitExtensions hurts beginners more then it helps. Call me a purest but I think you should learn the commands first and then add tools to help simplify the process. I also think his assumption of 'What 80% of People Do On GitHub' is a bit off. Maybe I'm wrong on that, but I would also like to make an assumption of my own in that if you are just getting started with Git then you probably aren't going to immediately start forking repositories or contributing to open source projects. We'll save those topics for another time, but I digress, here is my attempt to impart the same type of information in a way that will help you establish a solid foundation to build on when using Git and Github. 


###Terminology 

<br />

####*Git*
A free, open source distributed version control system. I assume you already have Git installed on your machine. If not check out [Github's help docs](http://help.github.com/mac-set-up-git/) and grab the newest version for your OS.  
####*Github*
A site for hosting and managing public or private projects tracked by Git.  
####*Remote Repository*
Where the master copy of your code is stored. *This is where Github comes in*.  
####*Local Repository*
Your local copy of the code Cloned from the Remote Repository you will edit and then Push back to the Remote Repository.  
####*Clone*
Copy a Repository to your machine to work on.  
####*Commit*
Confirm code changes to your Local Repository.  
####*Push*
Upload your committed code changes to the Remote Repository.  
####*Fork*
Create a new Remote Repository from the master copy of someone else's Remote Repository.  
####*Pull Request*
Ask the owner of a Repository you have made changes to, to Pull the changes you made into the master copy of the code.  
####*Pull*
Download the latest code changes from the Remote Repository to your Local Repository.  

<br /><br />

###Typical Usage

1. Create a new project and add it to Github (Create a Remote Repository).  
2. Create a local copy on your local machine to work on (Clone the Remote Repository to create your Local Repository).  
3. Work on the project, make code changes, add or delete files, etc.  
4. Commit the changes you have made (Commit changes to your Local Repository).  
5. Pull down any changes made to the master copy and merge with your work (Pull from the Remote Repository).  
6. Push the changes to the master copy (Push the changes made in you Local Repository to the Remote Repository)  
7. Loop on steps 3-6  
8. ?  
9. Profit  

<br /><br />

###Example  

<br />

####The Remote Setup - Creating your master copy and Remote Repository  
- Create a Github account if you don't already have one or Login if you do. This should take you to your Github dashboard.  
- On the right had side of your dashboard you will see a section titled *Your Repositories*. Click on the button next to that section title labled *New Repository*.  
- For the project name lets use '*Getting Started with GitHub*', for the description lets use '*The Quickish and Easish “Getting Started w/ GitHub” Article found at http://danielmcgraw.com*' and for the homepage lets use '*http://danielmcgraw.com/2012/01/25/The-Quickish-and-Easish-Getting-Started-with-GitHub-Article/*'. Lastly go ahead and hit the 'Create repository' button.  
- On the following page you will see some instructions. We will be using the *Global setup* and *Next steps* sections. Go ahead and follow the steps in those sections and click on the *continue* link when you are done.

<br />

*CONGRATULATIONS*! You've just created your Remote Repository (and your Local Repository, but we are going to delete it and rebuild it to learn about Cloning).  

<br />
  
####The Local Setup - Building your Local Repository  
- Lets create a blank slate to work from. Go ahead and delete the 'Getting-Started-with-GitHub' on your local machine.  
- Open up a terminal and move to a location you would like to create your Local Repository in.  
- It's time to clone your Remote Repository. This will require that you have set up you ssh key with Github. If you don't already have that set up, again, check out [Github's help docs](http://help.github.com/ssh-key-passphrases/).  
<br />
{% highlight sh %}
	git clone git@github.com:YOUR-GITHUB-USER-NAME/Getting-Started-with-GitHub.git
{% endhighlight %}
<br />
Once this command completes you should have a folder called 'Getting-Started-with-GitHub' that contains your Local Repository. 

<br />

*RAD*! Now you have your Local Repository set up. Time to get working.

<br />

####Getting Your Git On - Day to day usage using Pull, Commit, and Push
- Move into the folder containing your Local Repository.
- Pull down any changes from the Remote Repository and merge them with your changes.
<br />
{% highlight sh %}
	git pull
{% endhighlight %}
<br />
- Make edits to the Local Repository. This is as simple as opening up files in your favorite editor and adding to them. For instance open up the README file and add some lines to it, save the file and close it.  
	*As a side note if you want to add files you just create them in or move them to the location you want them in your Local Repositories directory structure and tell git to start tracking them. Lets pretend we are making a website and we want to add a blank index.html file to work on later.*
<br />
{% highlight sh %}
    touch index.html
    git add index.html
{% endhighlight %}
<br />
- We've made our edits so now its time to commit them to the Local Repository. Notice we use the -a flag which commits *all* our changes to tracked files.
<br />
{% highlight sh %}
	git commit -a
{% endhighlight %}
<br />
- Push your commits to the Remote Repository. This may require you to pull again if someone has pushed changes to the Remote Repository since the last time you Pulled from the Remote Repository. This is to make sure you aren't making conflicting changes and to keep a consistent state so you don't do work someone else has already done.
<br />
{% highlight sh %}
	git push
{% endhighlight %}  
<br />
- Repeat the last three tasks (Edit, Pull, Push) to your hearts content. 

<br />

Thats all there really is to it to get up and running with git and Github. I really suggest you build on this base knowledge and check out some of the awesome advanced commands and options in git and Github. I've heard building a blog using git, Github, and [Jekyll](/2011/04/14/The-Ultimate-Guide-To-Getting-Started-With-Jekyll-Part-1) was super rad and easy :P