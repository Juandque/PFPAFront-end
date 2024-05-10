import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { GestionNegociosComponent } from './componentes/gestion-negocios/gestion-negocios.component';
import { CrearNegocioComponent } from './componentes/crear-negocio/crear-negocio.component';
import { DetalleNegocioPropietarioComponent } from './componentes/detalle-negocio-propietario/detalle-negocio-propietario.component';
export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: "gestion-negocios", component: GestionNegociosComponent },
{ path: "crear-negocio", component: CrearNegocioComponent },
{ path: "detalle-negocio-propietario/:codigo", component: DetalleNegocioPropietarioComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }
];