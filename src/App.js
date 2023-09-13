
import './App.css';
import React, {useState} from 'react'

function App() {

  const [formData, setFormData] = useState (
    {
      firstName: '',
      lastName: '', 
      email: '', 
      country: 'India', 
      streetAddress: '',
      city: '', 
      state: '',
      zipCode: '', 
      comments: false,
      candidates: false, 
      offers: false, 
      pushNotifications: ''
    }
  );

  function changeHandler(event) {

    const {name, value, checked, type} = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name] : type === "checkbox" ? checked : value
      }
    })
  }
 
  function submitHandler(event) { 
    event.preventDefault();
    
    console.log("Finally Printing the Form Data");
    console.log(formData);
  }

  return (
    <div className="App">

      <form onSubmit={submitHandler} className='form'>

        <br/>

        <label htmlFor='firstName' className='label'>First Name</label>
        <br/>
        <input 
        className='input'
        type='text'
        placeholder='First Name'
        onChange={changeHandler}
        name='firstName'
        id='firstName'
        value={formData.firstName}
        />

        <br></br>

        <label htmlFor='lastName' className='label'>Last Name</label>
        <br/>
        <input
        className='input'
        type='text'
        placeholder='Last Name'
        onChange={changeHandler}
        name='lastName'
        id='lastName'
        value={formData.lastName}
        />

        <br/>
        <label htmlFor='email' className='label'>Email address</label>
        <br/>
        <input 
        className='input'
        type='email'
        placeholder='email@gmail.com' 
        onChange={changeHandler}
        name='email'
        id='email'
        value={formData.email}
        />

        <br/>
        <label htmlFor='country' className='lable'>Country</label>
        <br/>
        <select 
        className='input'
        onChange={changeHandler}
        id='country'
        value={formData.country}
        name='country'
        >
          <option value='australia'>Australia</option>
          <option value='canada'>Canada</option>
          <option value='india'>India</option>
          <option value='london'>London</option>
          <option value='london'>Mexico</option>
          <option value='usa'>United States</option>

        </select>
        
        <br></br>
        <label htmlFor='streetAddress' className='label'>1234 Main Street</label>
        <br></br>

        <input 
        className='input'
        type='text' 
        placeholder='Street Address'
        onChange={changeHandler}
        name='streetAddress'
        id='streetAddress'
        value={formData.streetAddress}
        />

        <br/>
        <label htmlFor='city' className='label'>City</label>
        <br/>
        <input 
        className='input'
        type='text'
        placeholder='City'
        onChange={changeHandler}
        name='city'
        id='city'
        value={formData.city}
        />

        <br/>
        <label htmlFor='state' className='label'>State / Province</label>
        <br/>
        <input
        className='input'
        type='text'
        placeholder='Uttar Pradesh'
        onChange={changeHandler}
        name='state'
        id='state'
        value={formData.state}
        />

        <br/>
        <label htmlFor='zipCode' className='label'>Zip / Postal Code</label>
        <br/>
        <input 
        className='input'
        type='text'
        placeholder='1245432'
        onChange={changeHandler}
        name='zipCode'
        id='zipCode'
        value={formData.zipCode}
        />

        <br/>
        
        <fieldset>

          <legend>By Email</legend>

          <div className='checkboxes'>
            <input 
            type='checkbox'
            onChange={changeHandler}
            name='comments'
            id='comments'
            checked={formData.comments}
            />  

            <div className='checkbox-label'>
              <label htmlFor='comments'>Comments</label>
              <p className='checkbox-para'>Get notified when someone posts a comment on posting</p>
            </div>

        </div>

        <div className='checkboxes'>
            <input 
            type='checkbox'
            onChange={changeHandler}
            name='candidates'
            id='candidates'
            checked={formData.candidates}
            />  

            <div className='checkbox-label'>
              <label htmlFor='candidates'>Candidates</label>
              <p className='checkbox-para'>Get notified when a candidate applies for a job</p>
            </div>
        </div>

        <div className='checkboxes'>
            <input 
            type='checkbox'
            onChange={changeHandler}
            name='offers'
            id='offers'
            checked={formData.offers}
            />  

            <div className='checkbox-label'>
              <label htmlFor='offers'>Offers</label>
              <p className='checkbox-para'>Get notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>

        </fieldset>

        <br/>

        <fieldset>

          <legend>Push Notifications</legend>
          <p >These are delivered via SMS to your mobile phone.</p>
          
          <br/>

          <div className='radio-everything'>
            <input 
            className='radio-input'
            type='radio'
            onChange={changeHandler}
            name='pushNotifications'
            value='Everything'
            id='pushEverything'
            checked={formData.pushNotifications === 'Everything'}
            />

            <label htmlFor='pushEverything'>Everything</label>
          </div>


          <div className='radio-notification'>
            <input 
            className='radio-input'
            type='radio'
            onChange={changeHandler}
            name='pushNotifications'
            value='Same as email'
            id='pushEmail'
            checked={formData.pushNotifications === 'Same as email'}
            />
            <label htmlFor='pushEmail'>Same As Email</label>

          </div>

          <div className='radio-push'>
            <input 
            className='radio-input'
            type='radio'
            onChange={changeHandler}
            name='pushNotifications'
            value='No Push Notifications'
            id='pushNothing'
            checked={formData.pushNotifications === 'No Push Notifications'}
            />
            <label htmlFor='pushNothing'>No Push Notifications</label>
          </div>


        </fieldset>
        
        <br/>

        <button className='btn'>Submit</button>

      </form>
    </div>
  );
}

export default App;
