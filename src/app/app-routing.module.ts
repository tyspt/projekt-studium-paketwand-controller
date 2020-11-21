import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HompageComponent } from './hompage/hompage.component';
import { PackageSearchComponent } from './package-search/package-search.component';

const routes: Routes = [
  { path: '', component: HompageComponent },
  { path: 'search/inbound', component: PackageSearchComponent },
  { path: 'search/outbound', component: PackageSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
