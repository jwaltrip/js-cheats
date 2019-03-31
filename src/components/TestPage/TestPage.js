import React, { Component } from 'react';
import { Container } from "reactstrap";
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
      items: []
    };
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
    const completeList = [...arrayData, ...numberData, ...stringData];
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
  
  render() {
    const { items } = this.state;
    
    return (
      <div>
        <Container>
          <h1>Autocomplete Test Page</h1>
          <hr />
          <br />
  
          <ReactAutocomplete
            items={items}
            shouldItemRender={(item, value) => item.searchValue.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.name}
            renderItem={(item, highlighted) =>
              <div
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
              >
                {item.name}
              </div>
            }
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
          />
        </Container>
      </div>
    );
  }
}

export default TestPage;
