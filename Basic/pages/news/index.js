// ourdomain.com/news
import Link from "next/link";
import { Fragment } from "react"

function NewPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><Link href="/news/Next.js">Next.js</Link></li>
                <li>React Js</li>
            </ul>
        </Fragment>
    )
}

export default NewPage; 