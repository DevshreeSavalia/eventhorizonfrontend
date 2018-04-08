export class search_dt {
  constructor(
    public c_id: number,
    public c_name: string,
    
    public comm_id: number,
    public comm_name: string,
    public c_id_fk: number,
    public comm_desc: string,
    public banner_image: string,
    public email_id_fk: string
  ) {}
}
