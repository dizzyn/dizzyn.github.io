import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Randus &gt; Resume</title>
        <meta
          name="description"
          content="Tom Randus - Full-Stack Software Engineer Resume"
        />
        <meta name="googlebot" content="noindex" />
        <meta property="og:title" content="resume @ Tomas Randus" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <div className="max-w-cv mx-auto bg-white text-black">
        <div className="no-print text-left text-gray-400 mb-4">
          <div className="text-gray-400">
            [
            <a
              href="./tom-randus-cv.pdf"
              className="text-gray-400 hover:border-gray-400"
            >
              Download as PDF
            </a>
            ]
          </div>
        </div>

        <div className="pt-6 pb-2 border-b-4 border-black clearfix">
          <div className="float-left w-2/3">
            <h1 className="text-cv-xl text-center leading-none p-0 m-0">
              Tomas Randus
            </h1>
            <h2 className="text-cv-lg text-center italic py-1 m-0">
              Full-Stack Software Engineer
            </h2>
          </div>

          <div className="float-left w-1/3">
            <br />
            <table>
              <tbody>
                <tr>
                  <th className="text-right text-cv-blue pr-1 leading-relaxed">
                    Email:
                  </th>
                  <td className="text-cv-gray leading-relaxed">
                    <a
                      href="mailto:tom.randus@gmail.com"
                      className="text-cv-gray hover:border-cv-gray"
                    >
                      tom.randus@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-right text-cv-blue pr-1 leading-relaxed">
                    Phone:
                  </th>
                  <td className="text-cv-gray leading-relaxed">
                    +420 724 023 901
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="clearfix">
          <div className="float-left w-2/3 mr-5" id="experience">
            <h3 className="border-b-2 border-black mb-2 pb-1">
              Work experience
            </h3>
            <ul className="list-none m-0 p-0 mr-5">
              <li className="mb-4">
                <div className="float-left w-1/5 text-lg text-left mt-1">
                  2022<span className="text-cv-gray">...</span>
                </div>
                <div className="ml-[20%] pl-5">
                  <h4 className="text-xl uppercase m-0 mb-1 pt-1">Invicti</h4>
                  <h5 className="text-xl text-cv-blue m-0 mb-1">
                    Staff Software Engineer
                  </h5>
                  <div className="text-sm leading-tight text-cv-gray mb-4 block">
                    <ul className="m-0 p-0">
                      <li className="list-disc list-inside text-sm leading-tight">
                        Product development – Typescript, Vue, Federated GraphQL
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        Agile Leadership
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        Accessibility (WCAG)
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="float-left w-1/5 text-lg text-left mt-1">
                  2019 &dash; <span className="text-cv-gray">2022</span>
                </div>
                <div className="ml-[20%] pl-5">
                  <h4 className="text-xl uppercase m-0 mb-1 pt-1">Citrix</h4>
                  <h5 className="text-xl text-cv-blue m-0 mb-1">
                    Staff Software Engineer
                  </h5>
                  <div className="text-sm leading-tight text-cv-gray mb-4 block">
                    <ul className="m-0 p-0">
                      <li className="list-disc list-inside text-sm leading-tight">
                        React, GraphQL, JS-&gt;TS transition
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        Tooling for E2E testing (playwright)
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        Software Development Trainings
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="float-left w-1/5 text-lg text-left mt-1">
                  2017 &dash; <span className="text-cv-gray">2019</span>
                </div>
                <div className="ml-[20%] pl-5">
                  <h4 className="text-xl uppercase m-0 mb-1 pt-1">
                    Sapho (acquired by Citrix↑)
                  </h4>
                  <h5 className="text-xl text-cv-blue m-0 mb-1">
                    Senior Software Engineer
                  </h5>
                  <div className="text-sm leading-tight text-cv-gray mb-4 block">
                    <p className="my-2">
                      I was member of a small development team for Business
                      Inteligence Services for B2B. Tech stack:
                      React/JS/TS/Cordova...
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="float-left w-1/5 text-lg text-left mt-1">
                  2014 &dash; <span className="text-cv-gray">2017</span>
                </div>
                <div className="ml-[20%] pl-5">
                  <h4 className="text-xl uppercase m-0 mb-1 pt-1">
                    Radio Free Europe / Radio Liberty
                  </h4>
                  <h5 className="text-xl text-cv-blue m-0 mb-1">
                    Lead Front-end Developer
                  </h5>
                  <div className="text-sm leading-tight text-cv-gray mb-4 block">
                    <p className="my-2">
                      My role within the organization was to define and develop
                      JS and CSS for a big news site content delivery platform.
                    </p>
                    <p className="my-2">
                      The platform supports 60 languages across 200 countries.
                      It contains right-to-left and up-to-down character sets
                      (Arabic, Chinese...). We have had weekly ~3.5m unique
                      visitors.
                    </p>
                    <p className="my-2">My responsibilities:</p>
                    <ul className="m-0 p-0">
                      <li className="list-disc list-inside text-sm leading-tight">
                        Javascript (React, Redux etc.), Sass
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        System architecture
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        Leadership
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="float-left w-1/5 text-lg text-left mt-1">
                  2013 &dash; 2014
                </div>
                <div className="ml-[20%] pl-5">
                  <h4 className="text-xl uppercase m-0 mb-1 pt-1">
                    Summit Media
                  </h4>
                  <h5 className="text-xl text-cv-blue m-0 mb-1">
                    Lead Front-end Developer
                  </h5>
                  <div className="text-sm leading-tight text-cv-gray mb-4 block">
                    <p className="my-2">My role:</p>
                    <ul className="m-0 p-0">
                      <li className="list-disc list-inside text-sm leading-tight">
                        eCommerce solutions (custom development)
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        WYSIWYG editor for Magento eCommerce solutions
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        Internal development trainings
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="float-left w-1/5 text-lg text-left mt-1">
                  2011 &dash; 2012
                </div>
                <div className="ml-[20%] pl-5">
                  <h4 className="text-xl uppercase m-0 mb-1 pt-1">
                    Unity Mobile
                  </h4>
                  <h5 className="text-xl text-cv-blue m-0 mb-1">
                    Senior Product Manager
                  </h5>
                  <div className="text-sm leading-tight text-cv-gray mb-4 block">
                    <p className="my-2">
                      I have managed a product development of automated website
                      publishing tools for eCommerce.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="float-left w-1/5 text-lg text-left mt-1">
                  2009 &dash; 2011
                </div>
                <div className="ml-[20%] pl-5">
                  <h4 className="text-xl uppercase m-0 mb-1 pt-1">
                    Sanoma Media
                  </h4>
                  <h5 className="text-xl text-cv-blue m-0 mb-1">
                    Senior Product Manager
                  </h5>
                  <span className="text-sm leading-tight text-cv-gray mb-4 block">
                    Product management (Payment solutions, iPhone apps),
                    Education, Training
                  </span>
                </div>
              </li>
              <li className="mb-4">
                <div className="float-left w-1/5 text-lg text-left mt-1">
                  2004 &dash; 2007
                </div>
                <div className="ml-[20%] pl-5">
                  <h4 className="text-xl uppercase m-0 mb-1 pt-1">Wirenode</h4>
                  <h5 className="text-xl text-cv-blue m-0 mb-1">
                    Founder, CTO, Head of Product
                  </h5>
                  <div className="text-sm leading-tight text-cv-gray mb-4 block">
                    <p className="my-2">
                      As a co-founder of the company (6 empl.) I was there:
                    </p>
                    <ul className="m-0 p-0">
                      <li className="list-disc list-inside text-sm leading-tight">
                        CTO, Senior Java Developer
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        Product manager
                      </li>
                      <li className="list-disc list-inside text-sm leading-tight">
                        Business Development Manager
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="float-left w-1/5 text-lg text-left mt-1">
                  2002 &dash; 2004
                </div>
                <div className="ml-[20%] pl-5">
                  <h4 className="text-xl uppercase m-0 mb-1 pt-1">
                    Cleverlance
                  </h4>
                  <h5 className="text-xl text-cv-blue m-0 mb-1">
                    Senior Java Developer
                  </h5>
                  <span className="text-sm leading-tight text-cv-gray mb-4 block">
                    Various projects in the Banking, TELCO &amp; Game
                    development
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="float-left w-1/3">
            <div className="mb-6" id="summary">
              <h3 className="border-b-2 border-black mb-2 pb-1">About me</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="text-right text-cv-blue pr-1 leading-relaxed">
                      &star;:
                    </th>
                    <td className="text-cv-gray leading-relaxed">08-01-1981</td>
                  </tr>
                  <tr>
                    <th className="text-right text-cv-blue pr-1 leading-relaxed">
                      Location:
                    </th>
                    <td className="text-cv-gray leading-relaxed">
                      Prague/Remote
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-6" id="objective">
              <h3 className="border-b-2 border-black mb-2 pb-1">Objective</h3>
              <span className="text-cv-gray">
                Looking forward to work with you on great software projects.
              </span>
            </div>
            <div className="mb-6" id="education">
              <h3 className="border-b-2 border-black mb-2 pb-1">Education</h3>
              <span className="text-cv-gray text-lg">
                Master at Media Studies - Charles University &dash; 2019
              </span>
            </div>
            <div className="mb-6" id="membership">
              <h3 className="border-b-2 border-black mb-2 pb-1">Membership</h3>
              <ul className="m-0 p-0">
                <li className="m-0 p-0 list-disc list-inside text-base leading-snug text-cv-gray">
                  cesko.digital
                </li>
                <li className="m-0 p-0 list-disc list-inside text-base leading-snug text-cv-gray">
                  Czechitas (coach)
                </li>
                <li className="m-0 p-0 list-disc list-inside text-base leading-snug text-cv-gray">
                  TEDxPrague
                </li>
              </ul>
            </div>
            <div className="mb-6" id="reference">
              <h3 className="border-b-2 border-black mb-2 pb-1">Reference</h3>
              <span className="text-cv-gray text-lg">
                Available at LinkedIn:{" "}
                <a
                  href="http://www.linkedin.com/in/randus"
                  className="text-cv-gray hover:border-cv-gray"
                >
                  http://linkedin.com/in/randus
                </a>{" "}
                or ask me for direct contacts.
              </span>
            </div>
          </div>
        </div>

        <div className="clear-both" id="skills">
          <h3 className="border-b-2 border-black mb-2 pb-1">Skills</h3>
          <ul className="m-0 p-0">
            <li className="m-0 p-0 text-sm pb-1 align-middle list-none">
              <ul className="m-0 p-0">
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">Full Stack Programming</strong>{" "}
                  - I have been working in <em>Typescript/Javascript</em> for
                  years. I know the language, tools and libraries well. I have
                  extensive experience with huge codebases.
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">Product Management</strong> -
                  There is a period of product management in my work history, so
                  I understand value delivery, release management, UX and UX
                  research.
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">
                    Agile Leadership/Training
                  </strong>{" "}
                  - I have long experience Agile methodology and culture, so I
                  can lead a team and also help with Agile transformation at
                  every company level.
                </li>
              </ul>
            </li>
            <li className="m-0 p-0 text-sm pb-1 align-middle list-none">
              <p className="my-1 text-lg py-1"></p>
              <h4 className="my-4 text-xl text-cv-blue">My Favorite Stack</h4>
              <ul className="m-0 p-0">
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">React/Vue</strong> - I like the
                  reactive UI combined with server side rendering
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">GraphQL</strong> - I have deep
                  experience with <em>Apollo</em>, <em>Nexus</em>... and also
                  know <em>GQL Federation</em>
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">
                    Next.js / Vite / Webpack
                  </strong>{" "}
                  - I know how to build secure and fast applications
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">Prisma.io</strong> - I can help
                  with projects powered by <em>Prisma</em> and <em>PgSQL</em> on
                  the server side.
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">Node.js</strong> - That is my
                  favorite runtime, what is yours?.
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">
                    Jest/Vitest + Playwright
                  </strong>{" "}
                  - I like these test tools, I can use them even in <em>BDD</em>{" "}
                  mode.
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">
                    Vercel/AWS/Heroku/Google Cloud
                  </strong>{" "}
                  - I can manage cloud environments and additional services (S3,
                  RDS, CloudFront, Neon...).
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">Sass+Playwright</strong> - I
                  know various styling approaches my preference is{" "}
                  <em>utility first</em>.
                </li>
              </ul>
            </li>
            <li className="m-0 p-0 text-sm pb-1 align-middle list-none">
              <h4 className="my-4 text-xl text-cv-blue">Additional skills</h4>
              <ul className="m-0 p-0">
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">Media Literacy</strong> – I am
                  interested in media products, concepts, business and the
                  future of the industry.
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">Learning</strong> – I am also
                  particularly interested in{" "}
                  <em>learning, gamified learning</em> and platform building{" "}
                  <em>micro-habits.</em>
                </li>
                <li className="m-0 p-0 list-none my-1 leading-tight text-cv-gray">
                  <strong className="text-black">eGovernment</strong> – I have
                  an overview of products, legislation and challenges in
                  simplifying the public sector.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
