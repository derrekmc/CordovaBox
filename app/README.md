# CordovaBox
##### A MVC Framework for nodejs
#
#
---
#
### Install & Launch
```

npm install cordovabox
cordovabox new appname
npm install
npm start
npm start - to run in cluster mode. Vertical scaling
npm run-script single - Run in single instance mode
node server.js - Run in single instance mode without gulp

```

### Test
```
npm test
```

### Environmental Variables

`MONGO_URL` - Mongo database host url. Used for the primary data storage.
`REDIS_URL` - Redis server host url. Used for socket clustering and clustered session support
`db` - database namespace
`prefix` - Session prefix
`maxAge` - Max cookie age
`secret` - Your applications secret identifier
```
MONGO_URL="mongodb://credentials:password@yourmongodbserver.com:port/db" npm start
```
### Server Stats
**http://localhost:3000/stats

