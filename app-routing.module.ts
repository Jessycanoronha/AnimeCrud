import { DetalhesComponent } from './detalhes/detalhes.component';
import { MestreComponent } from './mestre/mestre.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router'

const routes: Routes = [

  { path: '', redirectTo:'/mestre', pathMatch: 'full'},
  { path: 'mestre', component: MestreComponent },
  { path: 'detalhes', component: DetalhesComponent },
  

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
