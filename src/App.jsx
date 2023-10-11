import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';


const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 20;

const App = () => {
  // console.log(import.meta.env.VITE_API_KEY);
  const searchInput = useRef(null);

 const[images, setImages] = useState([]);
 const[totalPages, setTotalPages] = useState(0);


  const fetchImages = async() => {
    try {
      const {data} = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`);
      // console.log(data);
          setImages(data.results);
          setTotalPages(data.total_pages);
     } catch (error) {
         console.log(error);
     }
  }

  const handleSearch = (event) => {
     event.preventDefault();
     fetchImages();
    //  console.log(searchInput.current.value);
  }

  const handleSelection = (selection) => {
     searchInput.current.value = selection;
     fetchImages()
  }
  return (
    <div className="container">
        <h1 className="title">Image Search</h1>
        <div className="search-section">
          <Form onSubmit={handleSearch}>

          <Form.Control type='search' placeholder='Type something to search..' className = 'search-input' ref={searchInput}/>
          </Form>
        </div>
        <div className="filters">
            <div className='btn text-white' style={{backgroundColor: '#7676d7'}} onClick={() => handleSelection('nature')}>Nature</div>
            <div className='btn text-white' style={{backgroundColor: '#7676d7'}} onClick={() => handleSelection('birds')}>Birds</div>
            <div className='btn text-white' style={{backgroundColor: '#7676d7'}} onClick={() => handleSelection('cats')}>Cats</div>
            <div className='btn text-white' style={{backgroundColor: '#7676d7'}} onClick={() => handleSelection('shoe')}>Shoes</div>
        </div>
        <div className="row mt-5">
            {
              images.map(image => {
                  return (
                    <div className='col-lg-3'>

                      <img key={image.id} src={image.urls.small} alt={images.alt_description} className='img-fluid' style={{height: '300px'}}/>
                    </div>
                  )
              })
            }
        </div>
    </div>
  )
}

export default App
