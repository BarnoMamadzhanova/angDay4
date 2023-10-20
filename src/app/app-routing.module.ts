import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContentDetailsComponent } from './content-details/content-details.component';

const routes: Routes = [{
  path: "", component: BlogPageComponent
}, {
  path: "content/:contentID", component: ContentDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
