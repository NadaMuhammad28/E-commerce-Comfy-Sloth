import TextField from "@mui/material/TextField";
const Search = ({ updateFilters, text }) => {
  return (
    <form>
      <TextField
        id="outlined-helperText"
        size="small"
        value={text}
        type="text"
        name="text"
        label="Product Name"
        onChange={updateFilters}
      />
    </form>
  );
};

export default Search;
