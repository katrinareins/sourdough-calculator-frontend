# Absolute Baking Success

Welcome! This is the github repo for the client-side of Absolute Baking Success, a web application that helps its users calculate naturally leavened bread ingredient proportions and save important baking notes. 

## Why This Project? ##
Sourdough bread, or naturally leavened bread, is a tricky culinary endeavor. It is part art, part science. The results vary according to the ingredients used, they also greatly depend on environmental factors over which we have limited control. Because of this, bakers often take careful notes on each bake. 

These may include things like the weather that day, what flours were used, bench rest time, how the dough felt or smelled like, etc. The list goes on. These detailed notes often end up on various bits of paper and note pads, which are also subject to the often cahotic conditions of our kitchens.  

This project was created to help keep track of all these notes. A rating functionality was added to allow users to look back on successful bakes and see what they did right. When creating a new bake, the user can also enter the percentage required for each ingredient and total amount of flour in grams and see how much water, salt and leaven is required. 

## Technologies used ## 

The backend was built on Ruby on Rails (ruby-2.6.1) with a Postgres/PostgreSQL database. 

The front was built with React.

## Prerequisites ## 

To use: Please clone down this repository by copying the link and running ```git clone <repo_url>``` in your terminal. 

This also requires that you have a node package manager ```npm``` or ```yarn``` installed. Please see documentation before getting started. 

Please also make sure to clone down the backend API, which requires Ruby and PostGreSQL: https://github.com/learn-co-kat/sourdough-calculator-backend

Server:
```ruby
$ bundle install
$ rails db:create
$ rails db:migrate
$ rails db:seed //if you want dummy data

$ rails s //start server 

```

Client:
```javascript
$ npm install

$ npm start
```
