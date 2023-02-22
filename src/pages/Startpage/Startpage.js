import "./Startpage.scss";
import ReactAnime from 'react-animejs';
import anime from "animejs";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

function Startpage() {
    let displayName = "Genn-Hong";
    let displayText = `Hi! My name is ${displayName}. I'm a newly graduated Full Stack Web Developer. Welcome to my website!`;
    const { Anime } = ReactAnime;


    function displayStart() {
        return (
            <h2 className="Startpage__header">
                {displayText.split("").map(function (char, index) {
                    if (index > 14 && index < 24) {
                        return <span className="Startpage__header-title Startpage__header__animation-scatter" key={index}>{char}</span>
                    } else if (char === " ") {
                        return " ";
                    }
                    return <span className="Startpage__header__animation-scatter" key={index}>{char}</span>
                })}</h2>

        );

    }

    function WindowSize() {
        const [screenSize, setScreenSize] = useState(0);
        useLayoutEffect(() => {
            function updateScreen() {
                setScreenSize(window.innerWidth);
            }

            window.addEventListener('resize', updateScreen);
            updateScreen();
            return () => {
                window.removeEventListener('resize', updateScreen);
            }
        }, []);

        return screenSize;
    }


    function updateFontSize() {
        const width = WindowSize();

        if (width < 768) {
            return (
                <Anime className="Startpage__header__animation" initial={[
                    {
                        targets: ".Startpage__header__animation-scatter",
                        rotate: function () {
                            return anime.random(-360, 360)
                        },
                        translateX: function () {
                            return anime.random(-500, width)
                        },
                        translateY: function () {
                            return anime.random(-500, 500)
                        },
                        fontSize: "5px",
                        color: "#FFFFFF"
                    }
                ]}

                    _onMouseEnter={[
                        {
                            targets: ".Startpage__header__animation-scatter",
                            rotate: 0,
                            translateX: 0,
                            translateY: 0,
                            fontSize: ".9375rem",
                            color: "#FFFFFF",
                            easing: "easeInOutExpo",
                            duration: 2000
                        },
                        {
                            targets: ".Startpage__header-title",
                            rotate: 0,
                            translateX: 0,
                            translateY: 0,
                            fontSize: "1.75rem",
                            color: "#FFFFFF",
                            easing: "easeInOutExpo",
                            duration: 2000

                        }
                    ]}

                    _onMouseLeave={[
                        {
                            targets: ".Startpage__header__animation-scatter",
                            keyframes: [
                                {
                                    rotate: 0,
                                    translateX: 0,
                                    translateY: 0,
                                    fontSize: ".9375rem"
                                },
                                {
                                    rotate: function () {
                                        return anime.random(-360, 360)
                                    },
                                    translateX: function () {
                                        return anime.random(-500, width)
                                    },
                                    translateY: function () {
                                        return anime.random(-500, 500)
                                    },
                                    fontSize: '5px'
                                }
                            ],
                            easing: "easeInOutExpo",
                            color: "#FFFFFF",
                            duration: 5000
                        }
                    ]}>
                    <div className="Startpage">
                        <div className="stars">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </div>
                        {displayStart(displayText)}
                        <h1 className="Startpage__enter"><Link className="Startpage__enter-link" data-text="Enter" to={'/homepage'}>Enter</Link></h1>
                    </div>
                </Anime>
            );

        } else if (width >= 768 && width < 1280) {
            return (<Anime className="Startpage__header__animation" initial={[
                {
                    targets: ".Startpage__header__animation-scatter",
                    rotate: function () {
                        return anime.random(-360, 360)
                    },
                    translateX: function () {
                        return anime.random(-500, width)
                    },
                    translateY: function () {
                        return anime.random(-500, 500)
                    },
                    fontSize: "5px",
                    color: "#FFFFFF"
                }
            ]}

                _onMouseEnter={[
                    {
                        targets: ".Startpage__header__animation-scatter",
                        rotate: 0,
                        translateX: 0,
                        translateY: 0,
                        fontSize: "1.5rem",
                        color: "#FFFFFF",
                        easing: "easeInOutExpo",
                        duration: 2000
                    },
                    {
                        targets: ".Startpage__header-title",
                        rotate: 0,
                        translateX: 0,
                        translateY: 0,
                        fontSize: "2.25rem",
                        color: "#FFFFFF",
                        easing: "easeInOutExpo",
                        duration: 2000

                    }
                ]}

                _onMouseLeave={[
                    {
                        targets: ".Startpage__header__animation-scatter",
                        keyframes: [
                            {
                                rotate: 0,
                                translateX: 0,
                                translateY: 0,
                                fontSize: "1.5rem"
                            },
                            {
                                rotate: function () {
                                    return anime.random(-360, 360)
                                },
                                translateX: function () {
                                    return anime.random(-500, width)
                                },
                                translateY: function () {
                                    return anime.random(-500, 500)
                                },
                                fontSize: '5px'
                            }
                        ],
                        easing: "easeInOutExpo",
                        color: "#FFFFFF",
                        duration: 5000
                    }
                ]}>
                <div className="Startpage">
                    <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                    {displayStart(displayText)}
                    <h1 className="Startpage__enter"><Link className="Startpage__enter-link" data-text="Enter" to={'/homepage'}>Enter</Link></h1>
                </div>
            </Anime>);

        } else if (width >= 1280) {
            return (
            
            <Anime className="Startpage__header__animation" initial={[
                {
                    targets: ".Startpage__header__animation-scatter",
                    rotate: function () {
                        return anime.random(-360, 360)
                    },
                    translateX: function () {
                        return anime.random(-500, width)
                    },
                    translateY: function () {
                        return anime.random(-500, 500)
                    },
                    fontSize: "5px",
                    color: "#FFFFFF"
                }
            ]}

                _onMouseEnter={[
                    {
                        targets: ".Startpage__header__animation-scatter",
                        rotate: 0,
                        translateX: 0,
                        translateY: 0,
                        fontSize: "2rem",
                        color: "#FFFFFF",
                        easing: "easeInOutExpo",
                        duration: 2000
                    },
                    {
                        targets: ".Startpage__header-title",
                        rotate: 0,
                        translateX: 0,
                        translateY: 0,
                        fontSize: "3rem",
                        color: "#FFFFFF",
                        easing: "easeInOutExpo",
                        duration: 2000

                    }
                ]}

                _onMouseLeave={[
                    {
                        targets: ".Startpage__header__animation-scatter",
                        keyframes: [
                            {
                                rotate: 0,
                                translateX: 0,
                                translateY: 0,
                                fontSize: "2rem",
                                duration: 2000,
                            },
                            {
                                rotate: function () {
                                    return anime.random(-360, 360)
                                },
                                translateX: function () {
                                    return anime.random(-500, width)
                                },
                                translateY: function () {
                                    return anime.random(-500, 500)
                                },
                                fontSize: '5px'
                            }
                        ],
                        easing: "easeOutExpo",
                        duration: 2000,
                        color: "#FFFFFF",

                    }
                ]}>
                <div className="Startpage">
                    <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                    {displayStart(displayText)}
                    <h1 className="Startpage__enter"><Link className="Startpage__enter-link" data-text="Enter" to={'/homepage'}>Enter</Link></h1>
                </div>
            </Anime>);

        }
    }

    // window.addEventListener("resize", updateFontSize);

    return (
        updateFontSize()
    )
}

export default Startpage;