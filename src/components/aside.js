import React from 'react';

const UNMOUNTED = "unmounted";
const EXITED = "exited";
const ENTERING = "entering";
const ENTERED = "entered";
const EXITING = "exiting";

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

class Aside extends React.Component {
  constructor(props) {
    super(props);

    this.state = { status: UNMOUNTED };
  }

  componentDidMount() {
    const { show } = this.props;
    if (show) {
      this.performEnter();
    }
  }

  componentDidUpdate(prevProps) {
    let nextStatus = null;
    if (prevProps !== this.props) {
      const { status } = this.state;
      if (this.props.show) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(nextStatus);
  }

  updateStatus(nextStatus) {
    if (nextStatus !== null) {
      if (nextStatus === ENTERING) {
        this.performEnter();
      } else {
        this.performExit();
      }
    } else if (this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  }

  performEnter() {
    this.setState({ status: ENTERING }, () => {
      setTimeout(() => {
        this.setState({ status: ENTERED }, () => { });
      }, 0);
    });
  }

  performExit() {
    const { duration } = this.props;
    this.setState({ status: EXITING }, () => {
      setTimeout(() => {
        this.setState({ status: EXITED }, () => { });
      }, duration);
    });
  }


  onTrigger1 = () => {
    this.props.asideCallback(1);
  };
  onTrigger2 = () => {
    this.props.asideCallback(2);
  };
  render() {
    const { status } = this.state;
    if (status === UNMOUNTED) {
      return null;
    }
    if (this.props.visibile === "0") {
      return (<div></div>)
    }
    else {
      return (
        <div className={this.props.className}
          style={{
            ...this.props.style,
            transition: `opacity ${this.props.duration}ms ease-in-out`,
            opacity: 0.1,
            ...transitionStyles[status],
          }}
        >
          <aside id="sidebar" class="sidebar">

            <ul class="sidebar-nav" id="sidebar-nav">

              <li class="nav-item">
                <a class="nav-link" onClick={this.onTrigger1}>
                  <i class="bi bi-house-door-fill"></i>
                  <span>Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={this.onTrigger2}>
                  <i class="bi bi-clipboard2-data-fill"></i>
                  <span>Dati</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>


      )
    }

  }
}
export default Aside