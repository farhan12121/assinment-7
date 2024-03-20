import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantRecipes, setWantRecipes] = useState([]);
    const [currentCooking, setCurrentCooking] = useState([]);




    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    const handleClick = (wc) => {
        const isExist = wantRecipes.find(item => (item.recipe_id == wc.recipe_id));
        if (!isExist) {
            setWantRecipes([...wantRecipes, wc])
        }
        else {
            toast.error('Already Exist For Preparing', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }


    }

    const handlePreparing = (id, item) => {

        const isExist = currentCooking.find(item => (item.recipe_id == id));
        console.log(isExist)
        if (!isExist) {
            const newWantRecipes = wantRecipes.filter(item => item.recipe_id != id)
            setWantRecipes(newWantRecipes);
            setCurrentCooking([...currentCooking, item])
        }
        else {
            toast.error('Already Exist For Preparing', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            const wantRecipes = wantRecipes.find(item => item.recipe_id == id)
            setWantRecipes(wantRecipes);
        }



    }
    
    return (

        <div className="mx-5 lg:mx-36 mt-24">
            <div>
                <button onClick={toast}></button>
                <ToastContainer />
            </div>
            <div className="space-y-6 mb-12">
                <p className="text-[#150B2B] text-4xl font-semibold lexend text-center">Our Recipes</p>
                <p className="text-lg leading-6 text-[#150B2B99] text-center">Dive into our diverse recipes section featuring mouthwatering dishes tailored <br />to satisfy every palate and preference</p>
            </div>
            <div className="flex justify-center flex-col-reverse lg:flex-row">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        recipes.map(recipe => <Recipe key={recipe.recipe_id} handleClick={handleClick} recipe={recipe}></Recipe>)
                    }
                </div>
                <div>
                    {/* want cook section */}
                    <div className="border-2 rounded-2xl">
                        <h3 className="text-2xl font-semibold text-center text-[#282828] lexend pb-4 border-b-2 mb-6 mt-8 mx-16">Want to cook: {wantRecipes.length}</h3>
                        <table>
                            <thead className="flex text-lg font-medium fira-sans-regular pl-14">
                                <tr className=" flex space-x-10 lg:space-x-28 lg:pr-12">
                                    <td >Name</td>
                                    <td >Time</td>
                                    <td>Calories</td>
                                </tr>
                            </thead>
                            <tbody className="bg-white space-y-5 px-5">
                                {
                                    wantRecipes.map((item, index) => (
                                        <tr key={item.recipe_id} className="bg-[#2828281A] flex items-center px-6 py-4 rounded-xl">

                                            <td className="mr-5">
                                                {index + 1}
                                            </td>
                                            <td className="lg:w-24 lg:mr-16">
                                                {item.recipe_name}
                                            </td>
                                            <td className="lg:w-24 lg:mr-16">
                                                {item.preparing_time} min
                                            </td>
                                            <td className="lg:w-24 lg:mr-16">
                                                {item.calories} calories
                                            </td>
                                            <td ><button onClick={() => { handlePreparing(item.recipe_id, item) }} className="btn btn-ghost bg-[#0BE58A] lg:rounded-full rounded-2xl py-4 lg:px-6 px-2 font-semibold">Preparing</button></td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* Currently Cooking */}
                    <div>
                        <h3 className="text-2xl font-semibold text-center text-[#282828] lexend pb-4 border-b-2 mb-6 mt-8 mx-16">Currently cooking: {currentCooking.length}</h3>
                        <table>
                            <thead className="flex text-lg font-medium fira-sans-regular pl-14">
                                <tr className=" flex justify-center space-x-10 lg:space-x-28 lg:pr-12">
                                    <td >Name</td>
                                    <td >Time</td>
                                    <td>Calories</td>
                                </tr>
                            </thead>
                            <tbody className="bg-white space-y-5 px-5">
                                {
                                    currentCooking.map((Citem, Cindex) => (
                                        <tr key={Citem.recipe_id} className="bg-[#2828281A] flex items-center px-6 py-4 rounded-xl">

                                            <td className="mr-5">
                                                {Cindex + 1}
                                            </td>
                                            <td className="lg:w-24 lg:mr-16">
                                                {Citem.recipe_name}
                                            </td>
                                            <td className="lg:w-24 lg:mr-16">
                                                {Citem.preparing_time} min
                                            </td>
                                            <td className="lg:w-24 lg:mr-16">
                                                {Citem.calories} calories
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="mb-5">
                            <div className="flex justify-center gap-10">
                                <p className="text-lg text-[#282828CC] leading-6 font-medium">Total Time =</p>
                                <p className="text-lg text-[#282828CC] leading-6 font-medium">Total Calories =</p>
                            </div>
                            <div className="flex justify-center gap-10 pr-10">
                                <p className="text-lg text-[#282828CC] leading-6 font-medium"> 45 min</p>
                                <p className="text-lg text-[#282828CC] leading-6 font-medium">380 calories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default OurRecipes;