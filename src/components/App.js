import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { store } from '../redux/store';
import { getNextPage, loading, initialPage } from '../redux/action';
import { Button, Spin, Alert } from 'antd';


const mapStateToProps = store => {
  return {
    state: store
  }
}

export default connect(mapStateToProps, null)(class App extends Component {

  componentDidMount = () => {
    axios('http://dev.frevend.com/json/users.json')
      .then(res => {
        store.dispatch(initialPage(res))
      });
  }

  handleClick = event => {
    store.dispatch(loading(false))
    store.dispatch(getNextPage(event.target.id))
    setTimeout(() => { store.dispatch(loading(true)) }, 500)
  }

  render() {
    const { users, currentPage, usersOnPage, loading } = this.props.state;
    const lastIndex = currentPage * usersOnPage;
    const firstIndex = lastIndex - usersOnPage;
    const currentUsers = users.slice(firstIndex, lastIndex);
    let pages = [];
    const countUsers = users.length / usersOnPage;
    for (let i = 1; i <= countUsers; i += 1) {
      pages.push(i);
    };
    const displayPages = pages.map(number => {
      return (
        <Button key={number}
          id={number}
          onClick={this.handleClick} >
          {number}
        </Button>
      );
    });
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Surname</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {
              currentUsers.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td><img src='http://dev.frevend.com/json/images/u_1.png' alt='avatar' /></td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.desc}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <span className="btn-position">
          {
            loading ? displayPages : <Spin><Alert message="Loading" type="info" /></Spin>
          }
        </span>
      </>
    )
  }
})
