/* eslint-disable */
// '/' 경로를 가지는 페이지
import Link from "next/link"

const Child = () => {
    return <p>Move to '/tomato'</p>;
}

const App = () => {
    return (
        <div>
            <h2>Link to 'tomato' Page</h2>
            <Link href='/tomato'>
                <Child />
            </Link>

            <h2>Link to 'potato' Page</h2>
            <Link href="/vegetable/potato">
                <a>Move to 'vegetable/potato'</a>
            </Link>
        </div>
    )
}

export default App;