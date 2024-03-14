export default function Docs({params}) {

    if (params.slug.length ===2) {
        return <h1>viewing doc from features {params.slug[0]} and concept {params.slug[1]}</h1>
    }else if(params.slug.length==1){
        return <h1>Hellow we are in {params.slug[0]}</h1>
    }

    return <h>Hellow we are in doc home page</h>
}