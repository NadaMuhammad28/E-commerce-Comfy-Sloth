import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SelectOptions = () => {
  return (
    <Select
      style={{ margin: "0 !important", padding: "0" }}
      id="companies"
      name="company"
      value={company}
      onChange={updateFilters}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      {companies &&
        companies.map((company) => {
          return (
            <MenuItem name={company} value={company} key={company}>
              {company}
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default SelectOptions;
