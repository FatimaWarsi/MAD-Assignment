import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
   name: 'AgeFormat'
})
export class AgeFormatPipe implements PipeTransform {
   transform(value) {
        var str = "Input correct age";
        var v = value;
        var pattern =  new RegExp("^[1-9]+$");
        
            var st:boolean = pattern.test(value);
            
        if(st==false){
            return str;
        }
        
        if(st==true){
            return;
        }
    
    }         
    }