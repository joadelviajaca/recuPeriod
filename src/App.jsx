import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'

function App() {

  const [profiles, setProfiles] = useState([
    {
      name:"Joaquín Delhom",
      age:45,
      bio:`I design and develop services for customers of all 
      sizes, specializing in creating stylish, modern websites, web
      services and online stores. My passion is to design digital user
      experiences through the bold interface and meaningful interactions.`,
      skills: ['Angular', 'NodeJS', 'React', 'Javascript'],
      image:  'https://bootdey.com/img/Content/avatar/avatar7.png'

    },
    {
      name:"Inmaculada Olías",
      age:'?',
      bio:`I design and develop services for customers of all 
      sizes, specializing in creating stylish, modern websites, web
      services and online stores. My passion is to design digital user
      experiences through the bold interface and meaningful interactions.`,
      skills: ['Spring', 'Java', 'JSP', 'Databases'],
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png'

    }
  ])
  const profilesList = profiles.map((profile,index)=> <Profile key={index} name={profile.name} age={profile.age} bio={profile.bio} skills={profile.skills} image={profile.image}/>);

  return (
    <>
    <div className='container-fluid'>
      <h1> About us</h1>
      {profilesList}
      {/* <Profile 
          name='Joaquín Delhom' 
          age='45' 
          bio='I design and develop services for customers of all
                  sizes, specializing in creating stylish, modern websites, web
                  services and online stores. My passion is to design digital user
                  experiences through the bold interface and meaningful interactions.'
          skills={['Angular', 'NodeJS', 'React', 'Javascript']}></Profile> */}
      {/* <Profile></Profile>
      <Profile></Profile> */}
    </div>
    </>
  
  )
}

export default App
