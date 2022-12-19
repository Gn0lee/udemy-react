import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href="/news/asd">this is spa</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
