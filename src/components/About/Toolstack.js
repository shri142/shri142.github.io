import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVirtualbox,
  SiKalilinux,
} from "react-icons/si";

import { FaNetworkWired } from "react-icons/fa";





function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiOpenvas />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
