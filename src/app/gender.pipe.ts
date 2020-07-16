import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    switch (value){
      case 'M':
        return '男';
      case 'F':
        return '女';
      default:
        return 'N/A';
    }
    // if (value === 'Y'){
    //   return '男';
    // }else{
    //   return '女';
    // }
  }

}
