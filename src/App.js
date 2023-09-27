import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import AddProduct from './components/product/addProduct';
import ViewProduct from './components/product/viewProduct';
import ProductState from './context/product/productState';
import UpdateModal from './components/product/updateModal';
import ViewCustomer from './components/customer/viewCustomer';
import CustomerState from './context/customer/customerState';
import UpdateCustomer from './components/customer/updateCustomer';
import AddCustomers from './components/customer/addCustomers';
import ViewCustomerSale from './components/customer/customerSale/viewCustomerSale';
import CustomerSaleState from './context/customerSale/customerSaleState';
import AddCustomersSale from './components/customer/customerSale/addCustomerSale';
import EmployeeState from './context/employees/employeeState';
import ViewEmployee from './components/employee/viewEmployee';
import AddEmployees from './components/employee/addEmployee';
import UpdateEmployee from './components/employee/updateEmployee';
import ViewAttendance from './components/attendance/viewAttendance';
import AttendanceState from './context/attendance/attendanceState';
import AttendanceDatePicker from './components/attendance/attendanceDatePicker';
import AddAttendance from './components/attendance/addAttendance';
import AddAttendanceDate from './components/attendance/addAttendanceDate';
import SignIn from './components/loginSignup/signIn';
import AuthState from './context/auth/authState';

function App() {
  const authToken = localStorage.getItem('authToken');
  const authenticated = authToken !== null;
 
  return (
    <AuthState>
      <CustomerState>
        <ProductState>
          <CustomerSaleState>
            <EmployeeState>
              <AttendanceState>
                <BrowserRouter>
                  <div className='flex'>
                    {authenticated ? <Sidebar /> : <SignIn />}
                    <Routes>
                      <Route path="/addProduct" element={<AddProduct />} />
                      <Route path="/viewProduct" element={<ViewProduct />} />
                      <Route path="/update" element={<UpdateModal />} />
                      <Route path="/viewCustomers" element={<ViewCustomer />} />
                      <Route path="/updateCustomers" element={<UpdateCustomer />} />
                      <Route path="/addCustomers" element={<AddCustomers />} />
                      <Route path="/AddCustomersSale" element={<AddCustomersSale />} />
                      <Route path="/viewCustomerSale" element={<ViewCustomerSale />} />
                      <Route path="/viewEmployee" element={<ViewEmployee />} />
                      <Route path="/AddEmployee" element={<AddEmployees />} />
                      <Route path="/UpdateEmployee" element={<UpdateEmployee />} />
                      <Route path="/viewAttendance" element={<ViewAttendance />} />
                      <Route path="/attendanceDate" element={<AttendanceDatePicker />} />
                      <Route path="/addAttendance" element={<AddAttendance />} />
                      <Route path="/addAttendanceDate" element={<AddAttendanceDate />} />
                      <Route path="/signIn" element={<SignIn />} />
                      <Route path="/sidebar" element={<SignIn />} />
                    </Routes>
                  </div>
                </BrowserRouter>
              </AttendanceState>
            </EmployeeState>
          </CustomerSaleState>
        </ProductState>
      </CustomerState>
    </AuthState>
  );
}

export default App;
