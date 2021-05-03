import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DisasterTypeResponse} from '../payload/disaster-type.response';
import {environment} from '../../../../environments/environment';
import {Constants} from '../constants/constants';
import {DisasterResponse} from '../payload/disaster.response';
import {DisasterRequest} from '../payload/disaster.request';
import {EssentialsRequest} from '../payload/essentials.request';
import {FinalMessageRequest} from '../payload/final-message.request';

export class DisasterService {
  constructor(
    private http: HttpClient
  ) {

  }

  public getAll(): Observable<DisasterResponse[]> {
    return this.http.get<DisasterResponse[]>(
      environment.api
      + Constants.Disaster.prefix
    );
  }

  public getOneById(id: number): Observable<DisasterResponse> {
    return this.http.get<DisasterResponse>(
      environment.api
      + Constants.Disaster.prefix
      + `/${id}`
    );
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

  public volunteer(id: number): Observable<DisasterResponse> {
    return this.http.patch<DisasterResponse>(
      environment.api
      + Constants.Disaster.prefix
      + `/${id}`
      + Constants.Disaster.volunteer,
      {}
    );
  }

  public guestVolunteer(id: number): Observable<DisasterResponse> {
    return this.http.patch<DisasterResponse>(
      environment.api
      + Constants.Disaster.prefix
      + `/${id}`
      + Constants.Disaster.guest
      + Constants.Disaster.volunteer,
      {}
    );
  }

  public essentials(id: number, model: EssentialsRequest): Observable<DisasterResponse> {
    return this.http.patch<DisasterResponse>(
      environment.api
      + Constants.Disaster.prefix
      + `/${id}`
      + Constants.Disaster.essentials,
      model
    );
  }

  public resolve(id: number, model: FinalMessageRequest): Observable<DisasterResponse> {
    return this.http.patch<DisasterResponse>(
      environment.api
      + Constants.Disaster.prefix
      + `/${id}`
      + Constants.Disaster.resolve,
      model
    );
  }

}
