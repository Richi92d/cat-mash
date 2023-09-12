import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageVoteComponent } from './components/page-vote/page-vote.component';

const routes: Routes = [
  {
    path: 'home', component: PageHomeComponent,
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'vote', component: PageVoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }
