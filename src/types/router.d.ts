interface IRoute {
  path: string;
  element: () => JSX.Element;
  layout: ({ children: ReactNode }) => JSX.Element;
}

export default IRoute;
