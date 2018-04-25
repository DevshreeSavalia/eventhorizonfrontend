export class event_class{
    public constructor(
        public e_id:number,
        public e_name:string,
        public e_startdate:string,
        public e_enddate:string,
        public e_venue:string,
        public comm_id_fk:number,
        public e_desc:string,
        public image:string)
   {

   }
}