# URL Shrinker

### Shrink URLs to a 6-letter code or choose your custom words

[Available here](http://ushrink.nikhiltanwar.co)

Uses nanoid to crate 6-letter code. 
Uses MongoDB for DB (MongoDB Atlas for Hosting).
Ejs as a templating engine.

**TODO List**

- [x] Complete this README
- [x] Move to MongoDB atlas
- [x] Deploy this


**ENV Setup to test locally**

create ".env" file in root

template :
```
MONGO_URI=mongodb://localhost:27017/url_shrinker
PORT=5000
```
execute "npm run local"

NOTE: needs heroku cli to be installed
