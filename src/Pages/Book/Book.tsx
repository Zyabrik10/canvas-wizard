import globalCss from "../../css/global.module.css";
// import css from "./styles/BookPage.module.css";
import format_text from "../../css/format-text.module.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";
import { adaptTheme } from "../../ts/theme/adapt-theme";
import { FormatMark } from "../../code-components/format-components/format-components";

function Code() {
  return (
    <pre>
      <span>const</span> <span>canvas</span>
      <span>const</span> <span>canvas</span>
    </pre>
  );
}

export default function Book() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <section>
        <h2 className={`${format_text["title"]} ${globalCss["global-title"]}`}>
          Free Canvas Book
        </h2>
        <p className={`${format_text["p"]} ${globalCss["global-p"]}`}>
          Introducing <FormatMark>CanvasWizard</FormatMark>: Unleash Your Creativity with Free
          Canvas Courses, Books, and Projects!
        </p>
        <p className={`${format_text["p"]} ${globalCss["global-p"]}`}>
          Welcome to a digital haven where artistic inspiration and educational
          exploration converge – <FormatMark>CanvasWizard</FormatMark>. We are thrilled to present
          a unique platform that opens up a world of creative possibilities
          through an extensive collection of free canvas-related resources.
          Whether you're an aspiring artist, a seasoned creative enthusiast, or
          an eager learner, our website is designed to be your go-to destination
          for honing your skills and embracing the joy of artistic expression.
        </p>
        <p className={`${format_text["p"]} ${globalCss["global-p"]}`}>
          🎨 Explore Diverse Canvas Courses: Our website hosts a rich array of
          free canvas courses crafted to cater to all skill levels. From
          beginners looking to grasp the fundamentals of canvas art to advanced
          artists aiming to refine their techniques, we have meticulously
          curated courses that cover a wide spectrum of topics. Immerse yourself
          in the world of acrylics, oils, mixed media, and more, guided by
          experienced instructors who share their expertise step by step.
        </p>
        <p className={`${format_text["p"]} ${globalCss["global-p"]}`}>
          🖌️ Embark on Captivating Canvas Projects: Sometimes, the best way to
          learn is by doing. That's why we've compiled a series of hands-on
          canvas projects that invite you to roll up your sleeves and get
          creative. These projects encompass a wide range of themes and styles,
          encouraging you to experiment, innovate, and discover your own
          artistic voice. With detailed instructions and accompanying visuals,
          each project transforms your workspace into a playground of
          imagination.
        </p>
        <p className={`${format_text["p"]} ${globalCss["global-p"]}`}>
          🌐 Community and Connection: At <FormatMark>CanvasWizard</FormatMark>, we believe in the
          power of a thriving creative community. Engage with fellow learners,
          share your progress, exchange ideas, and receive constructive
          feedback. Our platform fosters an environment where artists of all
          backgrounds can come together, learn from one another, and form
          meaningful connections that fuel their artistic growth.
        </p>
        <p className={`${format_text["p"]} ${globalCss["global-p"]}`}>
          🆓 Completely Free and Accessible: We are committed to breaking down
          barriers and making creative education accessible to everyone. All the
          courses, books, and projects on our website are absolutely free,
          ensuring that financial limitations never hinder your artistic
          pursuit.
        </p>
        <p className={`${format_text["p"]} ${globalCss["global-p"]}`}>
          🔒 User-Friendly Experience: Navigating <FormatMark>CanvasWizard</FormatMark> is a
          breeze. Our user-friendly interface ensures that you can seamlessly
          explore courses, discover books, and embark on projects without any
          technical hurdles. Spend less time figuring out how to use the website
          and more time indulging in your creative passions.
        </p>
        <p className={`${format_text["p"]} ${globalCss["global-p"]}`}>
          Experience the boundless world of canvas artistry like never before.
          Whether you're a painter at heart, a hobbyist seeking new experiences,
          or simply intrigued by the magic of canvas, <FormatMark>CanvasWizard</FormatMark>
          invites you to join us in this exciting journey of creativity and
          learning. Unleash your imagination, refine your techniques, and
          cultivate your love for canvas art with our free courses, books, and
          projects. Your masterpiece awaits – come and create with us!
        </p>
      </section>
    </>
  );
}
