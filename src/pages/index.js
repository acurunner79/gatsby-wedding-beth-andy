import React from "react"
import  Layout  from '../components/Layout/index'
import  Countdown  from '../components/Countdown/index'


const Index = () => {
  return (
    <Layout>
      <div className="App">
          <h1>We're engaged!</h1>
          <h2>Save the date!</h2>
          <img className='main-image' src="https://res.cloudinary.com/acurunner79/image/upload/v1617227539/IMG_0209_rdvxy8.jpg" alt='Beth & Andy'/>
          <h2>April 30, 2022</h2>
        <Countdown />
    </div>
    </Layout>
  )
}

export default Index
