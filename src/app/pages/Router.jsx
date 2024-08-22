/* eslint-disable */
import Link from "next/link";
import { useRouter } from "next/router";

const Router = () => {
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h2>Hello!!</h2>
            <Link href='/'>Move to '/'</Link>
        </div>
    )
}

export default Router;