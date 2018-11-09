import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private oauthService: OAuthService) { }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public get ientityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  public get accessToken() {
    return this.oauthService.getAccessToken();
  }


  public getUserProfile() {
    const isValid = this.oauthService.hasValidAccessToken();
    if (isValid) {
      console.log(this.oauthService.loadUserProfile());
    } else {
      console.log('You dont have access token yet.');
    }
  }
}
