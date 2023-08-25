export default  function AutoGrowingInput() {
  return (
    <div className="container">
      <div
        className="auto-growing-input-container"
        style={{ height: calculateInputHeight(text) }}
      >
        <input
          className="auto-growing-input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Type here..."
        />
      </div>
    </div>
  );
}





