export type FormValues={
    client:string;
    trip_no:string;
    image:string,
    products:{
      product_type:string,
      product:string,
      description:string,
      total:number
    }[]
  }