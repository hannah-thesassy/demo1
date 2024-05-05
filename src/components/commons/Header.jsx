import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


function Header({OpenSidebar}) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    // setIsLoggedin(false);
    const confirmed = window.confirm(`Bạn có chắc chắn muốn đăng xuất không?`);
    if (confirmed) {
      localStorage.clear(); // Clear the entire local storage
      navigate('/hospital-manage/login');
    }
  };

  return (
    <header className='header'>
        <div className='menu-icon'>
            {/* <BsJustify className='icon' onClick={OpenSidebar}/> */}
        </div>
        <div className='header-right'>
            {/* <BsPersonCircle className='icon'/> */}
        </div>
        <div>
          <Button className="logout-btn" onClick={handleLogOut}>Đăng xuất</Button>
        </div>
    </header>
  )
}

export default Header