import { CardList } from "../molecules/CardList";

export const Card = ({ blog }) => {
  return (
    <main className="md:flex-flex2">
      <CardList blog={blog} />
    </main>
  );
};
