import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/Observable';
import {ConfigService} from '../config/config.service';
import {Apiservice} from '../config/api.service';
import {TableComponent} from './table.component';

@Injectable()
export class Zipcodeservice {

    constructor(private apiservice:Apiservice,private config:ConfigService,){

    }
    private value:TableComponent
    getAllzipcode(city : any): Observable <any>{
        console.log("city------------------------->>>>>>>>>>>",city)
        return this.apiservice.get(this.config.api_url+'City/getpostalbycity/'+city)
    }
    getAlltablevalue(cities : any,code : any): Observable <any>{

        return this.apiservice.get(this.config.api_url+'property/getByCityAndZip?city='+cities+'&zip='+code+'')
    }


    getAllCity(): Observable <any>{

        return this.apiservice.get(this.config.api_url+'City/listofcities')
    }

    getState(): Observable <any>{
        
        return this.apiservice.get(this.config.api_url+'City/listofstates')
    }



}