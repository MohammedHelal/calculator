export default function ClearDisplay({ removeInput }) {
  return (
    <div className="w-100" style={{ padding: "2px", paddingBottom: "4px" }}>
      <button
        id="clear"
        className="btn btn-danger btn-lg w-100"
        value="AC"
        type="button"
        onClick={removeInput}
      >
        AC
      </button>
    </div>
  );
}
