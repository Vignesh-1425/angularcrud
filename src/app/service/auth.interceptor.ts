import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { TokenService } from "../service/token.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { }

        intercept(req: HttpRequest<any>, next: HttpHandler) {
            const accessToken = this.tokenService;
            req = req.clone({
                setHeaders: {
                    
                }
            });
            return next.handle(req);
        }
}