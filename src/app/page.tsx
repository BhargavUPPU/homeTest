'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import Script from 'next/script';
import Features from "./component/public_layout/Features";
import CommunityImage from '../assets/images/community.svg';
import { useRouter } from "next/navigation";
function Home() {
  const router = useRouter();
  return (
    <div className="h-full">
      <div className="mb-6">
        <main>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="svg absolute hidden lg:block"
            style={{ height: "560px", width: "100%", zIndex: "-10", overflow: "hidden" }}
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="hsl(217, 102%, 99%)" offset="0%"></stop>
                <stop stopColor="hsl(217,88%, 93%)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
            ></path>
          </svg>
          <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="mt-12 lg:mt-0">
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-5">Modernizing HOA management<br /><span className="text-blue-600"> for the digital age.</span></h1>
                  <p className="text-xl mb-10 font-bold">30-Day Free Trial. No CC Required. Cancel Anytime.</p>
                  <a onClick={() => router.push("/auth/signup")} className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                  <a onClick={() => router.push("/#features")} className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                </div>
                <div className="mb-12 lg:mb-0">
                  <Image src={CommunityImage.src} alt="Community Image" height={500} width={600} />
                </div>
              </div>
            </div>
          </div>
          <div className="container my-5 px-6 mx-auto">
            <section className="mb-32 text-gray-800 text-center">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center">
                <div className="mb-12 lg:mb-0 relative">
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.Class1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
                    </path>
                  </svg>
                  <h5 className="text-lg font-medium text-blue-600 mb-4">5000+</h5>
                  <h6 className="font-medium text-gray-500">Components</h6>
                  <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                </div>

                <div className="mb-12 lg:mb-0 relative">
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
                  </svg>
                  <h5 className="text-lg font-medium text-blue-600 mb-4">490+</h5>
                  <h6 className="font-medium text-gray-500">Design blocks</h6>
                  <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                </div>

                <div className="mb-12 md:mb-0 relative">
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" />
                  </svg>
                  <h5 className="text-lg font-medium text-blue-600 mb-4">100+</h5>
                  <h6 className="font-medium text-gray-500">Templates</h6>
                  <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                </div>

                <div className="relative">
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="currentColor"
                      d="M320,32a32,32,0,0,0-64,0v96h64Zm48,128H16A16,16,0,0,0,0,176v32a16,16,0,0,0,16,16H32v32A160.07,160.07,0,0,0,160,412.8V512h64V412.8A160.07,160.07,0,0,0,352,256V224h16a16,16,0,0,0,16-16V176A16,16,0,0,0,368,160ZM128,32a32,32,0,0,0-64,0v96h64Z" />
                  </svg>
                  <h5 className="text-lg font-medium text-blue-600 mb-4">28</h5>
                  <h6 className="font-medium text-gray-500 mb-0">Plugins</h6>
                </div>
              </div>
            </section>
          </div>
          <Features />

          <div className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800" id="pricing">
              <h2 className="text-3xl font-bold text-center mb-6">Pricing</h2>

              <p className="text-center mb-12 text-gray-500">
                Where value meets affordability in HOA management.
              </p>

              <div className="grid lg:grid-cols-4 gap-6 xl:gap-x-12">
                <div className="mb-6 lg:mb-0">
                  <div className="block rounded-lg shadow-lg bg-white h-full">
                    <div className="p-6 border-b border-gray-300 text-center">
                      <p className="uppercase mb-4 text-sm">
                        <strong>0 - 50 units</strong>
                      </p>
                      <h3 className="text-2xl mb-6">
                        <strong>$ 40</strong>
                        <small className="text-gray-500 text-sm">/month</small>
                      </h3>

                      <button type="button"
                        className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                        style={{ backgroundColor: "hsl(0, 0%, 95%)" }} data-mdb-ripple="true" data-ripple-color="primary">
                        Buy
                      </button>
                    </div>
                    <div className="p-6">
                      <ol className="list-inside">
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Unlimited updates
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="mb-6 lg:mb-0">
                  <div className="block rounded-lg shadow-lg bg-white h-full">
                    <div className="p-6 border-b border-gray-300 text-center">
                      <p className="uppercase mb-4 text-sm">
                        <strong>51 - 150 units</strong>
                      </p>
                      <h3 className="text-2xl mb-6">
                        <strong>$ 90</strong>
                        <small className="text-gray-500 text-sm">/month</small>
                      </h3>

                      <button type="button"
                        className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                        style={{ backgroundColor: "hsl(0, 0%, 95%)" }} data-mdb-ripple="true" data-ripple-color="primary">
                        Buy
                      </button>
                    </div>
                    <div className="p-6">
                      <ol className="list-inside">
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Unlimited updates
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Git repository
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>npm installation
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="mb-6 lg:mb-0">
                  <div className="block rounded-lg bg-white h-full border border-blue-600">
                    <div className="p-6 border-b border-gray-300 text-center">
                      <p className="uppercase mb-4 text-sm">
                        <strong>151 - 300 units</strong>
                      </p>
                      <h3 className="text-2xl mb-6">
                        <strong>$ 170</strong>
                        <small className="text-gray-500 text-sm">/month</small>
                      </h3>

                      <button type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true" data-ripple-color="light">
                        Buy
                      </button>
                    </div>
                    <div className="p-6">
                      <ol className="list-inside">
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Unlimited updates
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Git repository
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>npm installation
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Code examples
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Premium snippets
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="mb-6 lg:mb-0">
                  <div className="block rounded-lg shadow-lg bg-white h-full">
                    <div className="p-6 border-b border-gray-300 text-center">
                      <p className="uppercase mb-4 text-sm">
                        <strong>301 - 500 units</strong>
                      </p>
                      <h3 className="text-2xl mb-6">
                        <strong>$ 190</strong>
                        <small className="text-gray-500 text-sm">/month</small>
                      </h3>

                      <button type="button"
                        className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                        style={{ backgroundColor: "hsl(0, 0%, 95%)" }} data-mdb-ripple="true" data-ripple-color="primary">
                        Buy
                      </button>
                    </div>
                    <div className="p-6">
                      <ol className="list-inside">
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Unlimited updates
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Git repository
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>npm installation
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Code examples
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Premium snippets
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Premium support
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                            className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                            </path>
                          </svg>Drag&amp;Drop builder
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
          <section className="mb-32 text-gray-800 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="envelope"
                    className="w-5 h-5 text-white"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    ></path>
                  </svg>
                </div>

                <h2 className="text-3xl font-bold mb-6">Subscribe to the newsletter</h2>
                <p className="text-gray-500 mb-5">We will write rarely and only high-quality content.</p>
                <div className="md:flex flex-row justify-center ">
                  <input
                    type="text"
                    className="form-control block w-96 px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Subscribe
                  </button>
                </div>
                <section id="contact" className="my-10">
                  <iframe src="https://www.cognitoforms.com/f/XWM05iTdp0adMzCEvWm3Nw/1" style={{ border: "0", width: "100%" }} height="603"></iframe>
                  <Script src="https://www.cognitoforms.com/f/iframe.js"></Script>
                </section>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

Home.unprotected = true;
export default Home;

