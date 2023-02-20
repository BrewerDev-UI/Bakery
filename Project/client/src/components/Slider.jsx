import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://s3.amazonaws.com/s3.nmpoliticalreport.com/wp-content/uploads/2020/07/25154339/shutterstock-bakery-1170x837.jpg",
        "https://www.chabaso.com/wp-content/uploads/2018/11/Group-8-1400x759.jpg",
        "https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodnavigator.com/news/business/use-your-loaf-french-bakery-tackles-food-waste-through-upgraded-ingredients/11952246-1-eng-GB/Use-your-loaf-French-bakery-tackles-food-waste-through-upgraded-ingredients.jpg",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div className="sliderContainer" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img className="sliderImg" src={data[0]} alt="" />
                <img className="sliderImg" src={data[1]} alt="" />
                <img className="sliderImg" src={data[2]} alt="" />
            </div>
            <div className="sliderIcons">
                <div className="sliderIcon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="sliderIcon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider;