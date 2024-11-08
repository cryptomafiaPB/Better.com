"use client";
import React, { useCallback, useEffect, useState } from "react";

function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState<number>(300000);
  const [downPayment, setDownPayment] = useState<number>(10000);
  const [downPaymentPercentage, setDownPaymentPercentage] =
    useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [pinCode, setPinCode] = useState<number>(411001);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [sliderStep, setSliderStep] = useState<number>(8);

  // Function to calculate monthly payment
  const calculateMonthlyPayment = useCallback(() => {
    const loanAmount = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (loanAmount <= 0 || monthlyInterestRate <= 0) return 0;

    // Formula for monthly mortgage payment
    const monthlyPayment =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return isNaN(monthlyPayment) || !isFinite(monthlyPayment)
      ? 0
      : monthlyPayment;
  }, [homePrice, downPayment, interestRate, loanTerm]);

  // Update the monthly payment whenever home price, down payment, interest rate, or loan term changes
  useEffect(() => {
    const payment = calculateMonthlyPayment();
    setMonthlyPayment(payment);
  }, [homePrice, downPayment, interestRate, loanTerm, calculateMonthlyPayment]);
  return (
    <section className="bg-successBackground py-16">
      <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
        <div className="flex·flex-col·justify-between·gap-x-6">
          <div className="flex-1">
            <h1 className="font-bold text-textPrimary leading-heading m-0 p-0 w-auto text-2xl  tracking-tight md:tracking-tighter sm:text-5xl">
              Mortgage calculator
            </h1>
            <p className="font-normal leading-normal m-0 p-0 text-left text-base my-6 pb-4 text-textSecondary lg:max-w-3xl">
              Our mortgage calculator includes key factors like homeowners
              association fees, property taxes, and private mortgage insurance
              (PMI). Get the whole picture and calculate your total monthly
              payment.
            </p>
            <div className="mb-6 flex w-full items-end gap-4">
              <div className="grow">
                <div className="w-full max-w-[300px]">
                  <label className="leading-normal m-0 p-0 text-left text-textPrimary font-bold mb-4 block text-sm md:text-base">
                    Home price
                  </label>
                  <div className="z-0 relative w-full text-lg md:text-[40px]">
                    <div className="p-1 relative rounded-md bg-white w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-16 lg:h-4xl">
                      <div
                        aria-hidden="true"
                        data-testid="input-icon-box"
                        className="top-[20px] absolute ease-in-out duration-300 transition-all font-bold  z-10 text-xl lg:text-3xl w-6 h-6 flex items-center justify-center lg:top-[30px] left-2"
                      >
                        $
                      </div>
                      <input
                        data-qa="home-price"
                        name="home-price"
                        type="tel"
                        data-labelalign="top"
                        id="input-home-price"
                        aria-invalid="false"
                        className="text-left relative outline-none border-none rounded-sm px-3 pb-none text-default font-bold w-full h-full box-border pl-[32px] text-xl lg:text-3xl"
                        value={homePrice}
                        onChange={(e) => {
                          const newHomePrice = Number(e.target.value);
                          setHomePrice(newHomePrice);
                          setDownPayment(
                            (newHomePrice * downPaymentPercentage) / 100
                          );
                          console.log(newHomePrice);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow">
                <div className="w-full max-w-[300px]">
                  <p className="leading-normal m-0 p-0 text-left text-textPrimary font-bold mb-4 block text-sm md:text-base">
                    Monthly payment
                  </p>
                  <p
                    className="leading-normal m-0 p-0 text-left my-6 flex h-[30px] items-baseline overflow-hidden text-xl font-bold text-textPrimary md:my-none md:h-2xl lg:h-4xl lg:text-3xl"
                    data-qa="monthly-payment"
                  >
                    ${monthlyPayment.toFixed(2).toLocaleString()}/mo
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                <a
                  className="rounded-md leading-normal text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-16 w-auto inline-flex items-center justify-center min-w-[220px]"
                  href="/preapproval/nxt-purchase"
                >
                  Get pre-approved
                </a>
              </div>
            </div>
            <div className="relative mx-6 mt-8 mb-6">
              <input
                type="range"
                min="50000"
                max="3000000"
                step="100"
                className="bg-textPrimary  rounded-md w-full cursor-pointer appearance-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 h-1 [&::-webkit-slider-thumb]:bg-textPrimary [&::-webkit-slider-thumb]:hover:bg-textPrimary [&::-webkit-slider-thumb]:active:bg-black"
                id="min-and-max-range-slider-usage"
                value={homePrice}
                onChange={(e) => {
                  //   console.log(e.target.step);
                  setSliderStep(
                    ((Number(e.target.value) - 50000) / (3000000 - 50000)) * 100
                  );
                  const newHomePrice = Number(e.target.value);
                  setHomePrice(newHomePrice);
                  setDownPayment((newHomePrice * downPaymentPercentage) / 100);
                  console.log(newHomePrice);
                }}
                // style={{`backgroundImage: ${sliderStep}px`}}
                style={{
                  backgroundImage: `linear-gradient(to right, rgb(41, 43, 41) ${sliderStep}%, rgb(200, 201, 198) ${sliderStep}%, rgb(200, 201, 198) 100%)`,
                }}
                // style={"bg-[linear-gradient(to_right,rgb(41,43,41)_8.47458%,rgb(200,201,198)_8.47458%,rgb(200,201,198)_100%)]"}
              />
            </div>
            <div className="mt-xl hidden md:block">
              <div className="gap-x-28 gap-y-px lg:flex">
                <div className="flex flex-col md:flex-row flex-1 mb-4 gap-4">
                  <div className="flex-1">
                    <div className="z-0 relative">
                      <div className="p-1 relative rounded-md bg-white w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-16">
                        <label
                          id="5-label"
                          className="leading-normal text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-10 top-[5px] text-xs font-normal"
                        >
                          ZIP code
                        </label>
                        <input
                          type="tel"
                          data-labelalign="top"
                          id="input-5"
                          className="text-left px-3 pb-none pt-[10px] relative outline-none border-none rounded-sm  pb-none text-default font-bold w-full h-full box-border"
                          value={pinCode}
                          onChange={(e) => {
                            setPinCode(Number(e.target.value));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1">
                    <div className="w-9/12 ">
                      <div className="z-0 relative [&>div:first-of-type]:rounded-r-none">
                        <div className="p-1 relative rounded-md bg-white w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-16">
                          <label
                            id="downpayment-label"
                            className="leading-normal text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-10 top-[5px] text-xs font-normal"
                          >
                            Down payment
                          </label>
                          <div
                            aria-hidden="true"
                            data-testid="input-icon-box"
                            className="mr-2 absolute ease-in-out duration-300 transition-all font-bold z-10 w-6 h-6 flex items-center justify-center top-[24px] left-xs"
                          >
                            $
                          </div>
                          <input
                            data-qa="downpayment"
                            name="downpayment"
                            type="tel"
                            data-labelalign="top"
                            id="input-downpayment"
                            aria-invalid="false"
                            className="text-left px-3 pb-none pl-[32px] pt-[10px] relative outline-none border-none rounded-sm  pb-none text-default font-bold w-full h-full box-border"
                            value={downPayment}
                            onChange={(e) => {
                              const newDownPayment = Number(e.target.value);
                              setDownPayment(newDownPayment);
                              setDownPaymentPercentage(
                                (newDownPayment / homePrice) * 100
                              );
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-3/12 min-w-3xl">
                      <div className="z-0 relative flex [&>div:first-of-type]:rounded-l-none [&>div:first-of-type]:border-l-0">
                        <div className="p-1 relative rounded-md bg-white w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-16">
                          <div
                            aria-hidden="true"
                            data-testid="input-icon-box"
                            className="mr-2 top-[20px] absolute ease-in-out duration-300 transition-all font-bold  z-10 w-6 h-6 flex items-center justify-center right-2"
                          >
                            %
                          </div>
                          <input
                            data-qa="down-payment-ratio"
                            data-labelalign="top"
                            id="input-6"
                            className="text-left px-3 pb-none relative outline-none border-none rounded-sm pb-none text-default font-bold w-full h-full box-border"
                            value={downPaymentPercentage}
                            onChange={(e) => {
                              const percentage = Number(e.target.value);
                              setDownPaymentPercentage(percentage);
                              setDownPayment((homePrice * percentage) / 100);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row flex-1 mb-4 gap-4">
                  <div className="flex-1">
                    <div className="z-0 relative">
                      <div className="p-1 relative rounded-md bg-white w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-16">
                        <label
                          id="7-label"
                          className="leading-normal text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-10 top-[5px] text-xs font-normal"
                        >
                          Interest rate
                        </label>
                        <div
                          aria-hidden="true"
                          data-testid="input-icon-box"
                          className="mr-2 absolute ease-in-out duration-300 transition-all font-bold  z-10 w-6 h-6 flex items-center justify-center top-[24px] right-2"
                        >
                          %
                        </div>
                        <input
                          data-labelalign="top"
                          id="input-7"
                          className="text-left px-3 pb-none pt-[10px] relative outline-none border-none rounded-sm  pb-none text-default font-bold w-full h-full box-border"
                          value={interestRate}
                          onChange={(e) => {
                            setInterestRate(Number(e.target.value));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative w-full">
                      <label className="leading-normal m-0 p-0 text-left text-interactiveForegroundMuted absolute left-4 origin-top-left transition-all duration-300 ease-in-out z-10 top-[7px] text-xs font-normal">
                        Length of loan
                      </label>
                      <select
                        id="8"
                        value={loanTerm}
                        onChange={(e) => {
                          setLoanTerm(Number(e.target.value));
                        }}
                        className="truncate font-bold text-interactiveForegroundTertiary appearance-none bg-white outline-none rounded-md border border-solid border-strokeBorder px-4 w-full h-16 p-1 pb-none pt-4 duration-300 ease-in-out z-0 focus:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] focus:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_3px_inset] hover:shadow-accentBorderSecondary flex-1"
                      >
                        <option value="30" label="30 years">
                          30 years
                        </option>
                        <option value="20" label="20 years">
                          20 years
                        </option>
                        <option value="15" label="15 years">
                          15 years
                        </option>
                      </select>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-2"
                      >
                        <path d="M7 9.5L12 14.5L17 9.5H7Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <div>
                <a
                  className="rounded-md leading-normal text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-16 w-auto inline-flex items-center justify-center min-w-[220px]"
                  href="/preapproval/nxt-purchase"
                >
                  Get pre-approved
                </a>
              </div>
              <button className="rounded-md leading-normal text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-interactivePrimary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-interactivePrimary px-xl h-16 mt-6 flex w-full items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus "
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>{" "}
                Add details
              </button>
              <div
                className="p-base bg-backgroundPrimary px-6 shadow-6 fixed left-0 top-[70px] w-full z-[10000] invisible opacity-0"
                data-qa="mobile-header"
              >
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <p className="leading-normal m-0 p-0 text-left text-textSecondary text-sm mb-xs font-bold">
                      Home price
                    </p>
                    <p
                      className="leading-normal m-0 p-0 text-base rounded-md bg-interactiveForegroundSecondary py-xs text-center font-bold text-textInversePrimary"
                      data-qa="mobile-header-home-price"
                    >
                      ${homePrice.toFixed(2).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="leading-normal m-0 p-0 text-left text-textSecondary text-sm mb-xs font-bold">
                      Monthly payment
                    </p>
                    <p
                      className="leading-normal m-0 p-0 text-left text-textSecondary text-base pt-xs font-bold"
                      data-qa="mobile-header-monthly-payment"
                    >
                      ${monthlyPayment.toFixed(2).toLocaleString()}/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MortgageCalculator;
