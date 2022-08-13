import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'signup',
    loadChildren:() => import('./core/core.module').then((m)=> m.CoreModule)
  },
  {path:'**', redirectTo:'signup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
