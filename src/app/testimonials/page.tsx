import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { QuoteIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <div>
      {" "}
      <section id="testimonials" className="">
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="flex items-start justify-center"
        >
          <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4 mb-3">
            <QuoteIcon size={32}></QuoteIcon>
          </div>
        </BlurFade>
        <br></br>
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="grid items-center w-full prose text-muted-foreground dark:prose-invert text-xs lg:text-sm mx-auto text-center text-wrap"
        >
          <div className="">
            <p className="">
              Growing up, i have seen my dad building relationships with our
              customers and i am truly familiar with the fact that more than
              anything we do, it always comes down to the people, weather its
              bussiness, or life. Below you can find some good words, people i
              worked or studied with, have said about me!
            </p>
            <Link
              href="https://www.linkedin.com/in/iamrohitbajaj/"
              target="_blank"
              className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
            >
              Recommend me
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>

            <div className="mt-20">
              <p className="">
                "Rohit was an invaluable member of the Project Echo leadership
                team due to his niche skillset in cloud computing and strong web
                development skills. Rohit leads by example, approaching all
                tasks with genuine enthusiasm and his refreshing sense of
                optimism is not easily diminished. He actively seeks out
                challenging problems and opportunities to hone his skills, then
                delivers intelligent solutions. He can be relied on to keep a
                cool head when time is tight and will go above and beyond when
                needed to support the team. Mentoring Rohit this past year has
                been very rewarding as I have seen him take feedback on board
                and apply it immediately. Rohit is certainly one to watch
                because he will be doing big things in the devops space in the
                near future."
              </p>
              <p className="text-xs w-1/2 mx-auto">
                <strong>Quentin Cooke</strong>, National Digital Development
                Lead at KBR
              </p>
            </div>
            <div className="mt-20">
              <p className="">
                "Rohit was instrumental in helping me understand complex
                concepts during my programming subject with Deakin. Rohit would
                take the task, break it down for me so I understood and help me
                to come to a solution. I would highly recommend him."
              </p>
              <p className="text-xs w-1/2 mx-auto">
                <strong>Jules McCallum</strong>, Team Leader, ICT Support at
                Department of Premier and Cabinet, VIC
              </p>
            </div>
            <div className="mt-20">
              <p className="">
                "Rohit is an extremely competent and reliable individual. He is
                highly devoted to improving his IT skills and committed to
                achieving the best results. He took the time to assist me during
                my first year of university when I was struggling with certain
                units and devoted time towards helping me understand the
                concepts, which is a real testament to his patience and
                character. He is an excellent teacher with profound knowledge.
                He was able to troubleshoot and identify errors I was facing in
                addition to guiding me through ways to find a solution. Anyone
                who gets to work with Rohit will value his dedication and
                commitment."
              </p>
              <p className="text-xs text-xs w-1/2 mx-auto">
                <strong>Indiah Smith</strong>, Paralegal, Ashurst, WA
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
