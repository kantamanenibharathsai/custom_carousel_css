import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import sliderStyles from "./Slider.Styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const Slider: React.FC = () => {
    const sliderRef = useRef<HTMLUListElement | null>(null); // Ref to the slider container
    const itemsRef = useRef<(HTMLLIElement | null)[]>([]); // Ref to individual slider items
    const nextBtnRef = useRef<HTMLButtonElement | null>(null); // Ref to the next button
    const prevBtnRef = useRef<HTMLButtonElement | null>(null); // Ref to the previous button
    const dotsRef = useRef<(HTMLLIElement | null)[]>([]); // Ref to the navigation dots
    const [activeDot, setActiveDot] = useState(0); // Active dot index


    useEffect(() => {
        const slider = sliderRef.current; // Get the slider element
        const items = itemsRef.current; // Get the slider items
        const next = nextBtnRef.current; // Get the next button
        const prev = prevBtnRef.current; // Get the previous button
        const dots = dotsRef.current; // Get the navigation dots

        if (!slider || !next || !prev || items.length === 0 || dots.length === 0) return; // If any of these elements are missing, exit the effect

        const lengthItems = items.length - 1; // Total number of slider items minus one
        let active = 0; // Active slide index, initialized to 0
        let refreshInterval: NodeJS.Timeout; // Interval to auto-slide

        const resetInterval = () => {
            clearInterval(refreshInterval); // Clear the existing interval
            refreshInterval = setInterval(() => next.click(), 3000); // Set a new interval to move to the next slide every 3 seconds
        };

        const reloadSlider = () => {
            if (!items[active] || !slider) return; // If the active item or slider is not available, exit the function
            // if (items[active]) {
            //     slider.style.left = -items[active].offsetLeft + 'px';
            // }
            slider.style.left = -items[active]!.offsetLeft + 'px'; // Move the slider to the active item
            resetInterval(); // Reset the auto-slide interval
          
        };

        const handleNext = () => {
            // console.log("next")
            active = (active + 1 <= lengthItems) ? active + 1 : 0; // Move to the next slide, or loop to the first slide
            setActiveDot(active); // Update the active dot
            reloadSlider(); // Reload the slider position
        };

        const handlePrev = () => {
            active = (active - 1 >= 0) ? active - 1 : lengthItems; // Move to the previous slide, or loop to the last slide
            setActiveDot(active); // Update the active dot
            reloadSlider(); // Reload the slider position
        };

        const handleDotClick = (index: number) => {
            active = index; // Set the active slide to the clicked dot index
            setActiveDot(active); // Update the active dot
            reloadSlider(); // Reload the slider position
        };

        next.onclick = handleNext; // Assign handleNext to the next button click event
        prev.onclick = handlePrev; // Assign handlePrev to the previous button click event
        dots.forEach((li, key) => li?.addEventListener('click', () => handleDotClick(key)));  // Assign handleDotClick to each dot's click event

       window.onresize = reloadSlider; // Reload the slider on window resize

        resetInterval(); // Initialize the auto-slide interval

        return () => {
            clearInterval(refreshInterval); // Clear the interval when the component is unmounted
            next.onclick = null; // Remove event listener from the next button
            prev.onclick = null; // Remove event listener from the previous button
            dots.forEach(li => li?.removeEventListener('click', () => { })); // Remove event listeners from the dots
            window.onresize = null; // Remove the resize event listener
        };

    }, []); // Empty dependency array means this useEffect runs once when the component mounts


    return (
        <Box sx={sliderStyles.mainContainer}>
            <Typography sx={sliderStyles.heading}>CAROUSEL</Typography>
            <Box sx={sliderStyles.sliderContainer}>
                <Box component="ul" sx={sliderStyles.sliderListContainer} ref={sliderRef}>
                    {[
                        "https://images.pexels.com/photos/3220828/pexels-photo-3220828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        "https://images.pexels.com/photos/7645406/pexels-photo-7645406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f7/0b/ireland.jpg?w=1400&h=500&s=1",
                        "https://d32uwaumftsuh7.cloudfront.net/Pictures/480x270/7/2/0/22720_gameofthronesthedarkhedges_thekingsroad_master_529527_crop.jpg",
                        "https://www.travelsafe-abroad.com/wp-content/uploads/the_rock_of_cashel_ireland_europe-wallpaper-1680x1050.jpg",
                        "https://ichef.bbci.co.uk/news/2048/cpsprodpb/af1e/live/a3de8fe0-5b99-11ee-ae5b-6f868f82c7a5.jpg",
                        "https://image.cnbcfm.com/api/v1/image/102737319-GettyImages-117072015.jpg?v=1668607242&w=929&h=523&vtcrop=y"
                    ].map((src, index) => (
                        <Box
                            key={index}
                            component="li"
                            ref={(el) => (itemsRef.current[index] = el as HTMLLIElement)}
                        >
                            <Box component="img" src={src} />
                        </Box>
                    ))}
                </Box>

                <Box sx={sliderStyles.BtnsContainer}>
                    <Button id="prevBtn" ref={prevBtnRef}>
                        <ChevronLeftIcon />
                    </Button>
                    <Button id="nextBtn" ref={nextBtnRef}>
                        <ChevronRightIcon />
                    </Button>
                </Box>

                <Box component="ul" sx={sliderStyles.sliderDotsContainer} className="slider dots">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <Box
                            key={index}
                            component="li"
                            sx={{ ...sliderStyles.sliderDot, width: activeDot === index ? { xs: "25px", sm: "30px" } : "10px" }}
                            ref={el => (dotsRef.current[index] = el as HTMLLIElement)}
                        ></Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Slider;
