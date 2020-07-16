import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'Y'){
      return '男';
    }else{
      return '女';
    }
  }

}
