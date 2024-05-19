import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './cars.css';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";




export const CustomModal=({title,show,onHide,desc})=>{
    return(
        <Modal show={show} onHide={()=>onHide()} >
        <Modal.Header closeButton={()=>onHide()} >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {desc}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>onHide()}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
}