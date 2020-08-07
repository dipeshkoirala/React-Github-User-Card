import React, { Component } from "react";
import axios from "axios";
import UserData from "../data";
import UserSelect from "./User";
import { UserColour } from "../data";
export default class GitHubContainer extends Component {
  constructor() {
    super();
    this.state = {
      person: [],
      user: "",
      followers: [],
    };
    console.log("1. constructor succeeded");
  }

  componentDidMount() {
    console.log("CDM running");
    axios
      .get("https://api.github.com/users/dipeshkoirala")
      .then((res) => {
        console.log(res.data);
        this.setState({ person: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleChanges = (e) => {
    this.setState({ ...this.state, user: e.target.value });
  };
  getUser = (e) => {
    e.preventDefault();
    axios

      .get(`https://api.github.com/users/${this.state.user}`)

      .then((res) => {
        this.setState({ ...this.state, person: res.data });
        // console.log(res);
      })
      .catch((err) => console.log(err));

    // console.log("dk->" + this.state);
  };

  getFollower = (e) => {
    e.preventDefault();
    axios

      .get(`https://api.github.com/users/${this.state.user}/followers`)
      .then((res) => {
        this.setState({ ...this.state, followers: res.data });
        console.log(res.data);
        //console.log("followers:" + this.state);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <UserSelect
          data={UserData}
          value={this.state.value}
          handleChanges={this.handleChanges}
        />
        <button onClick={this.getUser}>Get User</button>
        <div className="ghcontainer bg-success m-3 p-3 float-center">
          Testing GitHubContainer
          <div>
            <h1>Hello {this.state.person.login}!!!</h1>
            <div>
              <img
                src={this.state.person.avatar_url}
                width="200px"
                height="200px"
              />
            </div>
            <div className="mytable bg-white float-center">
              <br></br>
              <table>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>UserSince</th>
                  <th>githubHandle</th>
                  <th>Followers</th>
                  <th>Following</th>
                  <th>Repo</th>
                </tr>
                <tr>
                  <td> {this.state.person.id}</td>
                  <td> {this.state.person.login}</td>
                  <td>
                    {new Date(this.state.person.created_at).toDateString()}
                  </td>
                  <td> {this.state.person.html_url}</td>
                  <td> {this.state.person.followers}</td>
                  <td> {this.state.person.following}</td>
                  <td> {this.state.person.public_repos}</td>
                </tr>
              </table>
            </div>
          </div>
          <button className="btn-link p-2" onClick={this.getFollower}>
            Get Follower
          </button>
          {/* {UserColour.map((color) => { */}
          {/* // <div style={`background:${color}`}> */}
          {/* { */}
          {this.state.followers.map((a, index) => {
            // const color1 = ["#bbbbbb", "#98f199", "#123654"];
            return (
              <div className="dk bg-primary color-white">
                <span className="tab">
                  <table className="table table-dark">
                    <tr>
                      <th>No.</th>
                      <th>Avatar</th>
                      <th>GithubHandle</th>
                    </tr>
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          width="50"
                          height="50"
                          src={a.avatar_url}
                          // key={this.state.arr.avatar}
                          // alt={this.state.person.avatar}
                        />
                      </td>

                      <td> {a.login}</td>
                    </tr>
                  </table>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
