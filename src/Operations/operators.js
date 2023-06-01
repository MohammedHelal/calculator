export default function Operators({ handleClick }) {
  let obj = {
    divide: "/",
    multiply: "*",
    subtract: "-",
    add: "+"
  };

  let rows = [];

  for (let key in obj) {
    rows.push(
      <div key={obj[key]} className="w-100 px-1 pt-1">
        <button
          id={key}
          className="btn btn-outline-secondary btn-lg w-100"
          value={obj[key]}
          type="button"
          onClick={(e) => handleClick(e)}
        >
          {obj[key]}
        </button>
      </div>
    );
  }

  return <>{rows}</>;
}
