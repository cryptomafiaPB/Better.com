import { Calculator, FileCheck2, TrendingDown } from "lucide-react";
import Image from "next/image";
import React from "react";

function MonthlyBreakdown() {
  return (
    <>
      <section className="bg-accentBorderInverseSecondary pt-20">
        <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
          <div className="grid md:grid-cols-2">
            <div>
              <h4 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
                Monthly payment breakdown
              </h4>
              <p
                className="leading-normal m-0 p-0 text-left mt-6 overflow-hidden text-3xl font-medium text-textPrimary"
                data-testid="sum"
              >
                $2,146/mo
              </p>
              <div className="mt-12">
                <svg
                  height="100"
                  id="svgelem"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    data-testid="principalPill"
                    height="80"
                    rx="40"
                    ry="40"
                    className="duration-300 ease-in-out fill-backgroundInverseSecondary"
                    width="283.74827586206897"
                    x="0"
                    y="0"
                  ></rect>
                  <rect
                    data-testid="taxesPill"
                    height="80"
                    rx="24.78355079217148"
                    ry="24.78355079217148"
                    className="duration-300 ease-in-out fill-infoSecondary"
                    width="49.56710158434296"
                    x="283.74827586206897"
                    y="0"
                  ></rect>
                  <rect
                    data-testid="insurancePill"
                    height="80"
                    rx="12.345013979496738"
                    ry="12.345013979496738"
                    className="duration-300 ease-in-out fill-graph2Tertiary"
                    width="24.690027958993475"
                    x="333.3153774464119"
                    y="0"
                  ></rect>
                  <rect
                    data-testid="hoaPill"
                    height="80"
                    rx="12.345013979496738"
                    ry="12.345013979496738"
                    className="duration-300 ease-in-out fill-graph4Tertiary"
                    width="24.690027958993475"
                    x="358.0054054054054"
                    y="0"
                  ></rect>
                  <rect
                    data-testid="utilitiesPill"
                    height="80"
                    rx="9.352283317800559"
                    ry="9.352283317800559"
                    className="duration-300 ease-in-out fill-graph3Tertiary"
                    width="18.704566635601118"
                    x="382.69543336439887"
                    y="0"
                  ></rect>
                  0
                </svg>
                <div className="md: block p-6 mt-12 rounded-md shadow-[0_0_12px_rgba(41,43,41,0.12)] opacity-0 duration-300 ease-in-out">
                  <h4 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg mb-6">
                    Property taxes
                  </h4>
                  <p
                    className="font-normal leading-normal m-0 p-0 text-left text-textPrimary text-base"
                    data-testid="description"
                  >
                    These are taxes paid to the local government, not your
                    mortgage lender. This estimate uses the national average for
                    property taxes, which is 1.06%.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between h-16 mb-4">
                <div className="flex items-center text-textPrimary w-1/2">
                  <div className="rounded-sm h-4 w-[5px] mr-2 bg-backgroundInverseSecondary"></div>
                  <p className="font-normal leading-normal m-0 p-0 text-left text-textPrimary text-base">
                    Principal & interest
                  </p>
                </div>
                <p
                  className="leading-normal m-0 p-0 text-base pt-0 items-center text-left w-1/2 sm:w-[160px] flex font-medium text-interactiveForegroundSecondary"
                  data-testid="principal-&-interest"
                >
                  $1,517
                </p>
              </div>
              <div className="flex justify-between h-16 mb-4">
                <div className="flex items-center text-textPrimary w-1/2">
                  <div className="rounded-sm h-4 w-[5px] mr-2 bg-infoSecondary"></div>
                  <label
                    className="font-normal leading-normal m-0 p-0 text-left text-textPrimary text-base"
                    id="taxes-label"
                  >
                    Property taxes
                  </label>
                </div>
                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                  <div className="p-1 relative rounded-md bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-16">
                    <div
                      aria-hidden="true"
                      data-testid="input-icon-box"
                      className="mr-2 top-[20px] absolute ease-in-out duration-300 transition-all font-medium mr-2 z-10 w-6 h-6 flex items-center justify-center left-2"
                    >
                      $
                    </div>
                    <input
                      aria-describedby="taxes-help-text"
                      name="taxes"
                      role="textbox"
                      type="number"
                      data-labelalign="top"
                      id="input-taxes"
                      aria-errormessage="taxes-help-text"
                      className="text-right px-3 pb-none pl-[32px] relative outline-none border-none rounded-sm  pb-none text-default font-medium w-full h-full box-border"
                      value="265"
                    />
                  </div>
                  <div
                    className="font-normal leading-normal m-0 p-0 text-left text-xs flex pt-2 text-interactiveForegroundMuted flex-row-reverse pl-auto pr-3"
                    id="taxes-help-text"
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-16 mb-4">
                <div className="flex items-center text-textPrimary w-1/2">
                  <div className="rounded-sm h-4 w-[5px] mr-2 bg-graph2Tertiary"></div>
                  <label
                    className="font-normal leading-normal m-0 p-0 text-left text-textPrimary text-base"
                    id="insurance-label"
                  >
                    Homeowners insurance
                  </label>
                </div>
                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                  <div className="p-1 relative rounded-md bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-16">
                    <div
                      aria-hidden="true"
                      data-testid="input-icon-box"
                      className="mr-2 top-[20px] absolute ease-in-out duration-300 transition-all font-medium  z-10 w-6 h-6 flex items-center justify-center left-2"
                    >
                      $
                    </div>
                    <input
                      aria-describedby="insurance-help-text"
                      name="insurance"
                      role="textbox"
                      type="number"
                      data-labelalign="top"
                      id="input-insurance"
                      aria-errormessage="insurance-help-text"
                      className="text-right px-3 pb-none pl-[32px] relative outline-none border-none rounded-sm  pb-none text-default font-medium w-full h-full box-border"
                      value="132"
                    />
                  </div>
                  <div
                    className="font-normal leading-normal m-0 p-0 text-left text-xs flex pt-2 text-interactiveForegroundMuted flex-row-reverse pl-auto pr-3"
                    id="insurance-help-text"
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-16 mb-4">
                <div className="flex items-center text-textPrimary w-1/2">
                  <div className="rounded-sm h-4 w-[5px] mr-2 bg-graph4Tertiary"></div>
                  <label
                    className="font-normal leading-normal m-0 p-0 text-left text-textPrimary text-base"
                    id="hoa-label"
                  >
                    HOA fees
                  </label>
                </div>
                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                  <div className="p-1 relative rounded-md bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-16">
                    <div
                      aria-hidden="true"
                      data-testid="input-icon-box"
                      className="mr-2 top-[20px] absolute ease-in-out duration-300 transition-all font-medium  z-10 w-6 h-6 flex items-center justify-center left-2"
                    >
                      $
                    </div>
                    <input
                      aria-describedby="hoa-help-text"
                      name="hoa"
                      role="textbox"
                      type="number"
                      data-labelalign="top"
                      id="input-hoa"
                      aria-errormessage="hoa-help-text"
                      className="text-right px-3 pb-none pl-[32px] relative outline-none border-none rounded-sm  pb-none text-default font-medium w-full h-full box-border"
                      value="132"
                    />
                  </div>
                  <div
                    className="font-normal leading-normal m-0 p-0 text-left text-xs flex pt-2 text-interactiveForegroundMuted flex-row-reverse pl-auto pr-3"
                    id="hoa-help-text"
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="mb-6" data-orientation="vertical">
                <div
                  data-state="closed"
                  data-orientation="vertical"
                  className=""
                >
                  <h3
                    data-orientation="vertical"
                    data-state="closed"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-:R5d6m:"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="radix-:R1d6m:"
                      className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180"
                      data-radix-collection-item=""
                    >
                      <div
                        className="flex justify-between h-16 h-auto mb-0 w-full"
                        data-testid="open-utilities"
                      >
                        <div className="flex items-center text-textPrimary w-auto">
                          <div className="rounded-sm h-4 w-[5px] mr-2 bg-graph3Tertiary"></div>
                          <p
                            className="font-normal leading-normal m-0 p-0 text-left text-textPrimary text-base"
                            id="utilities-label"
                          >
                            Utilities
                          </p>
                        </div>
                        <span className="leading-normal m-0 p-0 text-textPrimary text-base w-[144px] text-left font-medium">
                          $100
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="radix-:R5d6m:"
                    role="region"
                    aria-labelledby="radix-:R1d6m:"
                    data-orientation="vertical"
                    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    // style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"
                  ></div>
                </div>
              </div>
              <button
                className="inline-block rounded-md leading-normal text-base text-center font-medium select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-10 h-16 w-auto mb-2"
                data-testid="copyLink"
              >
                Copy estimate link
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-accentBorderInverseSecondary">
        <section
          id="seo-section-wrapper"
          className="gap-x-6 [&>p]:text-textSecondary py-16 md:flex-row [&>h2]:mb-10 [&>h3]:my-6 [&>p]:my-3 m-auto max-w-screen-2xl justify-between px-6 md:px-14"
        >
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl md:tracking-tight">
            How does a mortgage calculator help me?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            When deciding how much house you can afford, one of the most
            important pieces to determine is whether a home will fit into your
            monthly budget. A mortgage calculator helps you understand the
            monthly cost of a home. And ours will allow you to enter different
            down payments and interest rates to help determine what is
            affordable for you.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl  md:tracking-tight">
            How much monthly mortgage payment can I afford?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Lenders determine how much you can afford on a monthly housing
            payment by calculating your{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/what-is-a-good-debt-to-income-ratio/"
            >
              debt-to-income ratio (DTI)
            </a>
            . The maximum DTI you can have in order to qualify for most mortgage
            loans is often between 45-50%, with your anticipated housing costs
            included.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Your DTI is the balance between your income and your debt. It helps
            lenders understand how safe or risky it is for them to approve your
            loan. A DTI ratio represents how much of your gross monthly income
            is spoken for by creditors, and how much of it is left over to you
            as disposable income. It’s most commonly written as a percentage.
            For example, if you pay half your monthly income in debt payments,
            you would have a DTI of 50%.
          </p>
          <div className="flex flex-col items-center">
            <div>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-3">
                Formula for calculating your debt-to-income (DTI) ratio:
              </p>
              <Image
                alt="Mortgage calculator | Debt to income ratio (DTI) formula"
                loading="lazy"
                width="780"
                height="153"
                decoding="async"
                data-nimg="1"
                src="/dti-formula.jpg"
              />
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-3">
                Here’s an example of what calculating your DTI might look like:
              </p>
              <Image
                alt="Mortgage calculator | Debt to income ratio (DTI) formula example"
                loading="lazy"
                width="780"
                height="525"
                decoding="async"
                data-nimg="1"
                src="/dti-example.jpg"
              />
            </div>
          </div>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl  md:tracking-tight">
            How to calculate monthly mortgage payments?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Your monthly mortgage payment includes loan principal and interest,
            property taxes, homeowners insurance, and mortgage insurance (PMI),
            if applicable. While not typically included in your mortgage
            payment, homeowners also pay monthly utilities and sometimes pay
            homeowners association (HOA) fees, so it’s a good idea to factor
            these into your monthly budget. This mortgage calculator factors in
            all these typical monthly costs so you can really crunch the
            numbers.
          </p>
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            Formula for calculating monthly mortgage payments
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The easiest way to calculate your mortgage payment is to use a
            calculator, but for the curious or mathematically inclined, here’s
            the formula for calculating principal and interest yourself:
          </p>
          <div className="flex flex-col items-center">
            <div>
              <Image
                alt="Mortgage calculator | Monthly mortgage payment formula"
                loading="lazy"
                width="780"
                height="126"
                decoding="async"
                data-nimg="1"
                src="/monthly-mortgage-payments-formula.jpg"
              />
              <div>
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-3">
                  Where:
                </p>
                <ul className="ml-xl list-disc">
                  <li>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-3">
                      <b>M</b> is monthly mortgage payments
                    </p>
                  </li>
                  <li>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-3">
                      <b>P</b> is the principal loan amount (the amount you
                      borrow)
                    </p>
                  </li>
                  <li>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-3">
                      <b>r</b> is the monthly interest rate
                      <br />
                      (annual interest rate divided by 12 and expressed as a
                      decimal)
                      <br />
                      <small>
                        For example:
                        <br />
                        if the annual interest rate is <b>5%</b>,<br /> the
                        monthly rate would be <b>0.05/12</b> = .00417, or{" "}
                        <b>.417%</b>
                      </small>
                    </p>
                  </li>
                  <li>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-3">
                      <b>n</b> is the total number of payments in months
                      <br />
                      <small>
                        For example:
                        <br />
                        for a 30-year loan, n = 30×12 = <b>360</b> months
                      </small>
                    </p>
                  </li>
                </ul>
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-3">
                  Here’s a simple example:
                </p>
                <Image
                  alt="Mortgage calculator | Monthly mortgage payment formula example"
                  loading="lazy"
                  width="780"
                  height="221"
                  decoding="async"
                  data-nimg="1"
                  src="/monthly-mortgage-payments-example.jpg"
                />
              </div>
            </div>
          </div>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            This formula assumes a fixed-rate mortgage, where the interest rate
            remains constant throughout the loan term. And remember, you’ll
            still need to add on taxes, insurance, utilities, and HOA fees if
            applicable.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            How to use this mortgage calculator?
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Play around with different home prices, locations,
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/faq/loan-process/down-payment-definition/"
            >
              down payments
            </a>
            , interest rates, and mortgage lengths to see how they impact your
            monthly mortgage payments.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Increasing your down payment and decreasing your interest rate and
            mortgage term length will make your monthly payment go down. Taxes,
            insurance, and HOA fees will vary by location. If you enter a down
            payment amount that’s less than 20% of the home price,{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/what-is-pmi-or-private-mortgage-insurance/"
            >
              private mortgage insurance (PMI)
            </a>
            costs will be added to your monthly mortgage payment. As the costs
            of utilities can vary from county to county, we’ve included a
            utilities estimate that you can break down by service. If you’re
            thinking about buying a condo or into a community with a Homeowners
            Association (HOA), you can add HOA fees.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The only amounts we haven’t included are the money you’ll need to
            save for annual home maintenance/repairs or the costs of home
            improvements. To see how much home you can afford including these
            costs, take a look at the{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/how-much-house-can-I-afford/"
            >
              Better home affordability calculator
            </a>
            .
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Fun fact:{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/how-to-calculate-property-tax-on-a-house/"
            >
              Property tax rates
            </a>{" "}
            are extremely localized, so two homes of roughly the same size and
            quality on either side of a municipal border could have very
            different tax rates. Buying in an area with a lower property tax
            rate may make it easier for you to afford a higher-priced home.
          </p>
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            Do you know your property tax rate?
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            While exact property tax rates vary by county, it can be helpful to
            look at taxes on the state level to get an idea for taxes in your
            state. Here’s a helpful chart from{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="https://www.forbes.com/sites/andrewdepietro/2023/09/01/property-taxes-by-state-a-breakdown-of-the-highest-and-lowest-property-taxes-by-state"
            >
              Forbes
            </a>{" "}
            breaking down the Census Bureau’s 2021 American Community Survey
            5-year estimate:
          </p>
          <div className="my-3xl">
            <div className="relative pointer group w-full h-full overflow-scroll">
              <table className="min-w-full border border-successAccent table-auto clip-inset-round">
                <thead className="">
                  <tr>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-medium">
                        State
                      </p>
                    </th>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-medium">
                        Median Effective Property Tax Rate
                      </p>
                    </th>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-medium">
                        Mean Effective Property Tax Rate
                      </p>
                    </th>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-medium">
                        Median Home Value
                      </p>
                    </th>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-medium">
                        Median Property Taxes Paid
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-successBackground">
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AL
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.41%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.40%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $157,100
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $646
                      </p>
                    </td>
                  </tr>
                  <tr className="even:bg-successBackground">
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AK
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        1.23%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        1.04%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $282,800
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $3,464
                      </p>
                    </td>
                  </tr>
                  <tr className="even:bg-successBackground">
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AZ
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.62%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.63%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $265,600
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $1,648
                      </p>
                    </td>
                  </tr>
                  <tr className="even:bg-successBackground">
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AR
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.62%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.64%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $142,100
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $878
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="hidden md:group-hover:block absolute w-full h-full bg-black opacity-25 top-0 left-0"></div>
              <button className="rounded-md leading-body text-base text-center font-medium select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-10 h-3xl w-auto hidden md:group-hover:block left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 absolute">
                See all states
              </button>
            </div>
            <button className="rounded-md leading-body text-base text-center font-medium select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-interactivePrimary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-interactivePrimary px-10 h-3xl block md:hidden mt-4 w-full">
              See all states
            </button>
          </div>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl  md:tracking-tight">
            How is Better’s mortgage calculator different?
          </h2>
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            This mortgage calculator shows your payments with taxes and
            insurance
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The property taxes you contribute are used to finance the services
            provided by your local government to the community. These services
            encompass schools, libraries, roads, parks, water treatment, police,
            and fire departments. Even after your mortgage has been fully paid,
            you will still need to pay property taxes. If you neglect your
            property taxes, you run the risk of losing your home to your local
            tax authority.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Your lender will usually require you to have homeowners insurance
            while you are settling your mortgage. This is a common practice
            among lenders because they understand that nobody wants to continue
            paying a mortgage on a home that is been damaged or destroyed.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Here is an interesting fact: Once you fully own your home, the
            choice to maintain homeowners insurance is entirely up to you.
            However, to ensure your home is protected against damages caused by
            fires, lightning strikes, and natural disasters that are common in
            your area , it is highly recommended to keep it. Therefore, always
            factor in these costs when using a Mortgage Calculator .
          </p>
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            This mortgage calculator shows your mortgage costs with PMI
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            PMI, an abbreviation for private mortgage insurance, aids potential
            homeowners in qualifying for a mortgage without the necessity of a
            20% down payment. By opting for a lower down payment and choosing a
            mortgage with PMI, you can purchase a home sooner, begin accruing
            equity, and keep cash available for future needs. This can all be
            calculated using this Mortgage Calculator.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Choosing a mortgage with PMI is a popular option:{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="https://cdn.nar.realtor/sites/default/files/documents/2021-07-realtors-confidence-index-08-23-2021.pdf"
            >
              71% of first-time homebuyers
            </a>{" "}
            had a down payment of less than 20% in July 2021.{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="https://fortune.com/2021/08/31/down-payment-on-a-house-how-much-money-to-put-down"
            >
              In 2020, the median down payment for first-time homebuyers was
              just 7%, and it hasn’t risen above 10% since 1989.
            </a>
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            PMI is automatically removed from conventional mortgages once your
            home equity reaches 22%. Alternatively, you can request the removal
            of PMI once you have accumulated at least 20% home equity.
          </p>
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            This mortgage calculator includes HOA fees
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Homeowners association (“HOA”) fees are typically charged directly
            by a homeowners association, but as HOA fees come part and parcel
            with condos, townhomes, and planned housing developments, they’re an
            essential factor to consider when calculating your mortgage costs.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Homes that share structural elements, such as roofs and walls, or
            community amenities like landscaping, pools, or BBQ areas, often
            require homeowners to pay HOA fees for the maintenance of these
            shared features. It is important to factor in these costs during
            your budget planning stage, especially considering that HOA fees
            typically increase annually. HOAs may also charge additional fees
            known as ‘special assessments’ to cover unexpected expenses from
            time to time.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl  md:tracking-tight">
            How to reduce your monthly mortgage payments?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The lower the purchase price of the home, the lower your loan amount
            will be. But if the seller is less than willing to cut you a deal,
            you have other options.
          </p>
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            Extend the length of your mortgage
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The more time you have to pay off the mortgage, the less each
            monthly mortgage payment will be. (In lender-speak, ‘extending the
            length of your mortgage’ is known as ‘increasing your loan term’.)
            This is why people often choose a 30-year fixed rate mortgage over
            one with a 15- or 20-year term.
          </p>
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            Increase your down payment
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The smaller the amount of your mortgage, the smaller your monthly
            mortgage payments will be. If you’re able to put at least 20% of the
            home price towards your{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/how-much-should-you-put-down-on-a-house/"
            >
              down payment
            </a>
            , you’ll be able to avoid PMI (private mortgage insurance). Even if
            you can’t afford a complete 20% down payment, boosting your down
            payment will help you get PMI removed sooner. In fact, boosting your
            down payment by 5% can lower your monthly PMI fees.
          </p>
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            Get a lower interest rate
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Increasing your down payment can be one way to help you qualify for
            a lower interest rate. The amount of your down payment compared to
            the total amount of the loan is called your{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/3-most-important-numbers-mortgage-application/"
            >
              loan-to-value ratio (LTV)
            </a>
            .
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Depending on your loan amount, a lower LTV may increase the
            likelihood of you being offered a low interest rate. If you intend
            on keeping your home for a while, you could consider buying{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/points-credits-and-how-to-decide-if-theyre-right-for-you/"
            >
              points
            </a>{" "}
            to reduce your interest rate. Buying points essentially means you
            agree to pay more upfront costs in exchange for a lower monthly
            payment.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            If you think you may sell or refinance the home in the first 5-10
            years of the mortgage, you could consider an{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/so-youre-considering-an-adjustable-rate-mortgage/"
            >
              adjustable-rate mortgage (ARM)
            </a>
            . An ARM offers a lower fixed interest rate for a set introductory
            period—typically 5, 7, or 10 years. Once the set introductory period
            ends, the interest rate adjusts (interest rate may increase after
            consummation). The introductory interest rate for ARMs is typically
            lower than the interest rate for a conventional fixed-rate mortgage
            which could make it a great way to save on interest if you know you
            won’t keep the mortgage for long.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            If you’re not planning on buying a home for a while, improving your
            credit score is a tried and true way of increasing your chances of
            qualifying for a lower interest rate. By reducing your
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/3-most-important-numbers-mortgage-application/"
            >
              debt-to-income ratio (DTI)
            </a>
            , lenders will see that you comfortably afford your mortgage and may
            be more willing to offer a lower interest rate.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl  md:tracking-tight">
            How much home can I afford?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Once again, the easiest way to do this is with a calculator! To know
            if a home is in your budget, try out our{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/how-much-house-can-I-afford/"
            >
              home affordability calculator
            </a>
            . This calculator will take a few inputs from you, like income and
            savings, and let you know the maximum amount of home you can afford.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl  md:tracking-tight">
            Next steps to buying a house
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            There are{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/steps-to-buying-a-house/"
            >
              8 steps to buying a house
            </a>{" "}
            and by using this calculator you’ve completed step 2 (calculating
            your home affordability) and maybe even step 1 (getting your
            finances in order).
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The next step is getting pre-approved. A mortgage pre-approval with
            Better Mortgage takes as little as 3-minutes and doesn’t impact your
            credit score. It’s a free, no-commitment way to see how much home
            you can buy, the mortgages you qualify for, and the range of
            interest rates you’ll be offered.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            If you’re ready to buy a home now, our{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/content/the-definitive-home-buying-checklist/"
            >
              definitive home buying checklist
            </a>{" "}
            can walk you through everything you need to know to get the home you
            want. With your Better Mortgage pre-approval letter in hand, you’ll
            be able to show sellers and real estate agents that you mean
            business—giving you an edge over homebuyers that don’t have this
            kind of proof that they’re financially ready to purchase. And by
            working with an agent from Better Real Estate and funding with
            Better Mortgage, you’ll save $2,000 on closing costs, and save up to
            $8,200 on average over the life of your loan.**
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <section>
            <div>
              <h2 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl  md:tracking-tight">
                More resources
              </h2>
              <div className="flex flex-col justify-between gap-12 pt-[36px] md:flex-row">
                <div className="rounded-md px-10 py-6 border border-strokeDivider flex-1">
                  <FileCheck2 className="text-interactivePrimary" />
                  {/* <Image
                    alt="Get pre-approved to see how much you can borrow"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    src="https://media.better.com/better-com/mortgage-calculator/doc-correct.svg"
                  /> */}
                  <p className="font-normal leading-body m-0 p-0 text-left mt-4 text-[20px] text-interactiveForegroundSecondary">
                    <span>Get pre-approved to see how much you can borrow</span>
                  </p>
                  <a
                    className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-2 mt-4 font-medium no-underline hover:underline"
                    href="/preapproval/nxt-purchase?utm_source=website&utm_medium=webpage&utm_campaign=calculator&utm_content=mortgage-calculator"
                  >
                    Get started →
                  </a>
                  <p className="font-normal leading-body m-0 p-0 text-left text-xs text-textSecondary">
                    Won’t impact your credit
                  </p>
                </div>
                <div className="rounded-md px-10 py-6 border border-strokeDivider flex-1">
                  <TrendingDown className=" text-interactivePrimary" />
                  {/* <Image
                    alt="See today’s rates in your area"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    src="https://media.better.com/better-com/mortgage-calculator/downtrend.svg"
                  /> */}
                  <p className="font-normal leading-body m-0 p-0 text-left mt-4 text-[20px] text-interactiveForegroundSecondary">
                    <span>See today’s rates in your area</span>
                  </p>
                  <a
                    className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-2 mt-4 font-medium no-underline hover:underline"
                    href="/mortgage-rates"
                  >
                    See rates
                  </a>
                </div>
                <div className="rounded-md px-10 py-6 border border-strokeDivider flex-1">
                  <Calculator className="text-interactivePrimary" />
                  {/* <Image
                    alt="Find out your max homebuying budget"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    src="https://media.better.com/better-com/mortgage-calculator/calculator.svg"
                  /> */}
                  <p className="font-normal leading-body m-0 p-0 text-left mt-4 text-[20px] text-interactiveForegroundSecondary">
                    <span>Find out your max homebuying budget</span>
                  </p>
                  <a
                    className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-2 mt-4 font-medium no-underline hover:underline"
                    href="/how-much-house-can-i-afford"
                  >
                    Try our mortgage calculator →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="pb-lg m-auto max-w-screen-2xl justify-between px-6 md:px-14">
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
            *See{" "}
            <a
              className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary"
              href="/faq/rates/whats-the-fine-print-better-real-estate/"
            >
              Better Real Estate discount terms and conditions
            </a>
            .
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
            **The average lifetime savings estimate is based on a comparison of
            the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year
            fixed-rate mortgage product with Better Mortgage’s own offered rate
            for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is
            based on conventional, conforming fully-amortizing home purchase
            loans for borrowers with a loan-to-value of 80 percent and with
            excellent credit. Better Mortgage’s offered rate is based on pricing
            output for a 30-year fixed-rate mortgage product with a 30-day lock
            period for a single-family, owner-occupied residential property and
            a borrower with excellent (760 FICO) credit and a loan-to-value
            ratio of 80 percent. Individual savings could vary based on current
            market rates, property type, loan amount, loan-to-value, credit
            score, debt-to-income ratio and other variables.
          </p>
        </section>
      </div>
    </>
  );
}

export default MonthlyBreakdown;
