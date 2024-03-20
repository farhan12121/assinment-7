
const Banner = () => {
    return (
        <div className="mx-5 lg:mx-36 rounded-3xl bg-[url(https://s3-alpha-sig.figma.com/img/2b8f/f4be/d57b5fb5ad84c9f6a9b1eb9782e9b11b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bL~VLdsv-hRuXW~LIvEdTJne2vh1Xx0I33l~ndKRnQxhJymvKrRGAQEFj6iMi9FKXYy9o~JO5tu7XLBaZFPOH4LqdB1ePmBMeVtBNrYLyHB9~tf-aR3ia965uDSadF8m9QECrpx5TnhX8FdpUEJK92nCiDnMD3qy4lc3GT8VZPqyjoSswP6pCW-3xicITpf8wMaczVaq21kbMm970QukhImhycQ6E1BO9yVxh~vqHAWU9ktR5r5JO0tZR35aCGjHhASku9FbOXKdua1Dr2f2fU1yvc6bpsvSBuAb7eW0xUG8Nh0g9HaMoRoyKbhbq~4~Nm9nUEObIm~wIKpDZdh4YA__)] bg-no-repeat bg-cover ">
            <div className="hero bg-gradient-to-t from-[#150B2BE5] to-[#150B2B00] rounded-3xl py-36" >

                <div className="flex-none items-center">
                    <div>
                        <p className="text-5xl text-white leading-loose font-bold Lexend text-center">CuisineCal: Discover Delightful Dishes <br />Track Your
                            Recipe Calories</p>
                        <p className="text-white text-lg leading-7 lexend text-center">Explore delectable recipes while tracking calories making healthier <br />choices effortlessly with CuisineCal</p>
                    </div>
                    <div className="flex justify-center gap-6 mt-10">
                        <button className="text-[#150B2B] text-xl font-semibold lexend py-4 px-7 rounded-full bg-[#0BE58A] btn btn-primary">Explore Now</button>
                        <button className="btn btn-primary text-white text-xl font-semibold lexend py-4 px-7 rounded-full border-2">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;