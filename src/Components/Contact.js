import React from 'react';

const Contact = () => {
  const [formData, setFormData] = React.useState(
    {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        employment: "",
        favColor: ""
    }
  )

  const handleChange = event => {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
  }

  const handleSubmit = event => {
      event.preventDefault()
      // submitToApi(formData)
      console.log(formData)
  }

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
          />
          <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
          />
          <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
          />
          <textarea
              value={formData.message}
              placeholder="message"
              onChange={handleChange}
              name="message"
          />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact;
