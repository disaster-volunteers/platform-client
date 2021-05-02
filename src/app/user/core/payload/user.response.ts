export class UserResponse {
  constructor(
    public id: number = 0,
    public username: string = '',
    public name: string = '',
    public decription: string = '',
    public available: boolean = false,
  ) {

  }
}
