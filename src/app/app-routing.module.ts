import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodeCheckComponent } from './pages/code-check/code-check.component';
import { HompageComponent } from './pages/hompage/hompage.component';
import { PackageSearchComponent } from './pages/package-search/package-search.component';

const routes: Routes = [
  { path: '', component: HompageComponent },
  { path: 'search/inbound', component: PackageSearchComponent },
  { path: 'search/outbound', component: PackageSearchComponent },
  { path: 'code', component: CodeCheckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
