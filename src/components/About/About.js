import "./About.scss";
import myself from "../../assets/images/myself.jpg";
import { useState } from "react";
import { useEffect } from "react";
import TagCloud from "TagCloud";

export default function About() {
    const [aboutCard, setAboutCard] = useState("about__card");
    const [detail, setDetail] = useState("about__card__left-detail");
    const [image, setImage] = useState("about__card__left-detail__img-container");
    const [personal, setPersonal] = useState("about__card__left__personal");
    const [right, setRight] = useState("about__card__right");
    const [imgClick, setImgClick] = useState(false);

    useEffect(() => {
        return() => {
            const container = ".about__card__right-sphere__tagcloud";
            const texts = [
                "Javascript",
                "HTML",
                "CSS",
                "Sass",
                "React.js",
                "Node.js",
                "Express",
                "mySQL",
                "Jest",
                "Github",
                "Heroku",
                "OAuth",
                "API's",
                "Postman",
                "REST API",
                "C++",
                "Java",
                "DOM",
                "Agile",
                "Bash",
                "Shell",
                "php",
                "Awk",
                "JSON",
                "Perl"
            ];

            const options = {
                radius: 140,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    },  [])


    const expand = () => {
        if (!imgClick) {
            setAboutCard("about__card active");
            setImage("about__card__left-detail__img-container active");
            setDetail("about__card__left-detail active");
            setPersonal("about__card__left__personal active");
            setRight("about__card__right active");
            setImgClick(true);
        } else {
            setAboutCard("about__card");
            setDetail("about__card__left-detail");
            setImage("about__card__left-detail__img-container");
            setPersonal("about__card__left__personal");
            setRight("about__card__right");
            setImgClick(false);
        }
    }



    return (
        <section className="about">
            <h1 className="about__section-title">About Myself</h1>
            <div className={aboutCard}>
                <div className="about__card__left">
                    <div className={detail}>
                        <div className={image} onClick={expand}>
                            <img className="about__card__left-detail__img-container__img" src={myself} />
                            <h3 className="about__card__left-detail__img-container__click">Click Me</h3>
                        </div>
                        <div className="about__card__left-detail__container">
                            <h2 className="about__card__left-detail__container-name">
                                Genn-Hong Lin
                            </h2>
                            <h3 className="about__card__left-detail__container-position">
                                Junior Web Developer
                            </h3>
                        </div>
                    </div>

                    <div className={personal}>
                        <h2 className="about__card__left__personal-age">Age: 26</h2>
                        <h2 className="about__card__left__personal-location">Location: Burnaby, BC</h2>
                    </div>
                </div>
                <div className={right}>
                    <div className="about__card__right-story">
                        <h2>My Goal</h2>
                        <p>
                            Test Test
                        </p>
                    </div>
                    <div className="about__card__right-sphere">
                        <h2 className="about__card__right-sphere__skills">Skills</h2>
                        <span className="about__card__right-sphere__tagcloud"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}