import {Injectable} from '@angular/core';
import {UIRouter, Ng2StateDeclaration} from 'ui-router-ng2';

import {AppComponent} from './containers/App';

export const STATES: Ng2StateDeclaration[] = [
  {
    name: 'App',
    url: '/',
    component: AppComponent
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise('App');
  }
}
