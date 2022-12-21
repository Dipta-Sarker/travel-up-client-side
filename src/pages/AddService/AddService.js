import React from 'react';

const AddService = () => {
    const handleSubmit =(event)=>{
        event.preventDefault()
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const details = form.details.value;
        const price = form.price.value;

        const service = {
            title:name,
            img,
            details,
            price,
        }
        console.log(service)
        fetch('http://localhost:5000/addService',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged)
            alert('Added Service Successfully')
            console.log(data)
            form.reset()
            
        })
        .catch(e => console.error(e))
    }



    
    return (
        <div>
            <h1 className='text-center font-bold text-4xl border-b-4 border-emerald-500'>Add Services</h1>

      <div className="card w-full mr-10 mt-20 shadow-2xl bg-base-200">
      <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
              <label className="label">
                  <span className="label-text">Image</span>
              </label>
              <input type="text" name='img' placeholder="Enter Your Image Url " className="input input-bordered" />
          </div>
          <div className="form-control">
              <label className="label">
                  <span className="label-text">Service Name</span>
              </label>
              <input type="text" name='name' placeholder="Enter Your Service Name" className="input input-bordered" />
          </div>
          <div className="form-control">
              <label className="label">
                  <span className="label-text">Details</span>
              </label>
              <input type="text" name='details' placeholder="Enter Your Name" className="input input-bordered" />
          </div>
          <div className="form-control">
              <label className="label">
                  <span className="label-text">Price</span>
              </label>
              <input type="text"  name='price' placeholder='Price' className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
          </div>
      </form>
  </div>
        </div>
    );
};

export default AddService;