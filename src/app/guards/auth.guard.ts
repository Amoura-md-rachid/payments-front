import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  // Déclaration du constructeur de la classe.
// Le constructeur est privé, ce qui signifie qu'il ne peut être appelé que depuis l'intérieur de la classe.
// Il prend deux paramètres : authService et router.
  private constructor(
    // authService est une instance de AuthService.
    // AuthService est probablement un service qui gère l'authentification des utilisateurs.
    private authService : AuthService,

    // router est une instance de Router.
    // Router est un service qui permet de naviguer entre les différentes routes de l'application.
    private router : Router
  ) { }

// Méthode canActivate qui détermine si une route peut être activée.
// Elle prend deux paramètres : route et state.
  canActivate(
    // route est une instance de ActivatedRouteSnapshot.
    // ActivatedRouteSnapshot contient l'information sur une route liée à une instance de component chargée.
    route: ActivatedRouteSnapshot,

    // state est une instance de RouterStateSnapshot.
    // RouterStateSnapshot est une représentation de l'état du routeur à un moment donné.
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    // Si l'utilisateur est authentifié (vérifié par le service d'authentification),
    // la méthode retourne true et l'accès à la route est autorisé.
    if( this.authService.isAuthenticated){
      return true;
    } else {
      // Si l'utilisateur n'est pas authentifié, la méthode redirige l'utilisateur vers la page de connexion
      // et retourne false, ce qui signifie que l'accès à la route est refusé.
      this.router.navigateByUrl('/login');
      return false;
    }
  }




}
