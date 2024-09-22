import BlurFade from "../../components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
import { BadgeCheckIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <div>
      {" "}
      <section
        id="certs"
        className="prose text-muted-foreground dark:prose-invert text-xs lg:text-sm mx-auto text-center"
      >
        <BlurFade
          delay={BLUR_FADE_DELAY * 0 * 0.05}
          className="flex items-start justify-center mb-8"
        >
          <div className="bg-zinc-100 dark:bg-zinc-900 w-max rounded-full p-4">
            <BadgeCheckIcon size={32}></BadgeCheckIcon>
          </div>
        </BlurFade>
        <br></br>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
            <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
              <div className="text-sm w-full col-span-2">
                <Image
                  src="/hashicert.png"
                  alt="deakin logo"
                  width={1000}
                  height={1000}
                  className="w-24 h-24 mx-auto "
                ></Image>
                <h4 className="text-sm">Sep 2024</h4>
                <h2 className=""> Hashicorp Certified: Terraform Associate</h2>
                <p className="text-xs lg:text-sm">Hashicorp</p>
                <div
                  className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
                >
                  Exam Scheduled!
                </div>
                <br></br>
              </div>
            </div>
          </BlurFade>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4 * 0.05} className="">
          {" "}
          <div className="h-28 w-[2px] bg-black/25 border-dotted border dark:bg-white/50 rounded-full mx-auto my-3"></div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
            <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
              <div className="text-sm w-full col-span-2">
                <Image
                  src="/365.png"
                  alt="deakin logo"
                  width={1000}
                  height={1000}
                  className="w-24 h-24 rounded-full mx-auto"
                ></Image>
                <h4 className="text-sm">April 2024</h4>
                <h2 className=""> Microsoft 365 Certified: Fundamentals</h2>
                <p className="text-xs lg:text-sm">Microsoft</p>
                <Link
                  href="https://learn.microsoft.com/en-us/users/rohitbajaj-2745/credentials/e23c595a3879c729?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                  target="_blank"
                  className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
                >
                  View Credentials
                  <div className="group-hover:translate-x-1 transition duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
                <br></br>
              </div>
            </div>
          </BlurFade>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4 * 0.05} className="">
          {" "}
          <div className="h-28 w-[2px] bg-black/25 border-dotted border dark:bg-white/50 rounded-full mx-auto my-3"></div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 0 * 0.05} className="">
          <div className="grid items-center text-center prose text-muted-foreground dark:prose-invert">
            <div className="text-sm w-full col-span-2">
              <Image
                src="/awscloudprac.png"
                alt="awscloudprac logo"
                width={1000}
                height={1000}
                className="w-24 h-24 rounded-full mx-auto"
              ></Image>
              <h4 className="text-sm">January 2023</h4>
              <h2 className="">AWS Certified Cloud Practitioner</h2>
              <p className="text-xs lg:text-sm">Amazon Web Services</p>
              <Link
                href="https://www.credly.com/badges/e7a90577-ac6b-439f-baed-5a8b16c6a371/linked_in_profile"
                target="_blank"
                className="text-sm text-blue-500 group flex items-center gap-x-1 mx-auto w-max no-underline"
              >
                View Credentials
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
