import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {Routes} from '@angular/router';

//from course
import {RouterModule} from '@angular/router';


const routes:Routes =[
  {path:'welcome',component:WelcomeComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({    
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
