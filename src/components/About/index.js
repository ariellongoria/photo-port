import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who Am I?</h1>
            <img src={coverImage} alt="studio" />
        </section>
    );
}

export default About;
