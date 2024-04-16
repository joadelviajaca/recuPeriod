import "./Profile.css";

export default function Profile({name, bio, image, age, email, skills}){
    const skillsList = skills.map((skill,index) =>  <span className="badge bg-success mr-2" key={index}>{skill}</span>)
    return (
        <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">{name}</h3>
                <p>
                  {bio}
                </p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Age</label>
                      <p>{age}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>info@domain.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img
                  src={image}
                  title=""
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="row mx-auto">
              {skillsList}
              
    
            </div>
          </div>
        </div>
      </section>
      
      )

}
