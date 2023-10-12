import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RwphComponent } from './rwph/rwph.component';
import { CwpsComponent } from './cwps/cwps.component';

const routes: Routes = [{path:"rwph",component:RwphComponent},{path:"",component:CwpsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
