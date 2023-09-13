export type FormValues={
    client:string;
    trip_no:string;
    image:File,
    products:{
      product_type:string,
      product:string,
      description:string,
      total:string
    }[]
  }