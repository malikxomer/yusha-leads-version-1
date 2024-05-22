import { CustomListStyle } from "./CustomList.style";
import { ListMarker } from "../../svg/index";

const CustomList = (props) => {
  const { list } = props;
  return (
    <CustomListStyle>
      {list.map((listData, index) => (
        <li key={index} className="listed-item">
          <ListMarker />
          <h4 className="item-description">{listData}</h4>
        </li>
      ))}
    </CustomListStyle>
  );
};

export default CustomList;
