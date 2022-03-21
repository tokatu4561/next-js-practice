import Link from "next/link";
import { Logo } from "./Logo";

export const MainNavigation = () => {
  return (
    <header>
      <Link href="/">
        <Logo></Logo>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
