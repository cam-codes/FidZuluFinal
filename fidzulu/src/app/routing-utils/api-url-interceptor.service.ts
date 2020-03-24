import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { getRouteMap } from './models';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiUrlInterceptorService implements HttpInterceptor {

  private readonly routeMap: Map<string, string>;

  constructor() {
    this.routeMap = getRouteMap();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const newUrl = this.injectTierUrl(req.url);
    req = req.clone({
      setHeaders: headersConfig,
      url: newUrl
    });
    return next.handle(req);
  }

  private injectTierUrl(url: string): string {
    url = url.slice(1);  // remove leading slash
    const [serviceName, ...parts] = url.split('/');
    const tierName: string = this.routeMap.get(serviceName);
    const baseUrl: string = environment.apiUrls.get(tierName);
    const joinedUrl: string = [baseUrl, tierName, serviceName, ...parts].join('/');
    return joinedUrl;
  }

}
