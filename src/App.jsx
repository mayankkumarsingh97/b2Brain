import { useEffect } from "react";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ToggleButton from '@mui/material/ToggleButton';
import girl from "./img/mygirl.png"
import bman from "./img/bman.png"
import "./App.css";
export default function App() {

  const [values, setValues] = useState({
    name: "",
  })

  const [showData, SetShowData] = useState([
    
  ])
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


          <div className="col-md-10 bg-teal" id="TheContent">
            <div className="searchbar d-md-block d-none">
              <input type="search" onChange={search} value={values.name} className="shadow topbar_search" placeholder="search by account name or website" />
            </div>
            <div className="row">
              <div className="position-relative">


              </div>
              <div className="col-md-10 mx-auto mt-5 p-md-5 position-absolute pipline">

                 <div className="row justify-content-between">
                  <div className="col-md-6 offset-md-1">
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

            <div className="col-md-12 mx-auto">
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
             

            <div className="row justify-content-center mb-2">
              <div className="col-auto">
                <h1 className="Trusted_h1">Hear from our customer</h1>
              </div>
              </div> 

            <div className="row my-5 justify-content-center">
              
              <div className="col-md-5 fontFam">
                  <div className="d-flex leftcard ">
                   <div className="d-flex shadow card p-3 flex-row justify-content-around align-items-center">
                   
                     <div className="d-flex  flex-column justify-content-between">
                   
                      <b className="py-1"><span ><i   className="fa fa-quote-left customerRe" aria-hidden="true"></i></span> set up a conversation with a <br />
                      hard-to-crack-account, widthn a week 
                      of starting with B2Brain.
                       </b>
                       
                       <small>Augie Hoffmann, SDR Manager</small>
                       <small>FOURKITES</small>
                     </div>
                     <img src={bman} className="img-fluid bman_img" alt="img" />
                   </div>
                  </div>
              </div>
              <div className="col-md-5">
                 <div className="rightcard">
                 <div className="d-flex shadow card p-3 flex-row justify-content-around align-items-center ">
                   
                   <div className="d-flex w-75 flex-column justify-content-between">
                 
                    <b className="py-1"><span ><i   className="fa fa-quote-left customerRe" aria-hidden="true"></i></span> set up a conversation with a <br />
                    hard-to-crack-account, widthn a week
                    of starting with B2Brain.
                     </b>
                     
                     <small>Augie Hoffmann, SDR Manager</small>
                     <small>FOURKITES</small>
                   </div>
                   <img src={bman} className="bman_img" alt="img" />
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
      <div className="container d-md-none d-block fixed-top " >
        <div className="row justify-content-around align-items-center" style={{backgroundColor:"#eee"}}>
          <div className="col-2">
            <div className="searchbar">
              <a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
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






      <div className="bg-secondary">
        <div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">B2Brain</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body bg-secondary">
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





