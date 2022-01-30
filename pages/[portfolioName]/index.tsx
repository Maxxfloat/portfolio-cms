import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { get } from "component/modules/remote";
import Headline from "component/Headline";

const UserPage: React.FC = () => {
  const router = useRouter();
  const { portfolioName } = router.query;
  const [pageDetail, setPageDetail] = React.useState(null);

  React.useEffect(() => {
    const res: Promise<any> = get("/userPage", {
      portfolioName,
    });
    if (!res) router.push("/");
    setPageDetail(res);
    return () => {};
  }, []);

  return (
    <div>
      <Head>
        <title>{portfolioName}</title>
      </Head>
      <Headline {...pageDetail.headline} />
    </div>
  );
};

export default UserPage;
