import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { WrenchIcon, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function SkillsPage() {
  return (
    <div>
      {" "}
      <section id="education" className="mt-5">
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="flex items-start justify-center"
        >
          <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4">
            <WrenchIcon size={32}></WrenchIcon>
          </div>
        </BlurFade>
        <br></br>
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="prose text-muted-foreground dark:prose-invert text-xs lg:text-sm mx-auto text-center"
        >
          <p className="">
            When i think of my skills, it sometimes get hard to pin point what i
            am good at because i have worked on so many different technologies,
            given my degree in IT, i have an introductory knowledge of a lot of
            areas of tech including software development, cloud computing, data
            science, cyber security etc. But to narrow down the scope, below you
            can find a list of technologies i am most confident in, altough, i
            believe that i can learn anything depending on the context, with
            minimal training.
          </p>
          <div>
            <h4>Cloud Computing and DevOps</h4>
            <br></br>
            <div className="flex justify-center flex-wrap gap-2">
              {DATA.cskills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
          <div>
            <h4>Computer Languages</h4>
            <br></br>
            <div className="flex justify-center flex-wrap gap-2">
              {DATA.pskills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
          <div>
            <h4>Web Development - Frontend & Backend</h4>
            <br></br>
            <div className="flex justify-center flex-wrap gap-2">
              {DATA.fskills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
          <div>
            <br></br>
            <Link
              href="/projects"
              className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
            >
              Projects
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </div>
          <br></br>
          <p className="text-xs">* Learning these days</p>
        </BlurFade>
      </section>
    </div>
  );
}
