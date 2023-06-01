export default function Numbers({ handleClick }) {
  let obj = {
    nine: "9",
    eight: "8",
    seven: "7",
    six: "6",
    five: "5",
    four: "4",
    three: "3",
    two: "2",
    one: "1",
    zero: "0",
    decimal: "."
  };

  let rows = [];

  for (let key in obj) {
    if (key === "zero") {
      rows.push(
        <div key={obj[key]} className="col-8" style={{ padding: "0 2px" }}>
          <button
            id={key}
            className="btn btn-secondary btn-lg w-100"
            value={obj[key]}
            type="button"
            onClick={(e) => handleClick(e)}
          >
            {obj[key]}
          </button>
        </div>
      );
    } else {
      rows.push(
        <div key={obj[key]} className="col">
          <button
            id={key}
            className="btn btn-secondary btn-lg w-100"
            value={obj[key]}
            type="button"
            onClick={(e) => handleClick(e)}
          >
            {obj[key]}
          </button>
        </div>
      );
    }
  }

  return <div className="row row-cols-3 row-gap-1 mx-0">{rows}</div>;
}
