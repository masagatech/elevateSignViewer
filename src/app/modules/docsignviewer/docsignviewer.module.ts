import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer/viewer.component';
import {DocsignviewerRoutingModule} from '../docsignviewer/docsignviewer-routing.module';
import { iViewerModule } from "esigndoccontrol";
import {SharedModule} from '../../shared/shared.module';
@NgModule({
  declarations: [ViewerComponent],
  imports: [
    CommonModule,
    DocsignviewerRoutingModule,
    iViewerModule,
    SharedModule
  ]
})
export class DocsignviewerModule { }
