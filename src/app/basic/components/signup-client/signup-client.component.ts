import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router' ;
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormControlComponent, NzFormItemComponent, NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-signup-client',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NzLayoutModule, NzFormControlComponent, NzFormItemComponent,NzButtonModule,NzFormModule,NzNotificationModule ],
  templateUrl: './signup-client.component.html',
  styleUrl: './signup-client.component.scss'
})
export class SignupClientComponent {
  validateForm! : FormGroup ; 

  constructor(private fb : FormBuilder,
    private authService: AuthService , 
    private notification: NzNotificationService,
    private router : Router
  ){}

  ngOnInit() {
    this.validateForm = this.fb.group({
      email : [null, [Validators.email , Validators.required ]] , 
      name : [null , [Validators.required]], 
      lastName : [null , [Validators.required]],      
      phoneNumber : [null], 
      password : [null, [Validators.required]],
      checkPassword : [null , [Validators.required]]
    })
  }

  submitForm(){ 
    this.authService.registerClient(this.validateForm.value).subscribe(res => { 
      this.notification.success(
        'SUCCESS',
        'SignUp Succesfull',
        {nzDuration : 5000}
      );
      this.router.navigateByUrl('/login') ;
    },error =>{
      this.notification.error(
        'Error' ,
        `${error.error}` ,
        {nzDuration : 5000}
      )
    })
  }

}
