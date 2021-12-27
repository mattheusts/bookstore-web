import { ReactChild } from 'react';

interface IHeaderProp {
  // title: string;
  children: ReactChild;
}

function Header({ children }: IHeaderProp) {
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}

export { Header };
