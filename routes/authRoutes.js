const passport = require('passport');

module.exports = (app) => {
    //Use google Stratagy to authenticate
    app.get('/auth/google', 
        passport.authenticate('google',{
            scope: ['profile','email']
        })
    );
    //Use google stratagy again 
    app.get('/auth/google/callback', passport.authenticate('google'));
    //get current user
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    //log user out
    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user);
    });
};
