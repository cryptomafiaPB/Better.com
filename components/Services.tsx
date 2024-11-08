"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { title } from "node:process";
import { useState } from "react";
import Header from "./Header";

export default function Services() {
  const [category, setCategory] = useState<any>("OurProducts");
  const categories: any = {
    OurProducts: [
      {
        title: "Buying your first home with Better",
        image: "/first-home.webp",
        description: "",
        link: "/buying-your-first-home-with-better-mortgage/",
      },
      {
        title: "One Day Mortgage®",
        image: "/one-day-mortgage.webp",
        description:
          "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
        link: "/one-day-mortgage",
      },
      {
        title: "Better HELOC",
        image: "/better-heloc.webp",
        description:
          "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.",
        link: "/heloc/",
      },
      {
        title: "Insurance",
        image: "/insurance.webp",
        link: "/",
      },
    ],

    calculator: [
      {
        title: "Mortgage Calculator",
        image: "/mortgage-calculator.webp",
        description: "",
        link: "/mortgage-calculator/",
      },
      {
        title: "Affordability calculator",
        image: "/affordability-calculator.webp",
        description:
          "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
        link: "/how-much-house-can-i-afford/",
      },
      {
        title: "HELOC calculator",
        image: "/heloc-calculator.webp",
        description:
          "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
        link: "/heloc-calculator/",
      },
      {
        title: "Fixed-rate loan comparison calculator",
        image: "/fixed-rate-calculator.webp",
        description: "",
        link: "/load-comparison-calculator/",
      },
    ],
    guideAndFAQs: [
      {
        title: "What is a good debt-to-income ratio for a home loan?",
        image: "/good-dti.webp",
        description: "",
        link: "/what-is-a-good-debt-to-income-ratio/",
      },
      {
        title: "Buying a house without realtor",
        image: "/buy-house-without-realtor.webp",
        description:
          "Thinking about buying a house without a real estate agent? Read this first.",
        link: "/buying-house-without-realtor/",
      },
      {
        title: "Timeline for homebuying process",
        image: "/loan-timeline.webp",
        description:
          "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
        link: "/home-buying-process-timeline/",
      },
      {
        title: "Conventional loan requirements",
        image: "/conventional-loan.webp",
        description: "",
        link: "/conventional-loan-requirements/",
      },
    ],
  };

  return (
    <section className="section w-full pb-4 lg:pb-12">
      <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
        <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
          <h2 className="font-bold text-textPrimary !text-5xl leading-heading m-0 p-0  md:text-2xl md:tracking-tight w-full max-w-lg  tracking-tight">
            Got questions
            <br />
            We&apos;ve got answers
          </h2>
          <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
            <button
              value={"OurProducts"}
              onClick={() => {
                setCategory("OurProducts");
              }}
              className={` ${
                category === "OurProducts"
                  ? "text-interactivePrimary shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] "
                  : ""
              }
                inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto   `}
            >
              Our products
            </button>
            <button
              value={"calculator"}
              onClick={() => {
                setCategory("calculator"), console.log(category);
              }}
              className={` ${
                category === "calculator"
                  ? "text-interactivePrimary shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] "
                  : ""
              }
              inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto`}
            >
              Calculators
            </button>
            <button
              value={"guideAndFAQs"}
              onClick={() => {
                setCategory("guideAndFAQs");
              }}
              className={` ${
                category === "guideAndFAQs"
                  ? "text-interactivePrimary shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] "
                  : ""
              }
              inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto`}
            >
              Guides & FAQs
            </button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6">
          <Link
            className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-md bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>*]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10"
            href={categories[category][0].link}
          >
            <div className="flex flex-col gap-6">
              <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                {categories[category][0].title}
              </h4>
              <div className="flex items-end justify-between">
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <Image
              alt="First Home"
              rel="preconnect"
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
              data-nimg="1"
              className="w-full rounded-md object-cover h-[160px] md:h-[130px]"
              src={categories[category][0].image}
            />
          </Link>
          <Link
            className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-md bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>*]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10"
            href={categories[category][1].link}
          >
            <div className="flex flex-col gap-6">
              <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                {categories[category][1].title}
              </h4>

              <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
                {categories[category][1].description}
                <sup>1</sup>
              </p>
              <div className="flex items-end justify-between">
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <Image
              alt="One day mortgage"
              rel="preconnect"
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
              data-nimg="1"
              className="w-full rounded-md object-cover h-[160px] md:h-[130px]"
              src={categories[category][1].image}
            />
          </Link>
          <Link
            className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-md bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>*]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10"
            href={categories[category][2].link}
          >
            <div className="flex flex-col gap-6">
              <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                {categories[category][2].title}
              </h4>
              <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
                {categories[category][2].description}
              </p>
              <div className="flex items-end justify-between">
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <Image
              alt="Better HELOC"
              rel="preconnect"
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
              data-nimg="1"
              className="w-full rounded-md object-cover h-[160px] md:h-[130px]"
              src={categories[category][2].image}
            />
          </Link>
          <Link
            className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-md bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>*]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10"
            href={categories[category][3].link}
          >
            <div className="flex flex-col gap-6">
              <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                {categories[category][3].title}
              </h4>
              <div className="flex items-end justify-between">
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <Image
              alt="Insurance"
              rel="preconnect"
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
              data-nimg="1"
              className="w-full rounded-md object-cover h-[160px] md:h-[130px]"
              src={categories[category][3].image}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
