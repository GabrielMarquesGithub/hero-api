import "./style.scss";

type ComicCardProps = {
  linkUrl?: string;
  imgUrl?: string;
  title?: string;
  index?: number;
  total: number;
};

function ComicCard({ linkUrl, imgUrl, title, index, total }: ComicCardProps) {
  return (
    <div className="ComicContainer">
      <a href={linkUrl} target="_blank">
        <span className="comicsNumber">
          Comics {index}/{total}
        </span>
        <img src={`${imgUrl}/portrait_uncanny.jpg`} alt={title} />
      </a>
    </div>
  );
}

export default ComicCard;
