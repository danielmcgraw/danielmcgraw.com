---
layout: post
title: 'The Ultimate Guide To Getting Started With Jekyll: Part 1'
---

If you're interested in Jekyll and dont know where to start this is your guide. I will be walking you through everything you need from setting up an environment to deploying your page via GitHub Pages. Today we will be setting up a working environment for local development.

Lets start with some background. Jekyll is a simple static website generator used for blogging. It was created by the cofounder of [GitHub](https://github.com/), [Tom Preston-Werner](http://tom.preston-werner.com/) ([mojombo](https://github.com/mojombo) on GitHub), as the engine for [GitHub Pages](http://pages.github.com/). Essentially Jekyll renders a static HTML site, suitable for being served by any web server, from template files that are processed by Textile or Markdown and Liquid converters. So now that you know what Jekyll is, lets get a local development environment set up.

I'm going to assume you have [Ruby](http://www.ruby-lang.org/en/) already installed, if not jump over to the [Ruby download page](http://www.ruby-lang.org/en/downloads/) and get it installed. Now all you need in to gem install Jekyll.
{% highlight bash %}
sudo gem install jekyll
{% endhighlight %}

You are welcome to use Textile if you would like, but we will be using markdown in these tutorials so next we will be gem installing RDiscount.
{% highlight bash %}
sudo gem install rdiscount
{% endhighlight %}

Lastly we will be cloning a Jekyll base directory to set up the minimum required file structure for setting up your Jekyll blog. 
{% highlight bash %}
git clone git@github.com:danielmcgraw/Jekyll-Base.git
{% endhighlight %}

If you would like to set the file/folder structure yourself, just follow the structure created in [Jekyll-Base](https://github.com/danielmcgraw/Jekyll-Base).

This is all you need to get started so lets start up the Jekyll server and check out what we have so far. From inside the base folder run
{% highlight bash %}
jekyll --server
{% endhighlight %}

This will compile your blog and put it into the _site folder. It also starts a webserver on port 4000. Navigate your web browser to localhost:4000 and you will see that you have the beginnings of a blog. 

Next time we will be taking a look at the file structure and what each of the files/folders do.
