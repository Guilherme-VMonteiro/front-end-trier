import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: string): string {
    return telefone.replace(/^(\d{2})(\d{5})(\d{4})/, "$1 $2-$3");
  }
}
