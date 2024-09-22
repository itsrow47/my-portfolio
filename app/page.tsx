import BlurFade from "../components/magicui/blur-fade";
import BlurFadeText from "../components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { DATA } from "../data/resume";
import Link from "next/link";
const BLUR_FADE_DELAY = 0.04;
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col space-y-5 ">
      <section id="hero">
        <div className=" ">
          <div className="gap-2 flex flex-col items-center justify-between space-y-5">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-24 border">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <div className="flex-col flex flex-1 items-center space-y-5 relative w-full">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-xs text-muted-foreground"
                text={`${DATA.location}`}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="images" className="space-y-5">
        {" "}
        <div className="flex items-center justify-center gap-x-3 w-64 md:w-80 lg:w-[70%] flex-wrap gap-2 mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 0 * 0.05}>
            <Image
              src="/deakin.png"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 2 * 0.05}>
            <Image
              src="/acs.webp"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 4 * 0.05}>
            <Image
              src="/365.png"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>{" "}
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 6 * 0.05}>
            <Image
              src="/awscloudprac.png"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 8 * 0.05}>
            <Image
              src="/awssa.png"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 8 * 0.05}>
            <Image
              src="/github.png"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full object-contain bg-white"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 12 * 0.05}>
            <Image
              src="/Jenkins.png"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 14 * 0.05}>
            <Image
              src="/terraform.svg"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full object-contain"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 16 * 0.05}>
            <Image
              src="/linux.png"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full bg-zinc-50/20"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 18 * 0.05}>
            <Image
              src="/ansible.png"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full bg-white"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 20 * 0.05}>
            <Image
              src="/python.svg"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 22 * 0.05}>
            <Image
              src="/lambda.svg"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 24 * 0.05}>
            <Image
              src="/k8.svg"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 26 * 0.05}>
            <Image
              src="/docker.svg"
              alt="acs logo"
              width={1000}
              height={1000}
              className="w-10 h-10 rounded-full"
            ></Image>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="prose max-w-full text-pretty text-center font-sans text-xs lg:text-sm text-muted-foreground dark:prose-invert">
            I am a 2023 Technology graduate from{" "}
            <a href="/education" className="no-underline text-blue-500">
              Deakin University
            </a>
            , currently working as a Casual Academic in the School of IT at
            Deakin. I bring over 9 months of hands-on{" "}
            <a href="/experience" className="no-underline text-blue-500">
              experience
            </a>{" "}
            from internships in various tech roles, including IT Support, Web
            Development, and Cloud Engineering/Cloud Solutions Architecture,
            particularly within startup environments working on{" "}
            <a href="/projects" className="no-underline text-blue-500">
              award winning projects.
            </a>
          </div>
          <br></br>
          <div className="prose max-w-full text-pretty text-center font-sans text-xs lg:text-sm text-muted-foreground dark:prose-invert">
            I am actively seeking a full-time position in the tech industry to
            launch my career. I am open to relocation across Australia at my own
            expense, and I am eager to contribute{" "}
            <a href="/skills" className="no-underline text-blue-500">
              my skills
            </a>{" "}
            and expertise to a dynamic and innovative team.
          </div>
        </BlurFade>
      </section>
      <br></br>
      <section id="links" className="">
        <div className="flex gap-x-5 items-center justify-center flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 0 * 0.05}>
            {" "}
            <Link
              href="/about"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              Find more about me
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 1 * 0.05}>
            {" "}
            <Link
              href="/projects"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              Check out my projects
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 2 * 0.05}>
            {" "}
            <Link
              href="/skills"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              My skills
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 3 * 0.05}>
            {" "}
            <Link
              href="/experience"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              My work experience
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10 + 4 * 0.05}>
            {" "}
            <Link
              href="/education"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              Education
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 5 * 0.05}>
            {" "}
            <Link
              href="/certs"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              Certifications
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10 + 6 * 0.05}>
            {" "}
            <Link
              href="/awards"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              Awards and Achievements{" "}
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10 + 7 * 0.05}>
            {" "}
            <Link
              href="/testimonials"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              Testimonials{" "}
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 8 * 0.05}>
            {" "}
            <Link
              href="https://www.linkedin.com/in/iamrohitbajaj/"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              Connect with me{" "}
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
