import { CardList } from "../molecules/CardList";

export const Card = ({ blog }) => {
  return (
    <main className="flex-grow-flexGrow2">
      <CardList blog={blog} />
    </main>
  );
};
