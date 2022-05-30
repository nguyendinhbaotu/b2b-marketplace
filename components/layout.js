import Header from './header';

export default function Layout({ children }) {
    return (
        <>
            <Header></Header>
            {/* <div>THIS IS LAYOUT</div> */}
            <div>{children}</div>
        </>
    )
}