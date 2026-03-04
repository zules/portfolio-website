export default function PageTitle({ title, id }) {
  return (
    <header className="flex w-full flex-col items-center justify-center py-5">
      <h2 id={id} className="font-display text-4xl font-black text-black">
        {title}
      </h2>
    </header>
  );
}