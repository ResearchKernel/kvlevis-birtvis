import React, { Component } from "react";
import { Accordion, Row, Col, InputGroup, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { filterByYears } from "../../_actions/filters.action";
import "./filerBy.css";

@connect(store => {
  return {
    filterByYears: store.filterByYears
  };
})
class FilterBy extends Component {
  state = {
    yearsFilterArray: [],
    checkedStates: {}
  };

  handleOnChange = e => {
    const val = e.target.checked;
    const { yearsFilterArray, checkedStates } = this.state;
    if (val) {
      yearsFilterArray.push(e.currentTarget.dataset.year);
    } else {
      const index = e.currentTarget.dataset.index;
      yearsFilterArray.splice(index, 1);
    }
    const year = e.currentTarget.dataset.year;
    this.setState({ yearsFilterArray }, () => {
      checkedStates[year] = val;
      this.setState({ checkedStates });
      this.props.dispatch(filterByYears(yearsFilterArray));
    });
  };

  render() {
    const { list, filterByYears } = this.props;
    const listMap = list.map((item, index) => {
      return (
        <Accordion.Collapse eventKey="0" key={index}>
          <Row>
            <Col>
              <InputGroup size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Checkbox
                    checked={
                      this.state.checkedStates[item]
                        ? this.state.checkedStates[item]
                        : false
                    }
                    onChange={this.handleOnChange}
                    data-year={item}
                    data-index={index}
                  />
                </InputGroup.Prepend>
              </InputGroup>
            </Col>
            <Col>
              <Card.Body>{item}</Card.Body>
            </Col>
          </Row>
        </Accordion.Collapse>
      );
    });
    return listMap;
  }
}

export default FilterBy;
