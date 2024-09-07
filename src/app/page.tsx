import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TestimonialCard } from "@/components/testimonial-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 mt-20 lg:mt-10">
      <section id="hero">
        <div className=" w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-5 relative w-full">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 🦁`}
              />
              <div className="w-40 h-40 bg-sky-500 dark:bg-orange-500 absolute  -right-28 -top-16 -z-10 blur-[100px] "></div>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-sm"
                text={`Based in ${DATA.location}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <Markdown className="leading-7">{DATA.description}</Markdown>
              </BlurFade>
            </div>
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
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-semibold mb-5">I'm a</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-semibold mb-5">I've used</h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-5">
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials">
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
      </section>
      <section id="work">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-semibold mb-5">Places where my skills came handy</h2>
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
      </section>
      <section id="education">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-semibold mb-5">I "studied" 😉 from </h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-semibold mb-5">Super chill, open for chat(ter)</h2>
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
      </section>
      <div className="h-32"></div>
    </main>
  );
}
