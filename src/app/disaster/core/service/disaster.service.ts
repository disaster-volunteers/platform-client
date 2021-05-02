import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DisasterTypeResponse} from '../payload/disaster-type.response';
import {environment} from '../../../../environments/environment';
import {Constants} from '../constants/constants';
import {DisasterResponse} from '../payload/disaster.response';
import {DisasterRequest} from '../payload/disaster.request';

export class DisasterService {
  constructor(
    private http: HttpClient
  ) {

  }

  public getTypes(): Observable<DisasterTypeResponse[]> {
    return this.http.get<DisasterTypeResponse[]>(
      environment.api
      + Constants.Disaster.prefix
      + Constants.Disaster.types
    );
  }

  public report(model: DisasterRequest): Observable<DisasterResponse> {
    return this.http.post<DisasterResponse>(
      environment.api
      + Constants.Disaster.prefix,
      model
    );
  }
}
