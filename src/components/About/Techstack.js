import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiUnitySmall,
  DiDjango,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFlutter,
  SiFirebase,
  SiTwilio,
  
  SiCisco,
  
} from "react-icons/si";

import { BsBug } from "react-icons/bs";

import { DiCode } from "react-icons/di";
import { 
  FaGlobe ,
  FaServer
} from "react-icons/fa";

import { RiCloudLine } from "react-icons/ri";





function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUnitySmall />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTwilio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCisco/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsBug/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiCloudLine/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGlobe />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer/>
      </Col> 
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaBinoculars/>
      </Col> */}
    </Row>
  );
}

export default Techstack;
