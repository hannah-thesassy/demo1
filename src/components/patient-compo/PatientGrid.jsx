import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import AddPatientForm from './AddPatientForm';
import EditPatientForm from './EditPatientForm';



// Dữ liệu danh sách các bác sĩ
const initialPatients = [
  { 
    id: 1, 
    name: 'Bệnh nhân A',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  { 
    id: 2, 
    name: 'Bệnh nhân A',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  { 
    id: 3, 
    name: 'Bệnh nhân A',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  { 
    id: 4, 
    name: 'Bệnh nhân A',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
},
  { 
    id: 5, 
    name: 'Bệnh nhân A',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  { 
    id: 6, 
    name: 'Bệnh nhân A',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  { 
    id: 7, 
    name: 'Bệnh nhân A',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
},
  { 
    id: 8, 
    name: 'Bệnh nhân C',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  { 
    id: 9, 
    name: 'Bệnh nhân B',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  { 
    id: 10,
    name: 'Bệnh nhân A',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  { 
    id: 11,
    name: 'Bệnh nhân D',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  { 
    id: 12,
    name: 'Bệnh nhân A',
    birthday: 1970,
    location: 'TP. HCM',
    email: '@gmail.com',
    phoneNumber: '123',
    sex: 'Nam',
    cccd: 'số cccd',
    bloodType: 'A',
  },
  // Thêm các bác sĩ khác nếu cần
];


const PatientGrid = () => {
  const userType = localStorage.getItem('userType');

  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [patients, setPatients] = useState(initialPatients);
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [editMode, setEditMode] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const itemsPerPage = 9;

    // const [query, setQuery] = useState('');
    // const [filteredItems, setFilteredItems] = useState([]);

 
    // useEffect(() => {
    //     const filtered = initialPatients.filter(item =>
    //         item.name.toLowerCase().includes(query.toLowerCase())
    //     );
    //     setFilteredItems(filtered);
    // }, [query]);

  const handleChange = event => {
    setSearchVal(event.target.value);
  };
  useEffect(() => {
    const results = initialPatients.filter(patient =>
      patient.name.toLowerCase().includes(searchVal.trim().toLowerCase()));
      setSearchResults(results);
      setPatients(results); // tự thêm
  }, [searchVal]);


  const handleAddPatient = (values) => {
    // Generate a new ID for the new medicine
    const newPatient = { 
      id: values.id,
      name: values.name,
      birthday: values["birthday"].format("YYYY"),
      location: values.location,
      email: values.email,
      phoneNumber: values.phoneNumber,
      sex: values.sex,
      cccd: values.cccd,
      bloodType: values.bloodType,
    };
    // Add the new medicine to the list of medicines
    setPatients([...patients, newPatient]);
    // Close the modal
    setVisible(false);
  };

  // function handleSearchClick() {
  //   if (searchVal === "") {
  //     setPatients(initialPatients);
  //     return;
  //   }
  //   const filterBySearch = initialPatients.filter((patient) => {
  //     if (patient.name.toLowerCase().includes(searchVal.toLowerCase())) {
  //       return patient;
  //     }
  //   });
  //   setPatients(filterBySearch);
  // }

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
    // resetFields();
  };

  function handleClick() {
    alert('You clicked me!');
  }

  const handleDelete = (id) => {
    const confirmed = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
    if (confirmed) {
      // Xoá thuốc với id tương ứng khỏi danh sách hiện tại
      const updatedPatients = patients.filter((patient) => patient.id !== id);
      setPatients(updatedPatients);

      // Xoá thuốc với id tương ứng khỏi danh sách ban đầu
      // const updatedInitialPatients = initialPatients.filter((patient) => patient.id !== id);
      // initialPatients(updatedInitialPatients);
    }
  };

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    setEditMode(true);
  };
  // const handleUpdatePatient = (updatedPatient) => {
  //   const updatedPatients = patients.map((patient) =>
  //     patient.id === updatedPatient.id ? updatedPatient : patient
  //   );
  //   setPatients(updatedPatients);
  //   setEditMode(false);
  //   setSelectedPatient(null);
  // };

  const handleCancelEdit = () => {
    setEditMode(false);
    setSelectedPatient(null);
    handleOk();
    handleCancel();
  };

  const handleSave = (editedPatient) => {
    // console.log("kayy00");
    const updatedPatients = patients.map(patient =>
      patient.id === editedPatient.id ? editedPatient : patient
    );
    setPatients(updatedPatients);
    setVisible(false);
    setEditMode(false); // important update
    handleOk();
    handleCancel();
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);

  const renderPatientRows = currentItems.map((patient, id) => (
      <div key={patient.id} className="doctor-card">
        <h2>{patient.name}</h2>
        <p>Năm sinh: {patient.birthday}, Nhóm máu: {patient.bloodType}</p>
        {userType === 'admin' ? (
          <div>
            {/* <button onClick={toggleForm}>Xem</button> */}
            <button className='edit-btn'
              onClick={() => handleEdit(patient)}>Sửa</button>
            {/* <button onClick={handleClick}>Sửa</button> */}
            <button className='delete-btn'
              onClick={() => handleDelete(patient.id)}>Xoá</button>
          </div>
        ) : (<div style={{height: "15px"}}></div>)}
      </div>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(patients.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div>
        <div className="doctor-header">
            <h1 className='doctor-total'>Bệnh nhân hiện có</h1>
            <div className="total-doctors">{patients.length}</div>
            <div className="search-bar">
                <input
                className="search-input"
                type="text"
                placeholder="Tìm kiếm bệnh nhân..."
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
                value={searchVal}
                onChange={handleChange}
                // onChange={e => { setSearchVal(e.target.value); handleSearchClick(); }}
                // value={searchTerm}
                // onChange={handleSearch}
                />
            </div>
            {userType === 'admin' ? (
            <Button className="add-button" type="primary" 
              onClick={showModal}>
              Thêm bệnh nhân
            </Button>) : (<div></div>)}
            {/* <button 
              onClick={handleClick}>Thêm bác sĩ</button> */}
            <Modal
              title="Thêm Bệnh nhân mới"
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null} // To hide the default footer buttons
            >
              <AddPatientForm onAddPatient={handleAddPatient} />
            </Modal>

            {editMode && selectedPatient && (
              <Modal
                title="Chỉnh sửa thông tin Bệnh nhân"
                visible={editMode}
                onCancel={handleCancelEdit}
                footer={null}
                // onSave={handleSave}
              >
                <EditPatientForm
                  patient={selectedPatient}
                  // onUpdatePatient={handleUpdatePatient}
                  onSave={handleSave}
                  onCancel={() => setVisible(false)} 
                />
              </Modal>
            )}

        </div>
        <div className="doctor-grid">
          {/* <div> */}
            {renderPatientRows}
          {/* </div> */}
            {/* {patients.map(patient => (
                <div key={patient.id} className="patient-card">
                  <h2>{patient.name}</h2>
                  <p>Chuyên khoa: {patient.qualifications}</p>
                  <div>
                    <button onClick={handleClick}>Sửa</button>
                    <button onClick={() => handleDelete(patient.id)}>Xoá</button>
                  </div>
                </div>
            ))} */}
        </div>
        <div className="page-number" style={{textAlign: 'center', bottom: 0}}>
          {pageNumbers.map(number => (
            <button key={number} onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          ))}
        </div>
    </div>
  );
};

export default PatientGrid;
