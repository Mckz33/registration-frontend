import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const request = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      }
    });
    return next.handle(request);
  }
}
