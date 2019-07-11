import React, { Component } from 'react';
import { Container } from "reactstrap";
import { withRouter } from "react-router";
import ReactAutocomplete from "react-autocomplete";
import arrayData from "../ArrayPage/array-routes";
import numberData from "../NumberPage/number-routes";
import stringData from "../StringPage/string-routes";

// TODO add String, Number, and Array headings to the autocomplete dropdown

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: [],
      currentItem: null
    };
  
    // this.input = React.createRef();
  }
  
  // create the search list when component is rendered
  componentDidMount() {
    const items = this.createSearchList();
    this.setState({ items });
  }
  
  // this function combines all the subpage route json data
  // and deletes the component key since we dont need it and
  // it increases performance not to have the components in the search list
  createSearchList = () => {
    // combines the data for: arrays, strings, and numbers using spread operator
    const completeList = [...arrayData, ...stringData, ...numberData];
    // filter the list, remove the "comp" key, add id
    const filteredList = completeList.map((item, idx) => {
      // delete the component attached to the current object
      delete item.comp;
      // add an id field
      item.id = idx;
      return item;
    });
    // console.log(filteredList);
    return filteredList;
  };
  
  dropdownItemRender = (item, highlighted) => {
    // define styles for each catergory title
    // and make sure that the title's always display in the list
    let titleStyle = {};
    if (item.name.endsWith("Overview")) {
      if (highlighted) {
        titleStyle.backgroundColor = "#888";
      } else {
        titleStyle.backgroundColor = "#686868";
      }
      
      titleStyle.color = "white";
      titleStyle.fontWeight = "bold";
    }
    
    // dropdown item style
    const dropdownStyle = {
      padding: "5px 5px 5px 15px",
      fontSize: "16px"
    }
    
    return <div
      key={item.id}
      style={{ backgroundColor: highlighted ? '#ddd' : '#eee', ...dropdownStyle, ...titleStyle }}
    >
      {item.name}
    </div>;
  }
  
  shouldItemRender = (item, value) => {
    console.log(`item: ${JSON.stringify(item, null, 4)}`);
    // console.log(`value: ${value}`);
    return item.searchValue.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.searchValue.toLowerCase().endsWith("overview");
  }
  
  isItemSelectable = (item) => !item.name.endsWith("Overview");
  
  handleOnSubmit = (e) => {
    e.preventDefault();
    // get current value in the search bar
    const searchValue = this.state.value;
    // test to see if searchValue is a correct full search term
    if (this.state.currentItem !== null) {
      this.props.history.push(this.state.currentItem.path);
    }
  }
  
  render() {
    const { items } = this.state;
    
    return (
      <div>
        <Container>
          <h1>Autocomplete Test Page</h1>
          <hr />
          <br />
  
          <form className="form-inline my-2 my-lg-0" onSubmit={this.handleOnSubmit}>
            <ReactAutocomplete
              ref={el => this.input = el}
              items={items}
              shouldItemRender={this.shouldItemRender}
              isItemSelectable={this.isItemSelectable}
              getItemValue={item => item.name}
              renderItem={this.dropdownItemRender}
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value, currentItem: null })}
              onSelect={(value, item) => this.setState({ value, currentItem: item })}
              inputProps={{
                  className: "form-control mr-2",
                  placeholder: "Search..."
                }}
            />
            <button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit" onClick={this.handleOnSubmit}>Search</button>
          </form>
          
        </Container>
      </div>
    );
  }
}

export default withRouter(TestPage);
