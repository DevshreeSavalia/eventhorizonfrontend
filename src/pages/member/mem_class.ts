export class mem_class{
    constructor(
        public comm_id:number,
        public comm_name:string,
        public c_id_fk:number,
        public comm_desc:string,
        public banner_image:string,
        public email_id_fk:string,

        public email_id:string,
        public user_name:string,
        public mobile:number,
        public gender:string,
        public type:string,
        public password:string,

       public comm_reg_id:number,
       public comm_id_fk:number
    
    ){}
}