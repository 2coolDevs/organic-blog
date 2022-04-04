import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from 'src/app/main/pages/breakfast/breakfast.component';
import { FruitsComponent } from 'src/app/main/pages/fruits/fruits.component';
import { HomemadeComponent } from 'src/app/main/pages/homemade/homemade.component';
import { LunchComponent } from 'src/app/main/pages/lunch/lunch.component';

const routes: Routes = [

  {
    path: '',children: [
      {
        path: 'breakfast',component: BreakfastComponent
      },
      {
        path: 'lunch',component: LunchComponent
      },
      {
        path: 'fruits',component: FruitsComponent
      },
      {
        path: 'homemade',component: HomemadeComponent
      },
      {
        path: '**',redirectTo: 'home'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
