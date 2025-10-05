import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

  // Endpoints publics qu'on ne protège pas
  const publicEndpoints = ['/user/register', '/user/login', '/user/roles', '/upload'];
  if (publicEndpoints.some(url => req.url.includes(url))) {
    return next(req);
  }

  // Ajouter le token si présent
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

  return next(req);
};
