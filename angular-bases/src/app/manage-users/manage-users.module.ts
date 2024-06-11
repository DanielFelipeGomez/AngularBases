import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';



@NgModule({
  declarations: [
    ManageUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ManageUsersComponent
  ]
})
export class ManageUsersModule { }
