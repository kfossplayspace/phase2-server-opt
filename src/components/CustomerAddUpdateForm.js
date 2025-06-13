import React, { useState } from 'react';

export function CustomerAddUpdateForm({
  formObject,
  handleInputChange,
  onDeleteClick,
  onSaveClick,
  onCancelClick,
  mode, }) {
    
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const email = e.target.value;
    handleInputChange(e); // call parent input handler

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSaveClick = () => {

     if (!formObject.name.trim()) {
       alert('name is required.');
    return;
     }
      if (!formObject.password.trim()) {
       alert('password is required.');
    return;
      }
    if (!emailRegex.test(formObject.email)) {
      setEmailError('Please enter a valid email address.');
      return; // prevent save if invalid email
   
    }
    setEmailError('');
    onSaveClick();
  };
     return (
      <div className="boxed">
      <div>
        <h4>{mode}</h4>
      </div>
      <form >
        <table id="customer-add-update" >
          <tbody>
            <tr>
              <td className={'label'} >Name:</td>
              <td><input
                type="text"
                name="name"
                onChange={handleInputChange}
                value={formObject.name}
                placeholder="Customer Name"
                required /></td>
            </tr>
            <tr>
              <td className={'label'} >Email:</td>
              <td><input
                type="email"
                name="email"
                onChange={handleEmailChange}
                value={formObject.email}
                placeholder="name@company.com" />
      
                {emailError && (
                  <div style={{ color: 'red', marginTop: '4px' }}>{emailError}</div>
                )}
                </td>
            </tr>
            <tr>
              <td className={'label'} >Pass:</td>
              <td><input
                type="text"
                name="password"
                onChange={handleInputChange}
                value={formObject.password}
                placeholder="password" /></td>
            </tr>
            <tr className="button-bar">
              <td colSpan="2">
                <input type="button" value="Delete" onClick={onDeleteClick} />
                <input type="button" value="Save" onClick={handleSaveClick} />
                <input type="button" value="Cancel" onClick={onCancelClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
   
  );
}