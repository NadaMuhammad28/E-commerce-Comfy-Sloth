import { BsFillGridFill, BsList } from "react-icons/bs";

import { useFilterContext } from "../../../context/FilterProductsContext";

const ViewButtons = () => {
  const { grid_view, showListView, showGridView } = useFilterContext();
  return (
    <div className="views-btns-container d-flex">
      <button
        className={
          grid_view ? "view-btn  active-view" : "view-btn  unactive-view"
        }
        onClick={() => showGridView()}
      >
        <BsFillGridFill />
      </button>
      <button
        className={
          !grid_view ? "view-btn  active-view" : "view-btn  unactive-view"
        }
        onClick={() => showListView()}
      >
        <BsList />
      </button>
    </div>
  );
};

export default ViewButtons;
