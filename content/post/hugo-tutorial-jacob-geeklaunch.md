---
title: "Hugo Tutorial Jacob Geeklaunch"
date: 2017-11-07T11:56:16+01:00
draft: true
---

#hugo #tutorial #youtube #ghpages #static #generator

Rating 5/5

# Make your own website

## Hugo tutorial

Following the tutorial of [GeekLauch](https://www.youtube.com/watch?v=3wkR8GyDODs). Note that this tutorial requires bash or `bash on ubunut on windows`.

``` bash
hugo new site tutorial-jacob
cd tutorial-jacob
vim config.toml # to see what's in the file. Type `esc` or `u` when accidently edited.
hugo new post/first-post.md
# write something in the first-post.md
vim content/post/first-post.md
```

- [ ] type `ESC` and `:wq` to quit VIM.
- [ ] preview by typing `hugo server` runs locally on your computer. Gives an empty site, because there is no theme.
- [ ] get a hugo theme from https://themes.gohugo.io from the repository URL. This tutorial uses the [cactus theme](https://themes.gohugo.io/cactus/).

``` bash
git init
git submodule add https://github.com/digitalcraftsman/hugo-cactus-theme.git themes/hugo-cactus-theme
```

- [ ] `hugo server` in either `cmd` or `bash` still shows empty website, because hugo still not uses the theme. It needs configuration.
- [ ] copy everything from exampleSite current directory `/themes` using bash
- [ ] remember the folder name of your theme

``` bash
ls # lists out all files in the dirextory
# copy everything from exampleSite to here
cp themes/hugo-cactus-theme/exampleSite/* . -r
ls # lists out all files in the dirextory
# windows uses dir
```
- [ ] now edit the config.toml

``` bash
vim config.toml
```

- [ ] remove or change the baseurl into `https://yourname.github.io/tutorial-jacob/`
- [ ] change the value of `themesDir` to 'themes'
- [ ] change value of `theme` to the theme name

Typing `hugo server` in either `cmd` or  `bash` will now show a working site. However your first-post.md does not show. What's going on?

- [ ] open bash
- [ ] delete posts you do not need
- [ ] undraft your first-post.md

``` bash
cd content/post
ls # dir in windows
# remove all posts but not first-post.md
rm file1 file2 etcetera # del in windows
hugo undraft content/post/first-post.md
# or edit directly
vim content/post/first-post.md
```

- [ ] check if `draft: false` (necessary to display this post)

## Publicize online

Github supports hosting a static website which is called gh-pages.

- [ ] create a new repository
- [ ] copy the git URL link for remote github pages

``` bash
# make sure your site name matches the repository name on Github
git remote add origin https://github.com/youraccount/tutorial-jacob.git
git status
git add --all
git commit -m "My initial static site commit" 
git push -u origin master # pushes all files to github
```

- [ ] go to Settings --> scroll down to Github Pages --> `master branch /docs` --> You cannot select it, because the site is not stored in a docs folder.

We don't want to use the masterbranch, because it's a Hugo project. We need a website.

- [ ] run `hugo` to compile/generate a website

``` bash
ls # dir shows 'public' folder
# we need a docs folder
vim config.toml
```

- [ ] create a docs folder by adding `publishDir = "docs"` in the config.toml file

- [ ] run `hugo` again. This creates a docs folder. Check with `ls` or `dir`
- [ ] now you can remove the public folder. The docs folder stores all the static website data now.

``` bash
rm -r public
git status
git add --all
git commit -m "My second commit using the docs folder for statics."
git push
```

- [ ] to turn off gh-pages create a new branch `turn-off-gh-pages` and go to Settings --> Brnaches --> Default branch --> `turn-off-gh-pages`
- [ ] run `hugo` to compile the static site
- [ ] make sure you create a passphrase for github with 6 seperated securely randomized words. Useful because long passwords are difficult to remember and reading and typing errors may occur.

``` bash
git status
git add -all
git commit -m "My third commit"
git push
# if an error occurs
git push --set upstream origin master
# request for password
```

- [ ] now you can select the `master branch /docs` folder under Settings --> Save

## Problem solver

If your theme doesn't render properly check that the config.toml gets from the correct theme file.

Check for typos. One mistake, one character different, can completely mess up the entire process. For instance, `git add -all` means no files are prepared to be pushed.

## Next

The next tutorial is about Hugo taxonomies: catgories and tags They serve as visual navigation. The theme used is the [hugo-icarus](https://github.com/digitalcraftsman/hugo-icarus-theme) theme.