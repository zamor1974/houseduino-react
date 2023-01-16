import React from 'react';
import { motion } from "framer-motion";

const aside = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0, x: 250 }}
    >
      <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

          <li class="nav-item">
            <a class="nav-link " href="index.html">
              <i class="bi bi-house-door-fill"></i>
              <span>Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
              <i class="bi bi-clipboard2-data-fill"></i>
              <span>Dati</span>
            </a>
          </li>

        </ul>

      </aside>
    </motion.div>

  );
}
export default aside;