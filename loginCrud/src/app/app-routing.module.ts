import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'list', component: ListComponent },
  { path: 'auth/:id', component: AuthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
