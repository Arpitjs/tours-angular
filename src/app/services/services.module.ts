import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { notifyService } from './toastr.service';
import { AuthService } from './auth.service';
import { ToursService } from './tours.service';
import { PageNotFoundComponent } from './shared/page_not_found/four-o-four.component';
import { UsersService } from './users.service';
import {UploadService} from './uploadService'
import { ReviewService } from './reviews.service';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule
  ], 
  exports: [PageNotFoundComponent],

  providers: [AuthService, notifyService, ToursService, UsersService, UploadService, ReviewService]
})
export class ServicesModule { }
