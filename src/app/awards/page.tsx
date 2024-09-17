import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { AwardIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="mt-5">
      {" "}
      <section
        id="about"
        className="prose text-muted-foreground dark:prose-invert text-xs lg:text-sm mx-auto"
      >
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="flex items-start justify-center"
        >
          <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4 mb-8">
            <AwardIcon size={32}></AwardIcon>
          </div>
        </BlurFade>
        <br></br>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="flex flex-col gap-y-3 items-center text-center justify-normal">
            <p>
              The list here is not just a list of accolades that i have won, but
              is a testament to the hard work and dedication that i have put in
              to achieve the goals that i have set for myself, i always strive
              to be the best version of myself and contribute to the best of my
              abilities. I have always been a firm believer in the fact that
              hard work always pays off!
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <h4 className="text-sm">2023</h4>
              <h2 className="">National and State iAwards Winner</h2>
              <p className="text-xs lg:text-sm">Deakin University, Australia</p>
              <p className="text-xs lg:text-sm leading-5">
                Project Echo, a project that i worked on during the final year
                of my studies at Deakin University won the National iAwards in
                2023. Project Echo aims to build a real-time wildlife monitoring
                system to support the Australian Government’s Wild Otways
                initiative to protect the threatened species in the Great Otway
                National Park.{" "}
                <a href="/projects" className="no-underline text-blue-500">
                  Find more about this project and my contributions.
                </a>
              </p>
              <Link
                href="https://aiia.com.au/wp-content/uploads/2023/09/National-iAwards-2023-media-release.pdf"
                target="_blank"
                className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
              >
                Media Coverage
                <div className="group-hover:translate-x-1 transition duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
              <div className="">
                <div className="">
                  <Image
                    src="/projectecho1.jpeg"
                    height={1000}
                    width={1000}
                    alt="img 1"
                    className="w-full object-cover aspect-video rounded-lg"
                  ></Image>
                </div>
                <div>
                  <Image
                    src="/projectecho2.jpeg"
                    height={1000}
                    width={1000}
                    alt="img 1"
                    className="w-full aspect-video object-cover rounded-lg"
                  ></Image>
                </div>
              </div>

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
              <h4 className="text-sm">2005 - 2020</h4>
              <h2 className="">Top 3 Academic</h2>
              <p className="text-xs lg:text-sm">KG - Year 12</p>
              <p className="text-xs lg:text-sm leading-5">
                Throughout my school life, from KG to Year 12, i have always
                been a top 3 academic performer in my class and have won
                numerous awards for my academic excellence. Thanks to my parents
                for always supporting me and my teachers for guiding me.
              </p>
              <div className="">
                <div className="">
                  <Image
                    src="/school1.jpeg"
                    height={1000}
                    width={1000}
                    alt="img 1"
                    className="w-full object-cover aspect-video rounded-lg"
                  ></Image>
                </div>
                <div>
                  <Image
                    src="/school2.jpeg"
                    height={1000}
                    width={1000}
                    alt="img 1"
                    className="w-full aspect-video object-cover rounded-lg"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
        <div className="mb-32"></div>
      </section>
    </div>
  );
}
