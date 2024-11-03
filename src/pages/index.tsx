import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";
import Banner from "@site/src/components/Banner";
import Functionalities from "@site/src/components/Functionalities";
import SSGList from "@site/src/components/SSGList";
import KeyFeature from "@site/src/components/KeyFeature";

import styles from "./homepage/homepage.module.css";
import content from "./homepage/homepage.content.json";

export default function Home(): JSX.Element {
  return (
    <Layout title={content.meta.title} description={content.meta.description}>
      <Hero {...content.hero} />

      <main className={styles.main}>
        <SSGList {...content.ssgList} />

        <div className={styles.keyFeatures}>
          {content.keyFeatures.map((feature, index) => (
            <KeyFeature key={index} {...feature} />
          ))}
        </div>

        <Functionalities {...content.functionalities} />

        <Banner {...content.banner} />
      </main>
    </Layout>
  );
}
