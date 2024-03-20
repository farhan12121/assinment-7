import { FaRegClock } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types'


const Recipe = ({ recipe, handleClick }) => {

    const { preparing_time, recipe_image, recipe_name, short_description, calories, ingredients
    } = recipe;

    return (
        <div className="flex">
            <div className="border-2 rounded-2xl p-6 mx-6 w-96 ">
                <figure><img className="rounded-2xl mb-6 h-[200px] w-full" src={recipe_image} /></figure>
                <div className="">
                    <div className="space-y-4 border-b-2 pb-4">
                        <h2 className="text-2xl lexend font-semibold text-[#282828]">{recipe_name}</h2>
                        <p className="text-lg leading-9">{short_description}</p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg lexend font-semibold text-[#282828] mb-4">Ingredients: 6</h3>
                        <ol className="fira-sans-regular text-lg leading-8 text-[#878787] space-y-2 pl-4">
                            <li>
                                {ingredients[0]}
                            </li>
                            <li>
                                {ingredients[1]}
                            </li>
                            <li>
                                {ingredients[2]}
                            </li>
                            <li>
                                {ingredients[3]}
                            </li>
                            <li>
                                {ingredients[4]}
                            </li>
                            <li>
                                {ingredients[5]}
                            </li>
                        </ol>

                    </div>
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex items-center gap-2">
                            <FaRegClock />
                            <p className="text-lg text-[#282828CC] fira-sans-regular">{preparing_time} min</p></div>
                        <div className="flex items-center gap-2">
                            <FaFire />
                            <p className="text-lg text-[#282828CC] fira-sans-regular">{calories} calories</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => { handleClick(recipe) }} className="text-[#150B2B] lexend font-semibold text-lg py-3 px-6 bg-[#0BE58A] rounded-full">Want to Cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleClick:PropTypes.func
}


export default Recipe;