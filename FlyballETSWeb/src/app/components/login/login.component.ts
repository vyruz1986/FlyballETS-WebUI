import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../class/user';
import { SecureEtsDataService } from '../../services/secure-ets-data.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
   providers: [AuthService]
})
export class LoginComponent implements OnInit {

   public user = new User('', '');
   public errorMsg = "";
   constructor(private _authSerice:AuthService, private _secEtsDataService:SecureEtsDataService) { }

   login(){
      this._authSerice.login(this.user).subscribe(         
         (data) => {
            this._secEtsDataService.isAuthenticated = true;
            this._secEtsDataService.enableRetry();
         },
         (error) => {
            this._secEtsDataService.isAuthenticated = false;
         }
      );
   }

   ngOnInit() {
   }

}