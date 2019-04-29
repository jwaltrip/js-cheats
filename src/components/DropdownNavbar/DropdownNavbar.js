import React from "react";
import { withRouter } from 'react-router-dom';
import ArrayData from "../ArrayPage/array-routes";
import StringData from "../StringPage/string-routes";
import NumberData from "../NumberPage/number-routes";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class DropdownNavbar extends React.Component {
  generateDropdownItems = () => {
    let allItems = [];
    // add strings first
    // push string header and divider as first 2 elements
    allItems.push(
      <DropdownItem key={`str-header`} header>
        Strings
      </DropdownItem>
    );
    allItems.push(<DropdownItem key={`str-divider-top`} divider />);
    // loop thru string data and add all string pages to dropdown menu in alpha order
    StringData.forEach((item, idx) => {
      const curr = (
        <DropdownItem key={`str-${idx}`} onClick={() => this.props.history.push(item.path)}>
          {item.name}
        </DropdownItem>
      );
      allItems.push(curr);
    });
    allItems.push(<DropdownItem key={`str-divider-bottom`} divider />);

    // add arrays 2nd
    // push array header and dividor before all array elements
    allItems.push(
      <DropdownItem key={`arr-header`} header>
        Arrays
      </DropdownItem>
    );
    allItems.push(<DropdownItem key={`arr-divider-top`} divider />);
    // loop thru ARRAY data and add all array pages to dropdown menu in alpha order
    ArrayData.forEach((item, idx) => {
      const curr = (
        <DropdownItem key={`arr-${idx}`} onClick={() => this.props.history.push(item.path)}>
          {item.name}
        </DropdownItem>
      );
      allItems.push(curr);
    });
    allItems.push(<DropdownItem key={`arr-divider-bottom`} divider />);

    // add Numbers 3rd
    // push numbers and dividor beofre all the number elements
    allItems.push(
      <DropdownItem key={`num-header`} header>
        Numbers
      </DropdownItem>
    );
    allItems.push(<DropdownItem key={`num-divider-top`} divider />);
    // loop thru NUMBER data and add all number pages to dropdown menu in alpha order
    NumberData.forEach((item, idx) => {
      const curr = (
        <DropdownItem key={`num-${idx}`} onClick={() => this.props.history.push(item.path)}>
          {item.name}
        </DropdownItem>
      );
      allItems.push(curr);
    });

    // return entire dropdown list items
    return allItems;
  };

  render() {
    return (
      <div style={{ width: "100%", paddingBottom: 20 }}>
        <UncontrolledDropdown
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "col",
            justifyContent: "center"
          }}
        >
          <DropdownToggle
            caret
            outline
            color="primary"
            style={{ width: "80%" }}
          >
            Menu {"     "}
          </DropdownToggle>
          <DropdownMenu
            modifiers={{
              setMaxHeight: {
                enabled: true,
                order: 890,
                fn: data => {
                  return {
                    ...data,
                    styles: {
                      ...data.styles,
                      overflow: "auto",
                      maxHeight: 500,
                      width: "80%"
                    }
                  };
                }
              }
            }}
          >
            {this.generateDropdownItems()}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}

export default withRouter(DropdownNavbar);
