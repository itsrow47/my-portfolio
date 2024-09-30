import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h3: ({ children }) => (
      <h3 style={{ color: "red", fontSize: "48px" }}>{children}</h3>
    ),
    ...components,
  };
}
