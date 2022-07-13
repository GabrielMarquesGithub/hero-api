import "./style.scss";

type ArrowButtonProps = {
  side: "left" | "right";
  show: boolean;
  handleFunction: () => void;
};

function ArrowButton({ side, show, handleFunction }: ArrowButtonProps) {
  return (
    <>
      {show && (
        <div
          onClick={handleFunction}
          className={`ArrowButtonContainer ${side}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {!show && <div className="mockDiv"></div>}
    </>
  );
}

export default ArrowButton;
