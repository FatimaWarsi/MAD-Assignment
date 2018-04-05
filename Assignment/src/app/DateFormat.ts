import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
   name: 'DateFormat'
})
export class DateFormatPipe implements PipeTransform {
   transform(value) {
        var str = "Input date only";
        var p = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

        var pattern =  new RegExp(p);
        
            var st:boolean = pattern.test(value);
            
        if(st==false){
            return str;
        }
        
        if(st==true){
            return;
        }
    
    }         
    }