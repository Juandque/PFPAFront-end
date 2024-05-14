import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { GestionNegociosComponent } from './componentes/gestion-negocios/gestion-negocios.component';
import { CrearNegocioComponent } from './componentes/crear-negocio/crear-negocio.component';
import { DetalleNegocioPropietarioComponent } from './componentes/detalle-negocio-propietario/detalle-negocio-propietario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { ExplorarNegociosComponent } from './componentes/explorar-negocios/explorar-negocios.component';
export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: "gestion-negocios", component: GestionNegociosComponent },
{ path: "explorar-negocios", component: ExplorarNegociosComponent},
{ path: "favoritos", component: FavoritosComponent},
{ path: "crear-negocio", component: CrearNegocioComponent },
{ path: "detalle-negocio-propietario/:codigo", component: DetalleNegocioPropietarioComponent },
{ path: "perfil", component: PerfilComponent},
{ path: "**", pathMatch: "full", redirectTo: "" }
];