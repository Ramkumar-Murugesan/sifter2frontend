import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class ConfigService {

//For now using the below url once node service url is ready will use that //

     private _api_url = 'http://localhost:8002/';
     
     get api_url(): string {return this._api_url; }

}