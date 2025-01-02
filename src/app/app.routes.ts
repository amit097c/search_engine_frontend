import  {NgModule} from '@angular/core'
import { Routes,RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
export const routes: Routes = [
    {path:'',component: SearchComponent},
    {path:'search-result',component: SearchResultComponent},
    {path:'**',component: SearchComponent}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })

// export class AppRoutingModule {}