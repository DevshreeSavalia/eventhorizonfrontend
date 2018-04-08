export class up_seg_class{
    public constructor(
        public e_id:number,
        public e_name:string,
        public e_startdate:string,
        public e_enddate:string,
        public e_venue:string,
        public comm_id_fk:number,
        public e_desc:string,
        public image:string,

        public comm_id:number,
        public comm_name:string,
        public c_id_fk:number,
        public comm_desc:string,
        public banner_image:string,
        public email_id_fk:string



    )
        {  }
    
}