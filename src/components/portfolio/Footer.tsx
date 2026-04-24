export const Footer = () => {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="container-px mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-gradient-accent grid place-items-center text-primary-foreground font-bold text-xs">
            A
          </span>
          <span>© {new Date().getFullYear()} Aswin. All rights reserved.</span>
        </div>
        <div className="text-mono text-xs">
          Designed & built with care · Chennai, IN
        </div>
      </div>
    </footer>
  );
};
