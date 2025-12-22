import Head from "next/head";
import { useRouter } from "next/router";
import CVContent from "./components/CVContent";

export default function Home() {
  const router = useRouter();
  const basePath = router.basePath || "";

  return (
    <>
      <Head>
        <title>Tom Randus &gt; Staff Software Engineer Resume</title>
        <meta
          name="description"
          content="Tom Randus - Staff Software Engineer specializing in TypeScript, React, GraphQL Federation, AI Agents, AppSec, and Accessibility"
        />
        <meta name="googlebot" content="noindex" />
        <meta
          property="og:title"
          content="Staff Software Engineer @ Tomas Randus"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <div className="bg-white absolute inset-0 text-slate-800 overflow-y-auto">
        <CVContent showDownloadButton={true} basePath={basePath} />
      </div>
    </>
  );
}
