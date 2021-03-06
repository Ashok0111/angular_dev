import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MenuConfigComponent } from './admin/menu-config/menu-config.component';
import { GroupConfigComponent } from './admin/group-config/group-config.component';
import { GroupFormComponent } from './admin/group-form/group-form.component';
import { AuthGuard } from './shared/authentication_guard/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogFormViewComponent } from './home/blog-form-view/blog-form-view.component';
import { BlogTreeViewComponent } from './home/blog-tree-view/blog-tree-view.component';



const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'blog_form', component: BlogFormViewComponent},
      {path: 'blog_tree', component: BlogTreeViewComponent},
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'menu_config', component: MenuConfigComponent},
      {path: 'group_config', component: GroupConfigComponent},
      {path: 'group_form', component: GroupFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
