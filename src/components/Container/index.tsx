export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[991px]">{children}</div>
    </div>
  );
}
