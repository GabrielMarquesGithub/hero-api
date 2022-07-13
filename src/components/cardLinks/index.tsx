import { UrlsType } from "../../types/HeroType";

import "./style.scss";

type CardLinksProps = {
  Urls: UrlsType[];
  open: boolean;
};

function CardLinks({ Urls, open }: CardLinksProps) {
  const style = open ? { display: "flex" } : { display: "none" };
  return (
    <div style={style} className="CardLinksContainer">
      {Urls.map((url, index) => {
        return (
          <a key={index} href={url.url} target="_blank">
            {url.type}
          </a>
        );
      })}
    </div>
  );
}

export default CardLinks;
