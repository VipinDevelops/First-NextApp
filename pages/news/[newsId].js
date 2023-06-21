import { useRouter } from 'next/router'

function newsID() {
    const router = useRouter();
    const { newsId } = router.query;

    return <h1>{newsId}</h1>
}

export default newsID;