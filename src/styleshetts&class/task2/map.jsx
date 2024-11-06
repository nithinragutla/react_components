import React, { Component } from 'react';

class Mapp  extends Component{
    render(){
  return(
    <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30443.068151393454!2d78.4047459!3d17.489196449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ec0162f43d%3A0x3288c6fe4358cf48!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1729662751203!5m2!1sen!2sin"
                width="100%"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
        </div>

  );
}
}

export default Mapp;
