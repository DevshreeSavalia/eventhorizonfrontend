export class past_mem {
    public constructor(
        public e_id: number,
        public e_name: string,
        public e_startdate: string,
        public e_enddate: string,
        public e_venue: string,
        public comm_id_fk: number,
        public e_desc: string,
        public image: string,

        public email_id: string,
        public user_name: string,
        public mobile: number,
        public gender: string,
        public type: string,
        public password: string,

        public reg_id: number,
        public e_id_fk: number,

    ) { }

}