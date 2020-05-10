import { h, Component, Fragment, ComponentType } from "preact";

import isMobile from "../is-mobile";
import { AvenirFontDiv } from "../text-styles";

export interface WithMobileSupportProps {
  isCollapsed: boolean;
  onReadMore: () => void;
  onCollapse: () => void;
  getCollapseButton: () => void;
}

interface WithMobileSupportState {
  isCollapsed: boolean;
}

export default function withMobileSupport<P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  return class extends Component<P, WithMobileSupportState> {
    state = {
      isCollapsed: isMobile(),
    };

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    onReadMore = () => {
      this.setState({ isCollapsed: false });
    };

    onCollapse = () => {
      this.setState({ isCollapsed: true }, () => {
        window.scrollTo(0, 0);
      });
    };

    getCollapseButton = () => {
      if (!isMobile()) {
        return <Fragment />;
      }

      if (this.state.isCollapsed) {
        return <Fragment />;
      }

      return (
        <AvenirFontDiv marginTop="30px">
          <button onClick={this.onCollapse}>collapse -</button>
        </AvenirFontDiv>
      );
    };

    render() {
      return (
        <WrappedComponent
          isCollapsed={this.state.isCollapsed}
          onReadMore={this.onReadMore}
          onCollapse={this.onCollapse}
          getCollapseButton={this.getCollapseButton}
          {...this.props}
        />
      );
    }
  };
}
