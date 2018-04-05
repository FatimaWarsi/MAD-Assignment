import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
   name: 'EmailFormat'
})
export class EmailFormatPipe implements PipeTransform {
   transform(value:string) {
        var str = "Input email only";
        var p = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
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