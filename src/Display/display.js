export default function Display({ tempNum, input }) {
  return (
    <div className="input-group py-2 px-1">
      <div className="form-control text-end bg-light border border-secondary">
        <div className="">{input}</div>
        <hr />
        <div id="display" className="">
          {tempNum}
        </div>
      </div>
    </div>
  );
}
