import { h, FunctionComponent, VNode } from "preact";
import { useLocation } from "react-router-dom";

import * as styles from "./styles";

type Status = "active" | "casual" | "none";

interface StatusBadgeProps {
  status: Status;
}

const STATUS_MAP = {
  active: { text: "Actively interviewing" },
};

const StatusBadge: FunctionComponent<StatusBadgeProps> = ({ status }): VNode => {
  const statusInfo = STATUS_MAP[status];
  const statusText = statusInfo.text;

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <styles.ActiveBadge isHomePage={isHomePage}>
      <styles.StatusText>{statusText}</styles.StatusText>
      <styles.StatusDot />
    </styles.ActiveBadge>
  );
};

export default StatusBadge;
