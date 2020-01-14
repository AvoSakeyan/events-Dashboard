import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(event, search): any {
    if (!search.trim()) {
      return event;
    }
    return event.filter(post => {
      return post.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
