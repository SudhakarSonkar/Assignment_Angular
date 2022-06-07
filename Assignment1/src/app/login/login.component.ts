import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators , FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient , private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['' , [Validators.required, Validators.email]],
      password:['' , [Validators.required , Validators.minLength(6)]]
    })
  }
  loggedIn(){
     this.http.post<any>("http://localhost:3000/login" , this.loginForm.value)
     .subscribe(result =>{
       console.log(this.loginForm.value.username)
       if(this.loginForm.value.username == "pooja.prajapat.sbg@gmail.com" && this.loginForm.value.password == "Pooja@123"){
       alert("logIn successfull");
       this.router.navigate(['flightDetail'])
      }
      else{
        alert("Not Valid")
      }
     }
     )
  }
}
