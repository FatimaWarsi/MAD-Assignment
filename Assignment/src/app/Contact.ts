import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
   name: 'ContactFormat'
})
export class ContactFormatPipe implements PipeTransform {
   transform(value) {
        var str = "Input correct contact only";
        var p = '^0[0-9]{10}$';
        
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