import { Component, OnInit } from '@angular/core';
import * as  AuthActions from '../../+state/auth.actions';
import  {Store} from '@ngrx/store';
import { AuthState } from '../../+state/auth.reducer';
import * as AuthSelectors from '../../+state/auth.selectors'
@Component({
  selector: 'nrwl-project-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<AuthState>) { 
   
  }

  ngOnInit() {
  }

  signin(){
   this.store.dispatch(new AuthActions.Login());
  }
}
