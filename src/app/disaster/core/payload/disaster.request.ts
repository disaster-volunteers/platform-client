export class DisasterRequest {
  constructor(
    public coordinates: string = '',
    public typeId: number = 0,
    public description: string = ''
  ) {

  }

}
