import { Injectable } from '@angular/core';

@Injectable()
export class EsriLoaderService {

  private apiUrl = 'https://js.arcgis.com/4.5/';
  private cssUrl = 'https://js.arcgis.com/4.5/esri/css/main.css';

  public require(...modules: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      Promise.all([this.loadJs(), this.loadCss()]).then((results: any[]) => {
        const require = results[0];
        require(modules, (...loadedModules: any[]) => {
          resolve(loadedModules);
        });
      });
    });
  }

  private loadCss(): Promise<void> {
    return new Promise<void>((resolve) => {
      // Check to see if the CSS is already added/loaded
      const cssNode = document.querySelector(`link[href='${this.cssUrl}']`);
      if (cssNode) {
        cssNode.addEventListener('load', () => resolve());
        return;
      }

      // Add the node if it's not already in the DOM
      const newCss = document.createElement('link');
      newCss.rel = 'stylesheet';
      newCss.href = this.cssUrl;
      newCss.addEventListener('load', () => resolve());
      document.head.appendChild(newCss);
    });
  }

  private loadJs(): Promise<Function> {
    return new Promise((resolve) => {

      if (typeof window['require'] !== 'undefined') {
        resolve(window['require']);
        return;
      }

      const onLoad = () => {
        resolve(window['require']);
      };

      const script = document.querySelector(`script[src='${this.apiUrl}']`);
      if (script) {
        script.addEventListener('load', onLoad);
        return;
      }

      const newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src = this.apiUrl;
      newScript.addEventListener('load', onLoad);

      document.body.appendChild(newScript);
    });
  }
}
