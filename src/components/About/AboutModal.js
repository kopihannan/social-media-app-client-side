import React from 'react';

const AboutModal = () => {

    const handlePost = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const skill = form.skill.value;

        form.reset()


        const profile = {
            name, email, university, address, phone, skill
        }

        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })

    }



    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handlePost} className="modal-box relative">
                    <div className=''>
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-3">✕</label>
                        <h3 className="text-lg font-bold text-center pb-4">Edit Profile</h3>
                    </div>
                    <div className=''>
                        <input type="text" placeholder="Name" name='name' className="mb-2 input input-bordered w-full" />
                        <input type="text" placeholder="Email" name='email' className="mb-2 input input-bordered w-full" />
                        <input type="text" placeholder="University" name='university' className="mb-2 input input-bordered w-full" />
                        <input type="text" placeholder="Address" name='address' className="mb-2 input input-bordered w-full" />
                        <input type="text" placeholder="Phone" name='phone' className="mb-2 input input-bordered w-full" />
                        <input type="text" placeholder="Skills" name='skill' className="mb-2 input input-bordered w-full" />
                    </div>
                    <button type='submit' className="modal-action w-full">
                        <label htmlFor="my-modal-3" className="btn w-full bg-purple-500 border-none hover:bg-purple-700">Submit</label>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AboutModal;