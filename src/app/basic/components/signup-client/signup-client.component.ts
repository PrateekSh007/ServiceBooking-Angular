import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from 'express';

@Component({
  selector: 'app-signup-client',
  imports: [],
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
      email : [null, [Validators.email, ]]
    })
  }

}
