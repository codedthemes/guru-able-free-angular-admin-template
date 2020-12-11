import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import {SharedModule} from '../../../../shared/shared.module';
import {ToastyModule} from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    SharedModule,
    ToastyModule.forRoot()
  ],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }
