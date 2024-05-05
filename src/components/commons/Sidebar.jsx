import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 
{BsHeart, BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const location = useLocation();
    
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                {/* <BsHeart  className='icon_header'/> BKMEC */}
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>

            <Link to="/hospital-manage/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                <li className='sidebar-list-item'>
                    <div 
                        className={location.pathname === '/hospital-manage/dashboard' ? 'active' : ''}>
                        Trang chủ
                    </div>
                </li>
            </Link>
            <Link to="/hospital-manage/doctor" style={{ textDecoration: 'none', color: 'inherit' }}>
                <li className='sidebar-list-item'>
                    <div className={location.pathname === '/hospital-manage/doctor' ? 'active' : ''}>Bác sĩ</div>
                </li>
            </Link>
            <li className='sidebar-list-item'>
                <div>Y tá</div>
            </li>
            <Link to="/hospital-manage/patient" style={{ textDecoration: 'none', color: 'inherit' }}>
                <li className='sidebar-list-item'>
                    <div className={location.pathname === '/hospital-manage/patient' ? 'active' : ''}>Bệnh nhân</div>
                </li>
            </Link>
            <Link to="/hospital-manage/medicine" style={{ textDecoration: 'none', color: 'inherit' }}>
                <li className='sidebar-list-item'>
                    <div className={location.pathname === '/hospital-manage/medicine' ? 'active' : ''}>Kiểm kê thuốc</div>
                </li>
            </Link>
            <li className='sidebar-list-item'>
                <div>Thống kê</div>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar