import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <div>
      <h1>The Detail page</h1>
      <h3>{newsId}</h3>
    </div>
  );
}

export default DetailPage;
