import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";

export default function EducationPage() {
  return (
    <div>
      {" "}
      <section id="education" className="mt-5">
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="flex items-start justify-center"
        >
          <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4">
            <GraduationCap size={32}></GraduationCap>
          </div>
        </BlurFade>
        <br></br>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <h4 className="text-sm">2021 - 2023</h4>
              <h2 className="">Bachelor of Information Technology </h2>
              <p className="text-xs lg:text-sm">Deakin University, Australia</p>
              <p className="text-xs lg:text-sm leading-6">
                <span className="font-semibold underline">
                  Majored in Cloud Computing and Networking
                </span>
                , Programming [HD], Data Science [D], Cyber Security [HD],
                Bussiness Analytics [HD], Data & Information Management [D], Web
                Development [D], Cloud Computing [D], Descrete Mathematics [HD],
                Computer Networks [D], Object Oriented Programming [HD],
                Entrepreneurship [HD], Communication in IT [HD], UX Fundamentals
                [D], 3D Animation [D], Capstone Project [HD]
              </p>
              <Link
                href="/"
                className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
              >
                View Awards
                <div className="group-hover:translate-x-1 transition duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
              <br></br>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4 * 0.05} className="">
          {" "}
          <div className="h-28 w-[2px] bg-black/25 border-dotted border dark:bg-white/50 rounded-full mx-auto my-3"></div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <h4 className="text-sm">2018 - 2020</h4>
              <h2 className="">Year 11 - Year 12</h2>
              <p className="text-xs lg:text-sm">
                Cambridge International Public School, India
              </p>
              <p className="text-xs lg:text-sm">
                Physics [86], Chemistry [95], Mathematics [91], Computer Science
                [94], English [96]
              </p>
              <Link
                href="/"
                className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
              >
                View Awards
                <div className="group-hover:translate-x-1 transition duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
              <br></br>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4 * 0.05} className="">
          {" "}
          <div className="h-28 w-[2px] bg-black/25 border-dotted border dark:bg-white/50 rounded-full mx-auto mb-3"></div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <h4 className="text-sm">2005 - 2018</h4>
              <h2 className="">KG - Year 10</h2>
              <p className="text-xs lg:text-sm">
                St. Joseph's Convent School, India
              </p>
              <p className="text-xs lg:text-sm">
                The place where I made friends, learned to read and write, and
                learned to be a good human being.
              </p>
              <Link
                href="/"
                className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
              >
                View Awards
                <div className="group-hover:translate-x-1 transition duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
              <br></br>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
