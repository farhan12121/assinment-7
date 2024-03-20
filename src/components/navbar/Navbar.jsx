import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const navData = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Recipes', path: '/recipes' },
        { id: 3, name: 'About', path: '/about' },
        { id: 4, name: 'Search', path: '/search' }
    ];

console.log(open);
    return (
        <>
            <nav className="flex justify-between  lg:mx-36 my-5 mx-5">
                <button  className="p-2 lg:hidden" onClick={() => setOpen(!open)}>
                    {
                        open === true ? 
                        <AiOutlineClose className="text-2xl"></AiOutlineClose> :
                         <HiMenuAlt1 className="text-2xl"></HiMenuAlt1>
                    }

                </button>
                <h1 className="text-4xl font-bold lexend hidden lg:flex">Recipe Calories</h1>
                <ul className={`lg:flex absolute bg-slate-100 rounded-lg left-10  top-20 lg:static px-6 gap-5 space-y-4 lg:space-y-0 items-center mb-5 ${open ? '' : 'hidden'}`}>

                    {
                        navData.map(nav => <li key={nav.id}><a className="hover:bg-slate-500  rounded-md" href={nav.path}>{nav.name}</a></li>)
                    }
                </ul>
                <div className="flex gap-5">
                    <label className="input  border-gray-400 flex items-center gap-2 ">
                        <input type="text" className="grow p-3 rounded-full" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-3xl"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <button className="bg-[#0BE58A] p-3 rounded-full"><CgProfile className="lg:text-5xl text-3xl font-normal"></CgProfile></button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;