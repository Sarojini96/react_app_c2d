import React from "react";
import { Col, Container, Row, Footer } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
const FooterPage = () => {
  return (
    <Footer color="#01579B light-blue darken-4" className="page-footer font-small pt-4 mt-4">
                <Container className="text-left">
                    <Row>
                        <Col md="6">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">WHO WE ARE</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
               
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com">  </a>
                    </Container>
                </div>
            </Footer>
  );
}

export default FooterPage;