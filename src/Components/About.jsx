/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Software Engineer | MS(AI) in progress. Passionate about innovation and pushing the boundaries of technology. 8+ years of web development experience.  #AI #SoftwareEngineer";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python, Php, Javascript",
  "RESTful APIs",
  "Docker, AWS",
  "Artificial Intelligence (AI):",
  "Problem-solving, Teamwork, Quick Learner",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a passionate software engineer with over 8 years of experience developing web applications. I am currently pursuing a Master of Science in Artificial Intelligence to further enhance my problem-solving skills and stay ahead of the curve in this rapidly evolving field. In my previous role at DG Group, I worked on projects such as NUDG, a mobile application that combines various on-demand services. I am skilled in a variety of programming languages and technologies, including Docker, RESTful APIs, and Laravel. My colleagues praise me for my problem-solving skills, teamwork, and ability to learn quickly.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
