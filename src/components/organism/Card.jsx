export const Card = () => {
  return (
    <main className="flex-grow-flexGrow2">
      <div className=" grid gap-5 grid-cols-cardResGrid px-5 sm:grid-cols-cardGrid md:pl-0 xl:grid-cols-3">
        <div className="cardComponent">
          <img className="h-12 rounded-full" src="/images/logoName.png" alt="プロフィール画像" />
          <p>text</p>
          <p>text</p>
        </div>
        <div className="cardComponent">
          <img className="h-12 rounded-full" src="/images/logoName.png" alt="プロフィール画像" />
          <p>text</p>
          <p>text</p>
        </div>
        <div className="cardComponent">
          <img className="h-12 rounded-full" src="/images/logoName.png" alt="プロフィール画像" />
          <p>text</p>
          <p>text</p>
        </div>
        <div className="cardComponent">
          <img className="h-12 rounded-full" src="/images/logoName.png" alt="プロフィール画像" />
          <p>text</p>
          <p>text</p>
        </div>
      </div>
    </main>
  );
};
