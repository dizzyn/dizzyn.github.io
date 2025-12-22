import Head from "next/head";
import CVContent from "./components/CVContent";

export default function PDFVersion() {
  return (
    <>
      <Head>
        <title>Tom Randus &gt; Staff Software Engineer Resume</title>
        <meta
          name="description"
          content="Tom Randus - Staff Software Engineer specializing in TypeScript, React, GraphQL Federation, AI Agents, AppSec, and Accessibility"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="bg-white text-slate-800 min-h-screen">
        <CVContent />
      </div>
    </>
  );
}
