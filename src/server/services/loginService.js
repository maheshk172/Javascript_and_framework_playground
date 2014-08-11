/**
 * Created by Mahesh on 11-08-2014.
 */

(function(loginService){

    loginService.init = function(app){

        app.get('/authenticate/user', function(request, response){
           console.log("Authenticating user ");

           var username = request.getParameter('username');
           var password = request.getParameter('password');

           if (user === 'admin' && password === 'admin'){
               response.send({'status':'Authorized'});
           } else {
               response.send({'status':'Not_Authorized'});
           }
        });

    };

}(module.exports));