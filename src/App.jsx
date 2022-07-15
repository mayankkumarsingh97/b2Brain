import { useEffect } from "react";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ToggleButton from '@mui/material/ToggleButton';
import girl from "./img/mygirl.png"
import "./App.css";
export default function App() {

  const [values, setValues] = useState({
    name: "",
  })

  const [showData, SetShowData] = useState([])
  console.log(showData, 'yeeeeeeeeeeeeeeeeeeeee')

  const search = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,

    }));
    console.log(values.name)
    asyncGetCall();

  }

  // useEffect(() => {

  const asyncGetCall = async () => {
    try {
      const response = await fetch(`https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${values.name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      });
      const data = await response.json();
      console.log(data)
      SetShowData(data)



    }
    catch (error) {
      console.log(error)
    }
  }


  // }, [values])

  return (
    <>
      <div className="container-fluid">

        <div className="row justify-content-center">
          <div className="col-md-2  card shadow  mx-auto d-none d-sm-block">
            <div className="sidebar">
              <div className="logo mb-4">
                <img src="" alt="" />
                <h2 className="text-center">B2brain</h2>
              </div>
              <ul>
                <div className="d-flex align-items-center py-3">
                  <i className="fa fa-home" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="" className="dashboard">Dashboard</a></li>
                </div>
                <div className="d-flex align-items-center py-3">
                  <i className="fa fa-star" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="#Intels">Intels</a></li>
                </div>
                <div className="d-flex align-items-center py-3">
                  <i className="fa fa-user" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="#Leads">Leads</a></li>
                </div>

              </ul>
              <div className="dropdown">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-calculator" aria-hidden="true"></i> &nbsp;&nbsp; <a className="btn  dropdown-toggle p-0 lead" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Accounts
                  </a>
                </div>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Manage all</a></li>
                  <li><a className="dropdown-item" href="#">track new acc.</a></li>
                  <li><a className="dropdown-item" href="#">Bulk import</a></li>
                </ul>

              </div>


              <div className="dropdown">
                <div className="d-flex align-items-center">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Prefrences
                  </a>
                </div>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Manage all</a></li>
                  <li><a className="dropdown-item" href="#">track new acc.</a></li>
                  <li><a className="dropdown-item" href="#">Bulk import</a></li>
                </ul>

              </div>
              <ul>
                <div className="d-flex align-items-center py-3">
                  <i className="fa fa-pinterest-p" aria-hidden="true"></i> &nbsp;&nbsp;   <li><a href="">Intigrations</a></li>
                </div>
                <div className="d-flex align-items-center py-3">
                  <i className="fa fa-users" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="">Team</a></li>
                </div>
                <div className="d-flex align-items-center py-3">
                  <i className="fa fa-comments" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="">Help/Support</a></li>
                </div>
              </ul>


            </div>
          </div>

          {/* ye desktop ka hi */}
          {/* ye desktop ka hi */}
          <div className="col-md-10 bg-teal">
            <div className="searchbar d-md-block d-none">
              <input type="search" onChange={search} value={values.name} className="shadow topbar_search" placeholder="search by account name or website" />
            </div>
            <div className="row">
              <div className="position-relative">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 620"><path fill="#eeee" fill-opacity="1" d="M0,392L80,325C590,330,120,378,480,344C790,290,800,424,1060,540C1170,596,1280,624,6360,308L1440,392L1440,0L1360,0C1280,0,1120,0,960,0C800,0,40,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L60,229.3C120,203,240,149,360,128C480,107,600,117,720,149.3C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
              </div>
              <div className="col-md-10 mx-auto mt-5 p-md-5 position-absolute pipline">

                 <div className="row justify-content-between">
                  <div className="col-md-6 offset-1">
                  <h1>Increase your pipeline</h1>
                <h1>by <span style={{ color: "red" }}>35-150%</span></h1>
                <p>Automated account intelligence for your account team.</p>
                  </div>
                  <div className="col-md-5">
                    <div className="jumping_girl">
                      <img src={girl} className="girl_img" alt="jumping girl" />
                    </div>
                  </div>
                 </div>
              </div>
              <div className="col-md-12">
                <div className="header">
                  <div className="elements">
                    {
                      showData.map((item) => {
                        return <div className="mapReturn">
                          <div className="pic">
                            <div style={{ display: "flex", padding: "5px" }}>
                              <img src="" alt="img alt" />
                              <p>{item.vertical}</p>
                            </div>
                          </div>
                          <div className="content">
                            {item.company}
                          </div>
                          <div className="btn btn-primary">
                            Track
                          </div>
                        </div>
                      })
                    }

                  </div>
                </div>
              </div>

            </div>

            <div className="col-md-12">
              <div className="Customcard">
                <div className="">
                  <h1 className="text-center Trusted_h1 my-3">
                    Trusted by enterprise sales teams golobally.
                  </h1>
                </div>
                <div className="row d-flex justify-content-center my-5 ">
                  <div className="col-auto"><a href="#Salesloft" className="Salesloft">Salesloft.</a> </div>
                  <div className="col-auto"><a href="#ZETWORK" className="ZETWORK">ZETWORK</a> </div>
                  <div className="col-auto"><a href="#auditoria" className="auditoria lead">AUDITORIA* </a> </div>
                  <div className="col-auto"><a href="#entropick" className="entropick">entropick <sub><small className="smallTech">TECH</small></sub>  </a> </div>
                  <div className="col-auto"><a href="#capilary" className="capilary">capillary</a> </div>

                </div>
              </div>
            </div>
             

            <div className="row justify-content-center mb-5">
              <div className="col-auto">
                <h1>Hear from our customer</h1>
              </div>
              </div> 

            <div className="row my-5">
              
              <div className="col-md-6">
                  <div className="leftcard">
                   <div className="card py-2">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quasi unde cum 
                    illo enim a nihil modi facere eum architecto, amet incidunt quidem eligendi autem totam
                     officiis rerum dolore illum.
                   </div>
                  </div>
              </div>
              <div className="col-md-6">
                 <div className="rightcard">
                      <div className="card py-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id quam neque 
                  blanditiis atque, laboriosam incidunt culpa voluptatem. Ratione nostrum dignissimos
                   quae laudantium nemo iusto unde, eum fugiat quibusdam sapiente.
                      </div>
                 </div>
              </div>
            </div>


          </div>


        </div>

      </div>

      {/* side bar */}
      {/* side bar */}
      {/* side bar */}
      {/* side bar */}






      {/* moblie side click menu */}
      {/* moblie side click menu */}
      <div className="container d-md-none d-block fixed-top">
        <div className="row justify-content-around align-items-center">
          <div className="col-2">
            <div className="searchbar">
              <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
              </a>
            </div>
          </div>
          <div className="col-10 searchbar">
            <input type="search" onChange={search} value={values.name} className="shadow topbar_search" placeholder="search by account name or website" />
          </div>
        </div>

      </div>






      {/* Jo side se aata hai */}
      {/* Jo side se aata hai */}
      {/* Jo side se aata hai */}
      <div className="bg-secondary">
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">B2Brain</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body bg-secondary">
            <div className="sidebar">

              <div className="logo mb-1 ">
                <img src="" alt="" />

              </div>
              <ul>
                <div className="d-flex align-items-center my-2">
                  <i className="fa fa-home" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="" className="dashboard">Dashboard</a></li>
                </div>
                <div className="d-flex align-items-center my-2">
                  <i className="fa fa-star" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="#Intels">Intels</a></li>
                </div>
                <div className="d-flex align-items-center my-2">
                  <i className="fa fa-user" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="#Leads">Leads</a></li>
                </div>

              </ul>
              <div className="dropdown p-0">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-calculator" aria-hidden="true"></i> &nbsp;&nbsp; <a className="btn  dropdown-toggle p-0 lead" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Accounts
                  </a>
                </div>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Manage all</a></li>
                  <li><a className="dropdown-item" href="#">track new acc.</a></li>
                  <li><a className="dropdown-item" href="#">Bulk import</a></li>
                </ul>

              </div>


              <div className="dropdown p-0">
                <div className="d-flex align-items-center">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Prefrences
                  </a>
                </div>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Manage all</a></li>
                  <li><a className="dropdown-item" href="#">track new acc.</a></li>
                  <li><a className="dropdown-item" href="#">Bulk import</a></li>
                </ul>

              </div>
              <ul>
                <div className="d-flex align-items-center my-2">
                  <i className="fa fa-pinterest-p" aria-hidden="true"></i> &nbsp;&nbsp;   <li><a href="">Intigrations</a></li>
                </div>
                <div className="d-flex align-items-center my-2">
                  <i className="fa fa-users" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="">Team</a></li>
                </div>
                <div className="d-flex align-items-center my-2">
                  <i className="fa fa-comments" aria-hidden="true"></i> &nbsp;&nbsp; <li><a href="">Help/Support</a></li>
                </div>
              </ul>


            </div>

          </div>
        </div>
      </div>

    </>
  )
}





