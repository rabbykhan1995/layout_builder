import Link from "next/link";


const Navbar = () => {
    return (<div className="flex justify-around bg-orange-500 py-2">
        <Link href={"/"}>Home</Link>
        <Link href={"/editor"}>
            Editor
        </Link>
    </div>)
}

export default Navbar;