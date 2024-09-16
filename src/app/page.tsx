import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TestimonialCard } from "@/components/testimonial-card";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import Link from "next/link";
const BLUR_FADE_DELAY = 0.04;
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col space-y-5 mt-5">
      <section id="hero">
        <div className="w-full max-w-2xl ">
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
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
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
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="prose max-w-full text-pretty text-center font-sans text-sm text-muted-foreground dark:prose-invert">
            I am a 2023 Technology graduate from Deakin University, currently
            working as a Casual Academic in the School of IT at Deakin. I bring
            over 9 months of hands-on{" "}
            <a href="/experience" className="no-underline text-blue-500">
              experience
            </a>{" "}
            from internships in various tech roles, including IT Support, Web
            Development, and Cloud Engineering/Cloud Solutions Architecture,
            particularly within startup environments.
          </div>
          <br></br>
          <div className="prose max-w-full text-pretty text-center font-sans text-sm text-muted-foreground dark:prose-invert">
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
        <div className="dark:bg-white/50 bg-violet-500/50 h-28 w-28 blur-3xl absolute top-20 -z-10 left-1/2 -translate-x-1/2"></div>
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
              href="/awards"
              className="text-sm text-blue-500 group flex items-center gap-x-1"
            >
              Awards and Achievements{" "}
              <div className="group-hover:translate-x-1 transition duration-300">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10 + 6 * 0.05}>
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
          <BlurFade delay={BLUR_FADE_DELAY * 10 + 7 * 0.05}>
            {" "}
            <Link
              href="/connect"
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
     
      {/* <section id="testimonials">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-semibold mb-5">Not to brag but...</h2>
          </BlurFade>
          <div className="grid lg:grid-cols-2 gap-5">
            {DATA.testimonials.map((testimonial, id) => (
              <BlurFade
                key={testimonial.who}
                delay={BLUR_FADE_DELAY * 6 + id * 0.0}
                className={id === 0 ? "lg:col-span-2" : ""}
              >
                <TestimonialCard
                  key={testimonial.who}
                  who={testimonial.who}
                  description={testimonial.des}
                />
              </BlurFade>
            ))}
          </div>
        </section> */}
      {/* <section id="work">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-semibold mb-5">
              Places where my skills came handy
            </h2>
          </BlurFade>
          <div className="flex min-h-0 flex-col gap-y-5">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section> */}

      {/* <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-semibold mb-5">
              Super chill, open for chat(ter)
            </h2>
          </BlurFade>
          <div className="">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <p className="">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.email.url}
                  className="text-blue-500 hover:underline"
                >
                  on LinkedIn
                </Link>{" "}
                and I&apos;ll (try to) respond asap.
              </p>
            </BlurFade>
          </div>
        </section> */}
    </main>
  );
}
