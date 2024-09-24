import BlurFade from "../../components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import AudioPlayer from "../../components/ui/audio";
import { InfoIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {" "}
      <section
        id="about"
        className="prose text-muted-foreground dark:prose-invert text-xs lg:text-sm mx-auto text-center"
      >
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="flex items-start justify-center mb-8"
        >
          <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4">
            <InfoIcon size={32}></InfoIcon>
          </div>
        </BlurFade>
        <br></br>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <p className="text-center">
            [ Hi, play below the track as you read this ! ]
          </p>
          <AudioPlayer />
          <br></br>
          <div className="grid items-center ">
            <p>Hi, My name is Rohit, and i'm from the India. </p>
            <p>
              India, that you don't see on TV, a very small town in the state of
              Punjab where education is a luxury and a privilege. From what i
              remember from my childhood, i have always seen my parents working
              hard to provide the best, and i have always been inspired by their
              work ethic. They have made impossible seem possible, despite the
              fact my parents never had the opportunity to go to a good school
              or college. The sacrifices they made for me to be where i am today
              is something i can never repay.
            </p>
            <p>Who i am is because of them!</p>
            <p>
              Growing up, i have seen the people around me struggling with
              technology, and at one point, i built a reputation for myself as a
              tech guru in my family and neighborhood.
            </p>
            <p>
              Till year 10 i have only learned how to use a computer, just the
              basics, like how to open microsoft word, draw a circle in paint,
              nothing too fancy, internet was not even a thing back then! Crazy
              how kids these days are born with a smartphone in their hands and
              are learning how to code at the age of 5. In year 11, in india,
              the school i studied from we have to pick between physical
              education and computer science, and i (my mum made me!) picked
              computer science, and that's where my journey began. I still
              remember the first day of my class where they taught us a bit
              about programming, but everything was so new to me, i didn't
              understand a thing, i came home and told my mum that i want to
              change my subject, but this is where she pushed me to study for
              atleast 2 weeks and then decide! and very soon i became the top
              student in my class and i sort of built a reputation for myself as
              a tech person. Throughout my high school, i learned how to code in
              python, bit of computer networking, database, cyber security. We
              even built a Library Management System using Python tkinter and
              MySQL. This was a fun bit, however, i was still unaware of the
              world of technology.
            </p>
            <p>
              Year 12 is about to finish, the school is about to end and we are
              in our last class of the year, and i see a few of my friends
              talking about HTML with my computer science teacher, and i was
              like what is this about and how in the world these people and my
              teacher know about this and i don't, turns out these kids learned
              a lot about different technologies in thier earlier age in school
              or from internet. THIS MADE ME BIT ANGRY AND JEALOUS, and i still
              remember its 2020, covid and i have nothing to do, and some of my
              relatives are home with us and i sneaked into my room and started
              looking for what is HTML on internet and came across this video on
              youtube "Learn HTML in 60 Minutes", i saw it and built my first
              ever web page using HTML, and trust me, the feeling was unmatched!
            </p>
            <p>
              Couple of months into exploring things, i came across CSS,
              BootStrap, JavaScript and so on, and this is the time where i was
              figuiring out what to study next for higher education. Given my
              experience so far, this curiosity led me to study Information
              Technology.
            </p>
            <p className="text-center">To be continued...</p>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
