import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent, pathMatch: 'full'},
  {path: 'entry', component: EntryComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
