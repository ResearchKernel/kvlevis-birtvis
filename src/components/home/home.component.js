import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Switch, Route, Link } from "react-router-dom";
import KafkaView from "./../../views/kafka/KafkaView";
import HiveView from "./../../views/hive/HiveView";

// sub_components
import ProducerView from "./../../views/kafka/sub_components/ProducerView";
import ConsumerView from "./../../views/kafka/sub_components/ConsumerView";
import TopicsView from "../../views/kafka/sub_components/TopicsView";
import MetricsView from "./../../views/kafka/sub_components/MetricsView";

import "./home.css";
import NotFound from "../../views/NotFound";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
  rootSubmenuKeys = ["1.1", "1.2", "1.3", "1.4"];
  state = {
    selectedKeys: ["1.1"],
    openKeys: ["1.1"],
    collapsed: false,
    routesMap: {
      "1.1": {
        route: "/kafka/producers",
        name: "ProducerView",
        component: <ProducerView />,
        key: "1.1",
        isSubRoute: true
      },
      "1.2": {
        route: "/kafka/consumers",
        name: "ConsumerView",
        component: <ConsumerView />,
        key: "1.2",
        isSubRoute: true
      },
      "1.3": {
        route: "/kafka/topics",
        name: "TopicsView",
        component: <TopicsView />,
        key: "1.3",
        isSubRoute: true
      },
      "1.4": {
        route: "/kafka/metrics",
        name: "MetricsView",
        component: <MetricsView />,
        key: "1.4",
        isSubRoute: true
      },
      "2": {
        route: "/hive",
        name: "HiveView",
        component: <HiveView />,
        key: "2",
        isSubRoute: false
      }
    }
  };

  componentDidMount() {
    // const pathName = this.props.history.location.pathname;
    // const [val] = Object.values(this.state.routesMap).filter(item => {
    //   return item.route == pathName;
    // });
    // this.props.history.push(val.isSubRoute ? val.route : "/kafka");
    // // update selected keys array
    // if (val.isSubRoute) {
    //   const subRouteProps = [val.key.split(".")[0], val.key];
    //   this.setState({
    //     selectedKeys: subRouteProps,
    //     openKeys: subRouteProps
    //   });
    //   console.log("1 called");
    // } else {
    //   this.setState({ selectedKeys: [val.key] });
    //   console.log("2 called");
    // }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleMenuItemClick = event => {
    this.setState({ selectedKeys: [event.key] }, () => {
      this.props.history.push(this.state.routesMap[event.key].route);
      this.setState({ openKeys: [event.key] });
      // save to local storage
    });
  };

  render() {
    let dsk = ["1", "1.1"];
    let dok = ["1", "1.1"];
    const pathName = this.props.history.location.pathname;
    const [val] = Object.values(this.state.routesMap).filter(item => {
      return item.route == pathName;
    });

    // update selected keys array
    let subRouteProps = [];
    if (val && val.isSubRoute) {
      subRouteProps = [val.key.split(".")[0], val.key];
      // ##
      // this.setState({
      //   selectedKeys: subRouteProps,
      //   openKeys: subRouteProps
      // });
      dsk = subRouteProps;
      dok = subRouteProps;
    } else {
      // ##
      // this.setState({ selectedKeys: [val.key] });
      dsk = subRouteProps;
    }

    return (
      <Layout id="components-layout-custom">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={dsk}
            defaultOpenKeys={dok}
          >
            <SubMenu
              key="1"
              onClick={this.handleMenuItemClick}
              title={
                <span className="dfrac">
                  <Icon type="mail" />
                  <span>Kafka</span>
                </span>
              }
            >
              <Menu.Item key="1.1" onClick={this.handleMenuItemClick}>
                Producers
              </Menu.Item>
              <Menu.Item key="1.2" onClick={this.handleMenuItemClick}>
                Consumers
              </Menu.Item>
              <Menu.Item key="1.3" onClick={this.handleMenuItemClick}>
                Topics
              </Menu.Item>
              <Menu.Item key="1.4" onClick={this.handleMenuItemClick}>
                Metrics
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              key="2"
              onClick={this.handleMenuItemClick}
              className="dfrac"
            >
              <Icon type="video-camera" />
              <span>Hive</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              // margin: "24px 16px",
              padding: 24
              // background: "#fff",
              // minHeight: "100%"
            }}
          >
            <Switch>
              <Route
                exact
                path="/kafka/producers"
                render={routerProps => {
                  return <ProducerView {...routerProps} />;
                }}
              />
              <Route
                exact
                path="/kafka/consumers"
                render={routerProps => {
                  return <ConsumerView {...routerProps} />;
                }}
              />
              <Route
                exact
                path="/kafka/topics"
                render={routerProps => {
                  return <TopicsView {...routerProps} />;
                }}
              />
              <Route
                exact
                path="/kafka/metrics"
                render={routerProps => {
                  return <MetricsView {...routerProps} />;
                }}
              />
              <Route
                exact
                path="/hive"
                render={routerProps => {
                  return <HiveView {...routerProps} />;
                }}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
