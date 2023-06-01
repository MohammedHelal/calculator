export default function Calculate({ calculate }) {
  return (
    <div className="w-100 p-1">
      <button
        id="equals"
        className="btn btn-primary btn-lg w-100"
        value="equal"
        type="button"
        onClick={(e) => calculate(e)}
      >
        =
      </button>
    </div>
  );
}
