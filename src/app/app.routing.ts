
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AppPageComponent } from './components/app-page/app-page.component';
const APP_ROUTES = [
    { path: '', component : MainComponent },
    { path: 'app/:id', component : AppPageComponent  },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);