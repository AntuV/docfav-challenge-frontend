import { HttpParams } from '@angular/common/http';

export class ListGamesFilters {
  category?: string;
  platform?: string;
  sortBy?: string;

  toQueryParams(): HttpParams {
    const params = new HttpParams();
    
    if (this.category) {
      params.set('category', this.category);
    }

    if (this.platform) {
      params.set('platform', this.platform);
    }

    if (this.sortBy) {
      params.set('sort-by', this.sortBy);
    }

    return params;
  }
}
