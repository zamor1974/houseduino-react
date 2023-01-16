//import React from 'react';

import "../assets/img/favicon.png";
import "../assets/img/apple-touch-icon.png";
import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css"; 
import Aside from '../components/aside';

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Header() {

    const [isOpen, setIsOpen] = useState();

    return (
        <div>
            <header id="header" class="header fixed-top d-flex align-items-center">
                <div class="d-flex align-items-center justify-content-between">
                    <a href="#" class="logo d-flex align-items-center">
                        <img src="logo.png" alt="" />
                        <span class="d-none d-lg-block">Houseduino</span>
                    </a>
                    <i class="bi bi-list" onClick={() => setIsOpen(!isOpen)}></i>
                </div>
            </header>
             {isOpen && (<AnimatePresence>
               
                    <Aside />
                
            </AnimatePresence>)}
        </div>


    );
}



