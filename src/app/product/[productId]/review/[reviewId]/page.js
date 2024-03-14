import { notFound } from "next/navigation"

export default function ReviewDetails({params}) {

   if (parseInt(params.reviewId)>1000) {

      notFound()
      
   }

   return <h1>review {params.reviewId} and product {params.productId}</h1>
}