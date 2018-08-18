var walk    = require('walk');
var files   = [];

/**
 * not working
 * @type {{register: module.exports.register}}
 */

var Stats = {
    connections: 0,
    sockets:{},
    views: {}
};

module.exports = {
    register: function register(app, server){
        
        app.all('*', function(req, res, next){
    
    
            log.verbose('Request:', req.path, req.method);
            if(req.url.indexOf(".") == -1) {
                log.verbose('Request:', req.url, req.method);
                if (!Stats.views[req.path]) {
                    Stats.views[req.path] = {
                        GET: 0,
                        PUT: 0,
                        POST: 0,
                        DELETE: 0
                    }
                }
                Stats.views[req.path][req.method]++;
            }
            
            next();
        });
    
        app.get('/stats', function(req, res, next){
            res.send(Stats);
        });
        
    }
};