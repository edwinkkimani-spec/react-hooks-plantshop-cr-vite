
function Search({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;
