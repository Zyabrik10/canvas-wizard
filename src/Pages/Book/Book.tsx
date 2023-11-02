import {
  FormatP,
  FormatTitleH2,
} from "code-components/format-components/format-components";
import Support from "components/Support/Support";


export default function Book() {
  return (
    <>
      <section>
        <FormatTitleH2>Canvas Wizard - a book about canvas.</FormatTitleH2>

        <FormatP>
          Welcome to Canvas Wizard. This website is designed to be like a book
          for self-teaching. I created this website because every time I tried
          to find information about canvas and its projects, I encountered the
          same issue with old and hard-to-understand articles. There were old
          and complex code examples, as well as difficult explanations.
          Sometimes there were videos as well. Additionally, all articles and
          videos about canvas were in English
        </FormatP>

        <FormatP>
          The idea of such a website for canvas, where you could find easy
          explanations and modern code examples and on your own languages,
          excited me. This website provides information about canvas, its API,
          projects, and things you should know before starting a new project.
        </FormatP>

        <FormatP>
          I will explain physics and math for projects. You will be able to
          create physics simulations, games, artistic stuff, etc.
        </FormatP>

        <FormatP>
          This website is created for newcomers to canvas and for those who are
          already masters. The real world is not ideal, so sometimes you may
          come across hard-to-understand code or explanations. If this happens,
          it's okay. It's normal not to understand something complex on the
          first try. Try to reread, take a pause, and then come back after some
          time. Make notes, attempt to create visual explanations for yourself
          that you believe are correct. Our brain is a fascinating thing, and
          perhaps, even if you don't understand immediately, you will grasp it
          while you sleep or go for a walk. It might take a few days, weeks, or
          even years, but you will understand eventually.
        </FormatP>

        <FormatP>
          Hope you will enjoy it and tell your friends about this project to
          spread the word about this free website-book about canvas.
        </FormatP>

        <Support />

      </section>
    </>
  );
}
