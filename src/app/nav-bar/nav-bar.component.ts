import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor()
  {
    this.loginRedirect();
  }

  loginRedirect(){
    let loginButton = document.querySelector("#login") as HTMLElement;
    loginButton.addEventListener("click", ()=>{
      
    })

  }
}
