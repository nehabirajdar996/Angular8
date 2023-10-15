// import { HttpHandler, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// mport { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })
// export class InterceptorService implements HttpInterceptor{

//   intercept(req: HttpRequest<any>, next: HttpHandler){
//     return next.handle(req)
//   }
//   constructor() { }
// }

// // import { Injectable } from '@angular/core';
// // import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// // import { Observable } from 'rxjs';

// // @Injectable()
// // export class MyInterceptor implements HttpInterceptor {
// //   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// //     // Modify the request before it is sent
// //     const modifiedRequest = request.clone({
// //       setHeaders: {
// //         Authorization: 'Bearer YOUR_ACCESS_TOKEN'
// //       }
// //     });

// //     // Handle the modified request with the next interceptor or the HTTP handler
// //     return next.handle(modifiedRequest);
// //   }
// // }