export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose text-muted-foreground dark:prose-invert text-sm">
      {children}
    </div>
  );
}
