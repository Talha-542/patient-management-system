import React from 'react';
import { department_list } from '../Assests/assets'; 
import styles from './Department.module.css'; 

export default function DepartmentMenu({ Department, setDepartment }) {
  return (
    <div className={styles.exploreMenu}>
      <div className={styles.exploreMenuList}>
        {
          department_list.map((item, index) => {
            return (
              <div 
                onClick={() => setDepartment(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                key={index} 
                className={`${styles.exploreMenuListItem} ${Department === item.menu_name ? styles.exploreMenuListItemActive : ""}`}
              >
                <img src={item.menu_image} alt={item.menu_name} />
                <p>{item.menu_name}</p>
              </div>
            );
          })
        }
      </div>
      <hr className={styles.exploreMenuHr} />
    </div>
  );
}
