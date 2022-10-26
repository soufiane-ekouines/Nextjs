import { useRouter } from "next/router";

export default function Car({ car }) {
    const router = useRouter()
    const {id} = router.query

    return (
    <>
    <h1>hello {id}</h1>
    <h1>{car.image}</h1>
    <h1>color = {car.color}</h1>

    </>)
}

export async function getServerSideProps({params}) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);    
    const data = await req.json();

    return{
        props: {car: data},
    }
}
