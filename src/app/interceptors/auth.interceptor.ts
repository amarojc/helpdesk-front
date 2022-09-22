import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor() {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //pegar o token que esta em localStorage e armazeno no cabeçalho da requisição.
    let token = localStorage.getItem('token');
    
    
    if(token){
      //Seto além do request.clone informações no headers do Bearer token 
      const cloneReq = request.clone({headers: request.headers.set('Authorization',`Bearer ${token}`)});
      //Sigo com a requisição com o clone...
      return next.handle(cloneReq);''
    }else{
      return next.handle(request);
    }
  }
 
  
}

// #multi -> Configuração necessária para informar ao Angular que o HTTP_INTERCEPTORS é um token para um multiprovedor
//# que injeta uma matriz de valores ao invés de um valor único.
//# Pesquisar sobre na documentação
export const AuthInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]
