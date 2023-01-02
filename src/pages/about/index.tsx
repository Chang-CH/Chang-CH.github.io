import { Link } from "react-router-dom";
import DefaultPage from "_components/DefaultPage";
import Spinner from "_components/Spinner";

function About() {
  return (
    <DefaultPage>
      <h1>About me</h1>
      <p>
        Hello! My name is Chuan hao, I am an undergraduate studying in the
        National University of Singapore, expecting to graduate in the year
        2024.
      </p>
      <p>
        Feel free to grab a copy of my <Link to="/resume">resume</Link>, or
        connect with me on <Link to="linkedIn">LinkedIn</Link>!
      </p>
      <Spinner />
    </DefaultPage>
  );
}

export default About;
