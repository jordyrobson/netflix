import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { NowPlayingComponent } from './component/now-playing/now-playing.component';
import { OriginalsComponent } from './component/originals/originals.component';
import { TopRatedComponent } from './component/top-rated/top-rated.component';
import { TrendingComponent } from './component/trending/trending.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'movie-details',
    component: MovieDetailsComponent
  },
  {
    path:'trending',
    component: TrendingComponent
  },
  {
    path:'top-rated',
    component: TopRatedComponent
  },
  {
    path:'now-playing',
    component: NowPlayingComponent
  },
  {
    path:'originals',
    component: OriginalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
