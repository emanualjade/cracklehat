import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import styles from "./nav.module.css";
const Nav = () => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <ul className={styles.container}>
      <li className={cn(styles.item, category === undefined ? styles.active : null)}>
        <Link href="/">
          <a>New</a>
        </Link>
      </li>
      <li
        className={cn(styles.item, category === "code" ? styles.active : null)}
      >
        <Link href="/category/code">
          <a>Code</a>
        </Link>
      </li>
      <li
        className={cn(
          styles.item,
          category === "photography" ? styles.active : null
        )}
      >
        <Link href="/category/photography">
          <a>Photography</a>
        </Link>
      </li>
      <li
        className={cn(styles.item, category === "music" ? styles.active : null)}
      >
        <Link href="/category/music">
          <a>Music</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
