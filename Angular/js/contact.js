/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('logIn', []) .controller('MainCtrl', [function() {
        var self = this;

        self.change = function() {
            self.name = 'Juan Perez';
            self.username = 'JPerez';
            self.password = 'password';
            self.repassword = 'password';
            self.movie = 'Cronicas';
        };
        self.submit = function() {

            if(self.password !== self.repassword){
                alert('Retype your password is not the same');
            }
            else {
                alert('User clicked submit with ',
                
                self.name,
                self.username,
                self.password,
                self.repassword,
                self.movie        
                        
                );
            }    
        };
}]);

