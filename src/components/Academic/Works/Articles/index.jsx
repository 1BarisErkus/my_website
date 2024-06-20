// import { useEffect, useState } from "react";
import { Title } from "../../../../common/styled";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  // const [articles, setArticles] = useState([]);
  // const articlesImages = [
  //   "package.png",
  //   "gygy.png",
  //   "hat.png",
  //   "evolution.png",
  //   "constructor.png",
  // ];

  // const endpoint =
  //   "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@baris.erkus";

  // const readArticles = async () => {
  //   try {
  //     const response = await fetch(endpoint);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch articles.");
  //     }
  //     const result = await response.json();
  //     setArticles(result.items);
  //   } catch (error) {
  //     console.error("Error fetching articles:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   readArticles();
  // }, []);

  const articles = [
    {
      img: "gygy.gif",
      title:
        "Turkcell Gençlere Yatırım Geleceğe Yazılım: Front-End Bootcamp Hikayem",
      href: "https://medium.com/@baris.erkus/turkcell-gen%C3%A7lere-yat%C4%B1r%C4%B1m-gelece%C4%9Fe-yaz%C4%B1l%C4%B1m-front-end-bootcamp-hikayem-28e56a49b3b8",
    },
    {
      img: "package.gif",
      title: "NPM, PNPM, YARN, BUN BUNLAR NE ANLAMA GELİYOR, FARKLARI NELER?",
      href: "https://medium.com/@baris.erkus/npm-pnpm-yarn-bun-bunlar-ne-anlama-geli%CC%87yor-farklari-neler-c479bc478397",
    },
    {
      img: "publish.gif",
      title: "Nasıl NPM Paketi Yayınlanır?",
      href: "https://medium.com/@baris.erkus/nas%C4%B1l-npm-paketi-yay%C4%B1nlan%C4%B1r-03d9373203f3",
    },
    {
      img: "hat.gif",
      title: "Altı Şapkalı Düşünme Tekniği",
      href: "https://medium.com/@baris.erkus/alt%C4%B1-%C5%9Fapkal%C4%B1-d%C3%BC%C5%9F%C3%BCnme-tekni%C4%9Fi-47e20382ed87",
    },
    {
      img: "evolution.gif",
      title:
        "Yazılım Alanında Kendini Geliştirmek İsteyenlerin Bilmesi Gerekenler",
      href: "https://medium.com/@baris.erkus/yaz%C4%B1l%C4%B1m-alan%C4%B1nda-kendini-geli%C5%9Ftirmek-i%CC%87steyenlerin-bilmesi-gerekenler-fdf77d0e4ae1",
    },
    {
      img: "constructor.gif",
      title: "Constructor vs Static Constructor",
      href: "https://medium.com/@baris.erkus/constructor-vs-static-constructor-73a664162f76",
    },
  ];

  return (
    <>
      <section aria-labelledby="articles-title">
        <Title as="h2" id="articles-title">
          Articles
        </Title>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            img={article.img}
            title={article.title}
            href={article.href}
          />
        ))}
      </section>
    </>
  );
};

export default Articles;
