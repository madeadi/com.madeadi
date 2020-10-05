import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Made Adi (madɛ adi).</p>
        <p>
          I'm husband, father, and the founder of{" "}
          <a href="taksuteknologi.com" target="_blank">
            Taksu Teknologi.
          </a>
        </p>
      </section>
    </Layout>
  );
}
