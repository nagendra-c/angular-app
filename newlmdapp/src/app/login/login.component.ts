import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
 loginForm! : FormGroup;
 username : string = "";
 password: string = "";
 
constructor(private _fb:FormBuilder, private router: Router){};

submitData(){
  if(this.username === 'nag' && this.password === '1234'){
    alert('login succesfull');
     this.router.navigate(['/dashboard']); 
  }else{
    alert('Invalid username or password')
  }
}

  ngOnInit(): void {
   this.loginForm = this._fb.group({
    username : ['',Validators.required],
    password : ['',Validators.required]
   });
  }

}
