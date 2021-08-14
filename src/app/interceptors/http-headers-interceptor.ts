// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";

// @Injectable()

// export class HttpHeadersInterceptor implements HttpInterceptor{
//     constructor(){}
    
//     intercept(
//         req:HttpRequest<any>,
//         next: HttpHandler
//     ): Observable<HttpEvent<any>> {
//         req = req.clone({
//             setHeaders:({
//                 "api-endpoint":"api.openweathermap.org",
//             }),
//             setParams:{
//                 key:'b85b9066ff4578f06377b176b8590826'
//             }

//         });
//         return next.handle(req);
//     }
// }