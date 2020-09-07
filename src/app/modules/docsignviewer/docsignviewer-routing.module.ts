import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prerequisite } from '../../service/prerequisite';
import {ViewerComponent} from '../docsignviewer/viewer/viewer.component';

import { from } from 'rxjs';

const routes: Routes = [
    {
      path: '',
  
  
      children: [
        {
          path: '',
          component: ViewerComponent,
        
          data: {
            title: 'Sign',
            code: 'sign'
  
          }
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DocsignviewerRoutingModule { }
