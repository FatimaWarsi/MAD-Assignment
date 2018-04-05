import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
   name: 'NameFormat'
})
export class NameFormatPipe implements PipeTransform {
   transform(value:string) {
        var str = "Input String only";
        var v = value;
        var pattern =  new RegExp("^[a-zA-Z]+$");
        
            var st = pattern.test(value);
            
        if(st==false){
            return str;
        }
        if(st==true){
            return ;
        }
    }         
    }
