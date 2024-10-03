import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Importa tu AppComponent standalone
import { provideHttpClient } from '@angular/common/http';  // Para HttpClient
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Importa tus rutas

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Proveedor para HttpClient
    provideRouter(routes)  // Proveedor para las rutas
  ]
}).catch(err => console.error(err));
